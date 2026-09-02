import dotenv from "dotenv";

dotenv.config();

const GITHUB_API = process.env.GITHUB_API_URL || "https://api.github.com";

const getHeaders = () => {
  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
};

// Get GitHub user profile
export const getGithubProfile = async (username) => {
  const response = await fetch(`${GITHUB_API}/users/${username}`, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("GitHub user not found");
    }

    throw new Error("Failed to fetch GitHub profile");
  }

  return response.json();
};

// Get user's repositories
export const getGithubRepositories = async (username) => {
  const response = await fetch(
    `${GITHUB_API}/users/${username}/repos?per_page=100&sort=updated`,
    {
      headers: getHeaders(),
    },
  );

  const data = await response.json();

  console.log("Repositories Status:", response.status);
  console.log("Repositories Response:", data);

  if (!response.ok) {
    throw new Error(
      `GitHub repositories error (${response.status}): ${
        data?.message || "Unknown error"
      }`,
    );
  }

  return data;
};

// Get repository commits
export const getRepositoryCommits = async (owner, repo) => {
  const response = await fetch(
    `${GITHUB_API}/repos/${owner}/${repo}/commits?per_page=100`,
    {
      headers: getHeaders(),
    },
  );

  if (!response.ok) {
    return [];
  }

  return response.json();
};

// Get contribution activity from analyzed repositories
export const getContributionActivity = async (username, repositories) => {
  const today = new Date();

  const oneYearAgo = new Date(today);
  oneYearAgo.setDate(oneYearAgo.getDate() - 365);

  const since = oneYearAgo.toISOString();
  const until = today.toISOString();

  const activityMap = {};

  // Create all dates for the last 365 days
  for (
    let date = new Date(oneYearAgo);
    date <= today;
    date.setDate(date.getDate() + 1)
  ) {
    const dateKey = date.toISOString().split("T")[0];

    activityMap[dateKey] = 0;
  }

  // Only analyze top 10 repositories
  const topRepositories = repositories.slice(0, 10);

  await Promise.all(
    topRepositories.map(async (repository) => {
      const response = await fetch(
        `${GITHUB_API}/repos/${username}/${repository.name}/commits?per_page=100&author=${username}&since=${since}&until=${until}`,
        {
          headers: getHeaders(),
        },
      );

      if (!response.ok) {
        return;
      }

      const commits = await response.json();

      commits.forEach((commit) => {
        const commitDate =
          commit.commit?.author?.date || commit.commit?.committer?.date;

        if (!commitDate) {
          return;
        }

        const dateKey = commitDate.split("T")[0];

        if (activityMap[dateKey] !== undefined) {
          activityMap[dateKey] += 1;
        }
      });
    }),
  );

  return Object.entries(activityMap).map(([date, count]) => ({
    date,
    count,
  }));
};

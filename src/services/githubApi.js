const GITHUB_API = "https://api.github.com";

// Get GitHub user profile
export const getGithubUser = async (username) => {
  const response = await fetch(`${GITHUB_API}/users/${username}`);

  if (!response.ok) {
    throw new Error("GitHub user not found");
  }

  const data = await response.json();

  return data;
};

// Get user's repositories
export const getGithubRepositories = async (username) => {
  const response = await fetch(
    `${GITHUB_API}/users/${username}/repos?per_page=100`,
  );

  if (!response.ok) {
    throw new Error("Repositories could not be fetched");
  }

  const data = await response.json();

  return data;
};

import { useState } from "react";

import { getGithubUser, getGithubRepositories } from "../services/githubApi";

const AnalyzerSearch = ({ onDataFound, loading = false }) => {
  const [username, setUsername] = useState("");
  const [inputError, setInputError] = useState("");

  const handleSubmit = async () => {
    const value = username.trim();

    if (!value) {
      setInputError("Please enter a GitHub username");
      return;
    }

    try {
      setInputError("");

      const user = await getGithubUser(value);
      const repositories = await getGithubRepositories(value);

      const stars = repositories.reduce(
        (total, repo) => total + repo.stargazers_count,
        0,
      );

      const forks = repositories.reduce(
        (total, repo) => total + repo.forks_count,
        0,
      );

      const languageCounts = repositories.reduce((result, repo) => {
        if (repo.language) {
          result[repo.language] = (result[repo.language] || 0) + 1;
        }

        return result;
      }, {});

      const total = Object.values(languageCounts).reduce(
        (sum, count) => sum + count,
        0,
      );

      const languages = total
        ? Object.entries(languageCounts)
            .map(([name, count]) => ({
              name,
              percentage: Math.round((count / total) * 100),
            }))
            .sort((a, b) => b.percentage - a.percentage)
        : [];

      onDataFound({
        user,
        repositories,
        languages,
        stats: {
          repositories: user.public_repos,
          stars,
          forks,
          followers: user.followers,
          following: user.following,
          commits: 0,
        },
      });
    } catch (error) {
      setInputError(error.message);
    }
  };

  return (
    <div className="mt-8 w-full max-w-xl">
      <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 p-1.5">
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setInputError("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          placeholder="Enter GitHub username..."
          disabled={loading}
          className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-600 disabled:opacity-50"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="shrink-0 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {inputError && <p className="mt-3 text-sm text-red-400">{inputError}</p>}
    </div>
  );
};

export default AnalyzerSearch;

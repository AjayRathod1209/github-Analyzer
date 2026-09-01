import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ComparisonSearch from "../components/ComparisonSearch";
import ComparisonProfile from "../components/ComparisonProfile";
import ComparisonStats from "../components/ComparisonStats";
import ComparisonWinner from "../components/ComparisonWinner";
import ComparisonLanguages from "../components/ComparisonLanguages";
import ComparisonRepositories from "../components/ComparisonRepositories";

import { getGithubUser, getGithubRepositories } from "../services/githubApi";

const Comparision = () => {
  const navigate = useNavigate();

  const [comparisonData, setComparisonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCompare = async ({ firstUsername, secondUsername }) => {
    try {
      setLoading(true);
      setError("");

      const [firstUser, secondUser] = await Promise.all([
        getGithubUser(firstUsername.trim()),
        getGithubUser(secondUsername.trim()),
      ]);

      const [firstRepositories, secondRepositories] = await Promise.all([
        getGithubRepositories(firstUsername.trim()),
        getGithubRepositories(secondUsername.trim()),
      ]);

      const getLanguages = (repositories) => {
        const counts = repositories.reduce((result, repo) => {
          if (repo.language) {
            result[repo.language] = (result[repo.language] || 0) + 1;
          }

          return result;
        }, {});

        const total = Object.values(counts).reduce(
          (sum, count) => sum + count,
          0,
        );

        if (!total) return [];

        return Object.entries(counts)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / total) * 100),
          }))
          .sort((a, b) => b.percentage - a.percentage);
      };

      setComparisonData({
        firstUser,
        secondUser,
        firstRepositories,
        secondRepositories,
        firstLanguages: getLanguages(firstRepositories),
        secondLanguages: getLanguages(secondRepositories),
      });
    } catch (error) {
      setError(error.message);
      setComparisonData(null);
    } finally {
      setLoading(false);
    }
  };

  const firstStars =
    comparisonData?.firstRepositories.reduce(
      (total, repo) => total + repo.stargazers_count,
      0,
    ) || 0;

  const secondStars =
    comparisonData?.secondRepositories.reduce(
      (total, repo) => total + repo.stargazers_count,
      0,
    ) || 0;

  return (
    <main className="min-h-screen w-full px-5 py-8 sm:px-8 lg:px-12">
      {/* Back */}
      <button
        onClick={() => navigate("/")}
        className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition-all duration-300 hover:border-blue-400/50 hover:bg-white/10"
      >
        ← Back
      </button>

      {/* Header */}
      <section className="mx-auto mt-10 w-full max-w-7xl">
        <div className="text-center">
          <h1 className="bg-linear-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
            Compare GitHub Profiles
          </h1>

          <p className="mt-4 text-gray-400">
            Compare two developers side-by-side with detailed metrics
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center">
          <ComparisonSearch onCompare={handleCompare} loading={loading} />
        </div>

        {/* Error */}
        {error && (
          <p className="mt-4 text-center text-sm text-red-400">{error}</p>
        )}

        {/* Comparison Results */}
        {comparisonData && (
          <div className="mt-10 space-y-8">
            {/* ROW 1 — Profiles + Winner */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <ComparisonProfile
                user={comparisonData.firstUser}
                repositories={comparisonData.firstRepositories}
              />

              <ComparisonWinner
                firstUser={comparisonData.firstUser}
                secondUser={comparisonData.secondUser}
                firstStars={firstStars}
                secondStars={secondStars}
              />

              <ComparisonProfile
                user={comparisonData.secondUser}
                repositories={comparisonData.secondRepositories}
              />
            </div>

            {/* ROW 2 — Stats */}
            <ComparisonStats
              firstUser={comparisonData.firstUser}
              secondUser={comparisonData.secondUser}
              firstStars={firstStars}
              secondStars={secondStars}
            />

            {/* ROW 3 — Languages */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <ComparisonLanguages
                languages={comparisonData.firstLanguages}
                title="Developer 1 Languages"
              />

              <ComparisonLanguages
                languages={comparisonData.secondLanguages}
                title="Developer 2 Languages"
              />
            </div>

            {/* ROW 4 — Repositories */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <ComparisonRepositories
                repositories={comparisonData.firstRepositories}
                title="Developer 1 Repositories"
              />

              <ComparisonRepositories
                repositories={comparisonData.secondRepositories}
                title="Developer 2 Repositories"
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Comparision;

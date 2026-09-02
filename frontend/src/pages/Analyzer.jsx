import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AnalyzerSearch from "../components/AnalyzerSearch";
import ProfileCard from "../components/ProfileCard";
import StatsGrid from "../components/StatsGrid";
import ContributionStats from "../components/ContributionStats";
import Languages from "../components/Languages";
import RepositoryList from "../components/RepositoryList";
import ContributionGraph from "../components/ContributionGraph";
import AIAnalysis from "../components/AIAnalysis";

import { getGithubContributions, getAIAnalysis } from "../services/githubApi";

const Analyzer = () => {
  const navigate = useNavigate();

  const [analyzerData, setAnalyzerData] = useState(null);
  const [contributionData, setContributionData] = useState(null);

  // AI states
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);

  // GitHub data
  const handleDataFound = async (data) => {
    setAnalyzerData(data);

    // Reset old data when a new profile is searched
    setContributionData(null);
    setAiAnalysis(null);

    const username = data.user.login;

    try {
      const contribution = await getGithubContributions(username);

      setContributionData(contribution);
    } catch (error) {
      console.error("Contribution fetch error:", error);

      setContributionData(null);
    }
  };

  // AI analysis
  const handleAIAnalysis = async () => {
    if (!analyzerData?.user?.login) return;

    try {
      setAiLoading(true);
      setAiAnalysis(null);

      const username = analyzerData.user.login;

      const result = await getAIAnalysis(username);

      setAiAnalysis(result);
    } catch (error) {
      console.error("AI analysis error:", error);

      setAiAnalysis(null);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full px-5 py-8 sm:px-8 lg:px-12">
      {/* Back */}
      <button
        onClick={() => navigate("/home")}
        className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition-all duration-300 hover:border-blue-400/50 hover:bg-white/10"
      >
        ← Back
      </button>

      {/* Header */}
      <section className="mx-auto mt-10 w-full max-w-7xl">
        <div className="text-center">
          <h1 className="bg-linear-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
            GitHub Profile Analyzer
          </h1>

          <p className="mt-4 text-gray-400">
            Analyze GitHub developers with visual insights
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center">
          <AnalyzerSearch onDataFound={handleDataFound} />
        </div>

        {/* Results */}
        {analyzerData && (
          <div className="mt-10 space-y-8">
            {/* ROW 1 — Profile + Stats + Contributions */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <ProfileCard user={analyzerData.user} />

              <StatsGrid
                stats={{
                  ...analyzerData.stats,
                  commits:
                    contributionData?.totalCommits ??
                    analyzerData.stats.commits,
                }}
              />

              <ContributionStats
                commits={contributionData?.totalCommits ?? 0}
                repositoriesAnalyzed={
                  contributionData?.repositoriesAnalyzed ?? 0
                }
                bestContribution={contributionData?.bestContribution ?? null}
              />
            </div>

            {/* ROW 2 — Contribution Graph */}
            <div>
              <ContributionGraph activity={contributionData?.activity ?? []} />
            </div>

            {/* ROW 3 — Languages + AI + Repositories */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* LEFT COLUMN */}
              <div className="space-y-6">
                <Languages languages={analyzerData.languages} />

                <AIAnalysis
                  analysis={aiAnalysis}
                  loading={aiLoading}
                  onAnalyze={handleAIAnalysis}
                />
              </div>

              {/* RIGHT COLUMN */}
              <RepositoryList repositories={analyzerData.repositories} />
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Analyzer;

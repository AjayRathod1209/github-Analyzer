import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AnalyzerSearch from "../components/AnalyzerSearch";
import ProfileCard from "../components/ProfileCard";
import StatsGrid from "../components/StatsGrid";
import ContributionStats from "../components/ContributionStats";
import Languages from "../components/Languages";
import RepositoryList from "../components/RepositoryList";

const Analyzer = () => {
  const navigate = useNavigate();
  const [analyzerData, setAnalyzerData] = useState(null);

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
            GitHub Profile Analyzer
          </h1>

          <p className="mt-4 text-gray-400">
            Analyze GitHub developers with visual insights
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center">
          <AnalyzerSearch onDataFound={setAnalyzerData} />
        </div>

        {/* Results */}
        {analyzerData && (
          <div className="mt-10 space-y-8">
            {/* ROW 1 — Profile + Stats + Contributions */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <ProfileCard user={analyzerData.user} />

              <StatsGrid stats={analyzerData.stats} />

              <ContributionStats commits={analyzerData.stats.commits} />
            </div>

            {/* ROW 2 — Languages + Repositories */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Languages languages={analyzerData.languages} />

              <RepositoryList repositories={analyzerData.repositories} />
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Analyzer;

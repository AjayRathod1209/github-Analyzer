const ContributionStats = ({
  commits = 0,
  repositoriesAnalyzed = 0,
  bestContribution = null,
}) => {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-green-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-green-500/10">
      {/* Header */}
      <h2 className="text-xl font-bold text-white">Contributions</h2>

      <p className="mt-1 text-sm text-gray-400">GitHub contribution activity</p>

      {/* Total Commits */}
      <div className="mt-6 flex h-32 flex-col items-center justify-center rounded-xl border border-green-500/30 bg-green-500/5">
        <span className="text-5xl font-extrabold text-green-400">
          {commits}
        </span>

        <span className="mt-2 text-sm font-medium text-gray-400">
          Total Commits
        </span>
      </div>

      {/* Contribution Details */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {/* Repositories Analyzed */}
        <div className="rounded-xl border border-white/10 bg-black/10 p-4">
          <p className="text-2xl font-bold text-white">
            {repositoriesAnalyzed}
          </p>

          <p className="mt-1 text-xs text-gray-400">Repositories Analyzed</p>
        </div>

        {/* Best Contribution */}
        <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
          <p className="text-xs font-medium text-yellow-400">
            🏆 Best Contribution
          </p>

          <p className="mt-2 truncate text-lg font-bold text-white">
            {bestContribution?.name || "—"}
          </p>

          <p className="mt-1 text-xs text-green-400">
            {bestContribution
              ? `${bestContribution.commits} commits`
              : "No data available"}
          </p>
        </div>
      </div>

      {/* Best Repository Link */}
      {bestContribution?.url && (
        <a
          href={bestContribution.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium text-blue-400 transition-all duration-300 hover:border-blue-400/40 hover:bg-white/10 hover:text-blue-300"
        >
          View Best Repository ↗
        </a>
      )}
    </div>
  );
};

export default ContributionStats;

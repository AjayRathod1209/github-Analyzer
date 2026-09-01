const ContributionStats = ({ commits = 0 }) => {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-green-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-green-500/10">
      <h2 className="text-xl font-bold text-white">Contributions</h2>

      <p className="mt-1 text-sm text-gray-400">GitHub contribution activity</p>

      <div className="mt-6 flex h-40 flex-col items-center justify-center rounded-xl border border-green-500/30 bg-green-500/5">
        <span className="text-5xl font-extrabold text-green-400">
          {commits}
        </span>

        <span className="mt-2 text-sm font-medium text-gray-400">
          Total Commits
        </span>

        <div className="mt-4 h-1.5 w-24 overflow-hidden rounded-full bg-gray-700">
          <div className="h-full w-2/3 rounded-full bg-green-400" />
        </div>
      </div>
    </div>
  );
};

export default ContributionStats;

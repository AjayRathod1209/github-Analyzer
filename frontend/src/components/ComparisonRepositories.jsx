const ComparisonRepositories = ({ repositories = [], title }) => {
  const topRepositories = [...repositories]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-bold text-white">{title}</h2>

      <p className="mt-1 text-sm text-gray-400">
        Top repositories ranked by stars
      </p>

      <div className="mt-6 space-y-3">
        {topRepositories.length > 0 ? (
          topRepositories.map((repo) => (
            <div
              key={repo.id}
              className="rounded-xl border border-white/10 bg-black/10 p-4 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/5"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold text-white">{repo.name}</h3>

                <span className="shrink-0 text-sm font-semibold text-yellow-400">
                  ⭐ {repo.stargazers_count}
                </span>
              </div>

              <p className="mt-2 line-clamp-2 text-sm text-gray-400">
                {repo.description || "No description available"}
              </p>

              <div className="mt-3 flex gap-4 text-xs text-gray-500">
                <span>🍴 {repo.forks_count}</span>
                <span>💻 {repo.language || "Unknown"}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="py-10 text-center text-sm text-gray-500">
            No repositories found
          </p>
        )}
      </div>
    </div>
  );
};

export default ComparisonRepositories;

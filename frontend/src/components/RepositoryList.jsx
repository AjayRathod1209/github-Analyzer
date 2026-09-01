const RepositoryList = ({ repositories = [] }) => {
  // Get top 6 repositories by stars
  const topRepositories = [...repositories]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-blue-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">Top Repositories</h2>

        <p className="mt-1 text-sm text-gray-400">Most starred repositories</p>
      </div>

      {/* Repository Cards */}
      {topRepositories.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {topRepositories.map((repo) => (
            <div
              key={repo.id}
              className="group rounded-xl border border-white/10 bg-black/10 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/5 hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Repository Name */}
              <div className="flex items-start justify-between gap-3">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="min-w-0  wrap-break-words text-lg font-semibold text-blue-400 transition-colors group-hover:text-blue-300"
                >
                  {repo.name}
                </a>

                {/* Visibility */}
                <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-xs text-gray-500">
                  {repo.visibility}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-400">
                {repo.description || "No description available"}
              </p>

              {/* Stats */}
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  ⭐<span>{repo.stargazers_count}</span>
                </span>

                <span className="flex items-center gap-1">
                  🍴
                  <span>{repo.forks_count}</span>
                </span>

                {repo.language && (
                  <span className="flex items-center gap-1">
                    💻
                    <span>{repo.language}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="py-10 text-center text-sm text-gray-500">
          Repository data will appear here
        </p>
      )}
    </div>
  );
};

export default RepositoryList;

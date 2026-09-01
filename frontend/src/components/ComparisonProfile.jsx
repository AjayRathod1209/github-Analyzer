const ComparisonProfile = ({ user, repositories }) => {
  const stars = repositories.reduce(
    (total, repo) => total + repo.stargazers_count,
    0,
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="mx-auto h-24 w-24 rounded-full"
      />

      <h2 className="mt-4 text-xl font-bold text-white">
        {user.name || user.login}
      </h2>

      <p className="text-blue-400">@{user.login}</p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <Stat label="Repositories" value={user.public_repos} />

        <Stat label="Stars" value={stars} />

        <Stat label="Followers" value={user.followers} />

        <Stat label="Following" value={user.following} />
      </div>
    </div>
  );
};

const Stat = ({ label, value }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-black/10 p-4">
      <p className="text-xs text-gray-500">{label}</p>

      <p className="mt-1 text-xl font-bold text-white">{value}</p>
    </div>
  );
};

export default ComparisonProfile;

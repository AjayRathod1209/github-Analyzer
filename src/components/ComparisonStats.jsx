const ComparisonStats = ({
  firstUser,
  secondUser,
  firstStars,
  secondStars,
}) => {
  const firstStats = [
    {
      label: "Repositories",
      value: firstUser.public_repos,
      other: secondUser.public_repos,
    },
    {
      label: "Stars",
      value: firstStars,
      other: secondStars,
    },
    {
      label: "Followers",
      value: firstUser.followers,
      other: secondUser.followers,
    },
    {
      label: "Following",
      value: firstUser.following,
      other: secondUser.following,
    },
  ];

  const secondStats = [
    {
      label: "Repositories",
      value: secondUser.public_repos,
      other: firstUser.public_repos,
    },
    {
      label: "Stars",
      value: secondStars,
      other: firstStars,
    },
    {
      label: "Followers",
      value: secondUser.followers,
      other: firstUser.followers,
    },
    {
      label: "Following",
      value: secondUser.following,
      other: firstUser.following,
    },
  ];

  return (
    <div className="mt-8 w-full">
      <h2 className="mb-6 text-center text-xl font-bold text-white">
        Comparison Stats
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <StatsCard title="Developer 1" stats={firstStats} />

        <StatsCard title="Developer 2" stats={secondStats} />
      </div>
    </div>
  );
};

const StatsCard = ({ title, stats }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="mb-5 text-lg font-bold text-white">{title}</h3>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => {
          const winner = stat.value > stat.other;
          const loser = stat.value < stat.other;

          return (
            <div
              key={stat.label}
              className={`rounded-xl border p-4 transition-all duration-300 ${
                winner
                  ? "border-green-500/60 bg-green-500/5 shadow-lg shadow-green-500/10"
                  : loser
                    ? "border-red-500/40 bg-red-500/5"
                    : "border-white/10 bg-black/10"
              }`}
            >
              <p className="text-xs text-gray-500">{stat.label}</p>

              <p
                className={`mt-2 text-2xl font-bold ${
                  winner
                    ? "text-green-400"
                    : loser
                      ? "text-red-400"
                      : "text-gray-300"
                }`}
              >
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonStats;

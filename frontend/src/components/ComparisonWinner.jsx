const ComparisonWinner = ({
  firstUser,
  secondUser,
  firstStars,
  secondStars,
}) => {
  const stats = [
    [firstUser.public_repos, secondUser.public_repos],
    [firstStars, secondStars],
    [firstUser.followers, secondUser.followers],
    [firstUser.following, secondUser.following],
  ];

  let firstWins = 0;
  let secondWins = 0;

  stats.forEach(([first, second]) => {
    if (first > second) firstWins++;
    if (second > first) secondWins++;
  });

  const isTie = firstWins === secondWins;

  const winner = firstWins > secondWins ? firstUser : secondUser;

  const winnerWins = firstWins > secondWins ? firstWins : secondWins;

  return (
    <div className="flex h-full min-h-65 flex-col items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/5 p-6 shadow-lg shadow-green-500/10">
      {isTie ? (
        <>
          <div className="text-4xl">🤝</div>

          <h2 className="mt-3 text-2xl font-bold text-white">It's a Tie</h2>

          <p className="mt-2 text-sm text-gray-400">
            Both developers won {firstWins} metrics
          </p>
        </>
      ) : (
        <>
          <div className="text-3xl">🏆</div>

          <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-green-400">
            Overall Winner
          </p>

          <img
            src={winner.avatar_url}
            alt={winner.login}
            className="mt-4 h-24 w-24 rounded-full border-2 border-green-400 object-cover shadow-lg shadow-green-500/30"
          />

          <h2 className="mt-4 text-xl font-bold text-white">
            {winner.name || winner.login}
          </h2>

          <p className="mt-1 text-sm text-green-400">@{winner.login}</p>

          <div className="mt-4 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2">
            <span className="text-sm font-semibold text-green-400">
              {winnerWins} / {stats.length} metrics won
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default ComparisonWinner;

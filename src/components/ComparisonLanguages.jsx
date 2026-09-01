const getLanguageColor = (index) => {
  const colors = [
    "#3b82f6",
    "#22c55e",
    "#a855f7",
    "#f97316",
    "#eab308",
    "#ec4899",
    "#06b6d4",
    "#ef4444",
  ];

  return colors[index % colors.length];
};

const ComparisonLanguages = ({ languages = [], title }) => {
  const segments = [];
  let total = 0;

  languages.forEach((language, index) => {
    const start = total;
    total += language.percentage;

    segments.push(`${getLanguageColor(index)} ${start}% ${total}%`);
  });

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-bold text-white">{title}</h2>

      <p className="mt-1 text-sm text-gray-400">
        Programming languages used across repositories
      </p>

      {languages.length > 0 ? (
        <div className="mt-6 flex flex-col items-center">
          <div
            className="relative h-48 w-48 rounded-full"
            style={{
              background: `conic-gradient(${segments.join(", ")})`,
            }}
          >
            <div className="absolute inset-5 flex flex-col items-center justify-center rounded-full bg-[#0b1220]">
              <span className="text-3xl font-bold text-white">
                {languages.length}
              </span>

              <span className="text-sm text-gray-500">Languages</span>
            </div>
          </div>

          <div className="mt-6 flex w-full flex-wrap justify-center gap-2">
            {languages.map((language, index) => (
              <div
                key={language.name}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/10 px-3 py-2"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: getLanguageColor(index),
                  }}
                />

                <span className="text-sm text-gray-300">{language.name}</span>

                <span className="text-sm font-semibold text-blue-400">
                  {language.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="py-10 text-center text-sm text-gray-500">
          No language data
        </p>
      )}
    </div>
  );
};

export default ComparisonLanguages;

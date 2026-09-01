// Get color for each language
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

const Languages = ({ languages = [] }) => {
  // Create donut chart segments
  const gradient = languages.reduce(
    (result, language, index) => {
      const start = result.total;
      const end = start + language.percentage;

      result.segments.push(`${getLanguageColor(index)} ${start}% ${end}%`);

      result.total = end;

      return result;
    },
    { segments: [], total: 0 },
  );

  return (
    <div className="h-fit w-full rounded-2xl border border-white/10 bg-white/5 p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">Languages</h2>

        <p className="mt-1 text-sm text-gray-400">
          Programming languages used across repositories
        </p>
      </div>

      {languages.length > 0 ? (
        <div className="flex flex-col items-center">
          {/* Donut Chart */}
          <div
            className="relative h-48 w-48 shrink-0 rounded-full"
            style={{
              background: `conic-gradient(${gradient.segments.join(", ")})`,
            }}
          >
            {/* Donut Center */}
            <div className="absolute inset-5 flex flex-col items-center justify-center rounded-full bg-[#0b1220]">
              <span className="text-3xl font-bold text-white">
                {languages.length}
              </span>

              <span className="text-sm text-gray-500">Languages</span>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-8 flex w-full flex-wrap justify-center gap-2">
            {languages.map((language, index) => (
              <div
                key={language.name}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/10 px-3 py-2 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/5"
              >
                {/* Language Dot */}
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{
                    backgroundColor: getLanguageColor(index),
                  }}
                />

                {/* Language Name */}
                <span className="text-sm font-medium text-gray-300">
                  {language.name}
                </span>

                {/* Percentage */}
                <span className="text-sm font-semibold text-blue-400">
                  {language.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="py-10 text-center text-sm text-gray-500">
          Language data will appear here
        </p>
      )}
    </div>
  );
};

export default Languages;

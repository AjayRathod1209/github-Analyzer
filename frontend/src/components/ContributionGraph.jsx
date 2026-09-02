const ContributionGraph = ({ activity = [] }) => {
  const getIntensityClass = (count) => {
    if (count === 0) {
      return "bg-white/5";
    }

    if (count <= 2) {
      return "bg-green-900/70";
    }

    if (count <= 5) {
      return "bg-green-700";
    }

    if (count <= 9) {
      return "bg-green-500";
    }

    return "bg-green-400";
  };

  const activityMap = new Map(activity.map((day) => [day.date, day.count]));

  const lastActivityDate =
    activity.length > 0
      ? new Date(`${activity[activity.length - 1].date}T00:00:00`)
      : new Date();

  const startDate = new Date(lastActivityDate);

  startDate.setDate(startDate.getDate() - 364);

  // Start from Sunday
  startDate.setDate(startDate.getDate() - startDate.getDay());

  const weeks = [];
  let currentDate = new Date(startDate);

  while (weeks.length < 53) {
    const week = [];

    for (let day = 0; day < 7; day++) {
      const date = new Date(currentDate);

      const dateKey = [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, "0"),
        String(date.getDate()).padStart(2, "0"),
      ].join("-");

      week.push({
        date: dateKey,
        count: activityMap.get(dateKey) ?? 0,
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }

    weeks.push(week);
  }

  // Month label only when a new month starts
  const monthLabels = weeks.map((week, weekIndex) => {
    if (weekIndex === 0) {
      return new Date(`${week[0].date}T00:00:00`).toLocaleDateString("en-US", {
        month: "short",
      });
    }

    const currentMonth = new Date(`${week[0].date}T00:00:00`).getMonth();

    const previousMonth = new Date(
      `${weeks[weekIndex - 1][0].date}T00:00:00`,
    ).getMonth();

    if (currentMonth !== previousMonth) {
      return new Date(`${week[0].date}T00:00:00`).toLocaleDateString("en-US", {
        month: "short",
      });
    }

    return "";
  });

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-green-400/30 hover:bg-white/[0.07]">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-white">Contribution Activity</h2>

        <p className="mt-1 text-sm text-gray-400">
          Contribution activity over the last year
        </p>
      </div>

      {/* Graph */}
      <div className="mt-7 overflow-x-auto pb-2">
        <div className="flex min-w-[850px]">
          {/* Weekday labels */}
          <div className="mr-3 flex w-8 flex-shrink-0 flex-col justify-between pt-7 pb-1">
            <span className="text-[10px] text-gray-500">Mon</span>

            <span className="text-[10px] text-gray-500">Wed</span>

            <span className="text-[10px] text-gray-500">Fri</span>
          </div>

          {/* Calendar */}
          <div className="flex-1">
            {/* Month Labels */}
            <div className="mb-3 flex gap-1">
              {weeks.map((_, weekIndex) => (
                <div
                  key={weekIndex}
                  className="h-4 w-3 flex-shrink-0 whitespace-nowrap text-[10px] font-medium text-gray-500"
                >
                  {monthLabels[weekIndex]}
                </div>
              ))}
            </div>

            {/* Weeks */}
            <div className="flex gap-1">
              {weeks.map((week, weekIndex) => (
                <div
                  key={weekIndex}
                  className="flex w-3 flex-shrink-0 flex-col gap-1"
                >
                  {week.map((day) => (
                    <div key={day.date} className="group relative">
                      {/* Contribution Box */}
                      <div
                        className={`h-3 w-3 cursor-pointer rounded-[3px] transition-all duration-150 hover:scale-125 hover:ring-1 hover:ring-green-300 ${getIntensityClass(
                          day.count,
                        )}`}
                      />

                      {/* Tooltip */}
                      <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-gray-900 px-3 py-2 text-xs shadow-xl group-hover:block">
                        <p className="font-semibold text-white">
                          {day.count} contribution
                          {day.count === 1 ? "" : "s"}
                        </p>

                        <p className="mt-0.5 text-gray-400">
                          {new Date(`${day.date}T00:00:00`).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-end gap-2 text-xs text-gray-400">
        <span>Less</span>

        <span className="h-3 w-3 rounded-[3px] bg-white/5" />
        <span className="h-3 w-3 rounded-[3px] bg-green-900/70" />
        <span className="h-3 w-3 rounded-[3px] bg-green-700" />
        <span className="h-3 w-3 rounded-[3px] bg-green-500" />
        <span className="h-3 w-3 rounded-[3px] bg-green-400" />

        <span>More</span>
      </div>
    </div>
  );
};

export default ContributionGraph;

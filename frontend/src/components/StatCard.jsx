const StatCard = ({ title, value, icon }) => {
  return (
    <div className="flex min-h-24 flex-col justify-between rounded-xl border border-white/10 bg-black/10 p-4 transition-all duration-300 hover:border-blue-400/40 hover:bg-white/5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-gray-400">{title}</span>

        <span className="text-lg">{icon}</span>
      </div>

      <p className="mt-3 text-2xl font-bold text-white">{value}</p>
    </div>
  );
};

export default StatCard;

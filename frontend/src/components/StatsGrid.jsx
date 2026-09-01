import StatCard from "./StatCard";

const StatsGrid = ({ stats }) => {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="mb-5 text-center text-xl font-bold text-white">
        GitHub Stats
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <StatCard
          title="Repositories"
          value={stats?.repositories ?? 0}
          icon="📦"
        />

        <StatCard title="Stars" value={stats?.stars ?? 0} icon="⭐" />

        <StatCard title="Forks" value={stats?.forks ?? 0} icon="🍴" />

        <StatCard title="Commits" value={stats?.commits ?? 0} icon="📝" />

        <StatCard title="Followers" value={stats?.followers ?? 0} icon="👥" />

        <StatCard title="Following" value={stats?.following ?? 0} icon="👤" />
      </div>
    </div>
  );
};

export default StatsGrid;

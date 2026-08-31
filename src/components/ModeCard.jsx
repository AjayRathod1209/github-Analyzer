import { useNavigate } from "react-router-dom";

const ModeCard = ({ title, description, icon, features, path, color }) => {
  const navigate = useNavigate();

  const cardColor =
    color === "green"
      ? "hover:border-green-400/50 hover:shadow-green-500/20"
      : "hover:border-blue-400/50 hover:shadow-blue-500/20";

  const iconColor = color === "green" ? "text-green-400" : "text-blue-400";

  return (
    <div
      onClick={() => navigate(path)}
      className={`w-full rounded-2xl border border-white/10 bg-white/5 p-8
        transition-all duration-300
        hover:-translate-y-2
        hover:bg-white/10
        hover:shadow-lg
        cursor-pointer
        ${cardColor}`}
    >
      {/* Icon */}
      <div
        className={`mb-6 flex h-16 w-full items-center justify-center text-4xl ${iconColor}`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-center text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-6 text-center leading-relaxed text-gray-400">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-3 text-gray-300">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModeCard;

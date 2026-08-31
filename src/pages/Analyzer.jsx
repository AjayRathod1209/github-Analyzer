import { useNavigate } from "react-router-dom";

const Analyzer = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8">
      <button
        onClick={() => navigate("/")}
        className="rounded-lg border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
      >
        ← Back to Home
      </button>

      <h1 className="mt-10 text-4xl font-bold text-white">
        GitHub Profile Analyzer
      </h1>
    </div>
  );
};

export default Analyzer;

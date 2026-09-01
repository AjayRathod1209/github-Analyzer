import { useState } from "react";

const ComparisonSearch = ({ onCompare, loading }) => {
  const [firstUsername, setFirstUsername] = useState("");
  const [secondUsername, setSecondUsername] = useState("");

  const handleSwap = () => {
    setFirstUsername(secondUsername);
    setSecondUsername(firstUsername);
  };

  const handleCompare = () => {
    if (!firstUsername.trim() || !secondUsername.trim()) return;

    onCompare({
      firstUsername: firstUsername.trim(),
      secondUsername: secondUsername.trim(),
    });
  };

  return (
    <div className="mt-8 w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="grid grid-cols-1 items-end gap-5 md:grid-cols-[1fr_auto_1fr]">
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            DEVELOPER 1
          </label>

          <input
            value={firstUsername}
            onChange={(e) => setFirstUsername(e.target.value)}
            placeholder="Enter first username..."
            className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none focus:border-green-500"
          />
        </div>

        <button
          onClick={handleSwap}
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-green-500 bg-green-500/10 text-xl text-green-400"
        >
          ⇄
        </button>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            DEVELOPER 2
          </label>

          <input
            value={secondUsername}
            onChange={(e) => setSecondUsername(e.target.value)}
            placeholder="Enter second username..."
            className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none focus:border-green-500"
          />
        </div>
      </div>

      <button
        onClick={handleCompare}
        disabled={loading}
        className="mt-6 w-full rounded-xl bg-green-600 py-4 font-bold text-white hover:bg-green-500 disabled:opacity-50"
      >
        {loading ? "COMPARING..." : "COMPARE PROFILES ›"}
      </button>
    </div>
  );
};

export default ComparisonSearch;

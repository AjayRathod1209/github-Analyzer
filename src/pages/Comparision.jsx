import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Comparison = () => {
  const navigate = useNavigate();

  const [firstUsername, setFirstUsername] = useState("");
  const [secondUsername, setSecondUsername] = useState("");

  const handleSwap = () => {
    setFirstUsername(secondUsername);
    setSecondUsername(firstUsername);
  };

  const handleCompare = () => {
    console.log(firstUsername, secondUsername);
  };

  return (
    <main className="min-h-screen w-full px-5 pt-8 sm:px-8 sm:pt-10 md:px-12">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition-all duration-300 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10"
      >
        ← Back
      </button>

      {/* Heading */}
      <section className="mx-auto mt-14 flex max-w-4xl flex-col items-center text-center sm:mt-16 md:mt-10">
        <h1 className="text-4xl font-extrabold tracking-tight bg-linear-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg sm:text-5xl md:text-6xl">
          Compare GitHub Profiles
        </h1>

        <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
          Compare two developers side-by-side with detailed metrics
        </p>

        {/* Comparison Box */}
        <div className="mt-2 w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 sm:p-7">
          {/* Inputs */}
          <div className="grid grid-cols-1 items-end gap-5 md:grid-cols-[1fr_auto_1fr]">
            {/* Developer 1 */}
            <div className="order-1 w-full md:order-1">
              <label className="mb-2 block text-sm font-semibold tracking-wide text-gray-400">
                DEVELOPER 1
              </label>

              <input
                type="text"
                value={firstUsername}
                onChange={(e) => setFirstUsername(e.target.value)}
                placeholder="Enter first username..."
                className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-500 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 focus:border-green-500 focus:shadow-lg focus:shadow-green-500/10"
              />
            </div>

            {/* Developer 2 */}
            <div className="order-2 w-full md:order-3">
              <label className="mb-2 block text-sm font-semibold tracking-wide text-gray-400">
                DEVELOPER 2
              </label>

              <input
                type="text"
                value={secondUsername}
                onChange={(e) => setSecondUsername(e.target.value)}
                placeholder="Enter second username..."
                className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-500 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 focus:border-green-500 focus:shadow-lg focus:shadow-green-500/10"
              />
            </div>

            {/* Swap Button */}
            <button
              onClick={handleSwap}
              className="order-3 mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-green-500 bg-green-500/10 text-xl text-green-400 transition-all duration-300 hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/20 md:order-2"
              title="Swap developers"
            >
              ⇄
            </button>
          </div>

          {/* Compare Button */}
          <button
            onClick={handleCompare}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-4 font-bold text-white transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/20"
          >
            COMPARE PROFILES
            <span>›</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Comparison;

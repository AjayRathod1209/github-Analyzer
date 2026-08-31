import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Analyzer = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!username.trim()) {
      setError("Please enter a GitHub username");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.github.com/users/${username.trim()}`,
      );

      if (!response.ok) {
        throw new Error("GitHub user not found");
      }

      const data = await response.json();

      setUserData(data);
    } catch (error) {
      setError(error.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full px-5 pt-8 sm:px-8 sm:pt-10 md:px-12">
      {/* Back */}
      <button
        onClick={() => navigate("/")}
        className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition-all duration-300 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10"
      >
        ← Back
      </button>

      {/* Heading */}
      <section className="mx-auto mt-14 flex max-w-4xl flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold tracking-tight bg-linear-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg sm:text-5xl md:text-6xl">
          GitHub Profile Analyzer
        </h1>

        <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
          Analyze GitHub developers with visual insights
        </p>

        {/* Input */}
        <div className="mt-2 flex w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-2 transition-all duration-300 focus-within:border-blue-500 focus-within:shadow-lg focus-within:shadow-blue-500/10">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAnalyze();
              }
            }}
            placeholder="Enter GitHub username..."
            className="min-w-0 flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500"
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </div>

        {/* Error */}
        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

        {/* Temporary result */}
        {userData && (
          <div className="mt-10 w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
            <div className="flex items-center gap-5">
              <img
                src={userData.avatar_url}
                alt={userData.login}
                className="h-20 w-20 rounded-full"
              />

              <div>
                <h2 className="text-2xl font-bold text-white">
                  {userData.name || userData.login}
                </h2>

                <p className="text-gray-400">@{userData.login}</p>
              </div>
            </div>

            <p className="mt-5 text-gray-300">
              {userData.bio || "No bio available"}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div>
                <p className="text-sm text-gray-500">Repositories</p>
                <p className="text-xl font-bold text-white">
                  {userData.public_repos}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Followers</p>
                <p className="text-xl font-bold text-white">
                  {userData.followers}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Following</p>
                <p className="text-xl font-bold text-white">
                  {userData.following}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Gists</p>
                <p className="text-xl font-bold text-white">
                  {userData.public_gists}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Analyzer;

import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen w-full bg-[#050816] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center px-6 py-7">
        <h2 className="text-xl font-extrabold">
          GitHub<span className="text-blue-400">Analyzer</span>
        </h2>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex min-h-[calc(100vh-90px)] flex-col items-center justify-center px-6 pb-20 text-center">
        {/* Main Heading */}
        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl">
          Turn Your GitHub
          <span className="block bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Into Your Advantage.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
          Analyze your GitHub profile, discover your strengths, and understand
          how you can become a stronger developer.
        </p>

        {/* CTA */}
        <button
          onClick={() => navigate("/home")}
          className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
        >
          Get Started →
        </button>
      </section>
    </main>
  );
};

export default Landing;

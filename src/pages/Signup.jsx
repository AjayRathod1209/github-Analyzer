import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen w-full items-center justify-center px-5 py-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-blue-500/5 backdrop-blur-sm">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight bg-linear-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Sign up to get started with GitHub Analyzer
          </p>
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-300">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name..."
            className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-2.5 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-300">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-2.5 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-300">
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password..."
            className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-2.5 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-300">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password..."
            className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-2.5 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10"
          />
        </div>

        {/* Create Account */}
        <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
          Create Account
        </button>

        {/* Divider */}
        <div className="my-5 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />

          <span className="text-xs text-gray-500">OR</span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Google */}
        <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3 font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10">
          <span className="text-lg">G</span>
          Sign up with Google
        </button>

        {/* GitHub */}
        <button className="mt-2.5 flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3 font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10">
          <span className="text-lg">◉</span>
          Sign up with GitHub
        </button>

        {/* Login */}
        <p className="mt-5 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="font-medium text-blue-400 transition hover:text-blue-300"
          >
            Login
          </button>
        </p>
      </div>
    </main>
  );
};

export default Signup;

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen w-full items-center justify-center px-5">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-blue-500/5 backdrop-blur-sm">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight bg-linear-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Welcome Back
          </h1>

          <p className="mt-3 text-sm text-gray-400">
            Login to continue to GitHub Analyzer
          </p>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password..."
            className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10"
          />
        </div>

        {/* Forgot Password */}
        <div className="mb-6 text-right">
          <button
            onClick={() => navigate("/forgot-password")}
            className="text-sm text-blue-400 transition hover:text-blue-300"
          >
            Forgot password?
          </button>
        </div>

        {/* Login */}
        <button className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
          Login
        </button>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />

          <span className="text-xs text-gray-500">OR</span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Google */}
        <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3.5 font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10">
          <span className="text-lg">G</span>
          Continue with Google
        </button>

        {/* GitHub */}
        <button className="mt-3 flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3.5 font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10">
          <span className="text-lg">◉</span>
          Continue with GitHub
        </button>

        {/* Signup */}
        <p className="mt-7 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="font-medium text-blue-400 transition hover:text-blue-300"
          >
            Sign up
          </button>
        </p>
      </div>
    </main>
  );
};

export default Login;

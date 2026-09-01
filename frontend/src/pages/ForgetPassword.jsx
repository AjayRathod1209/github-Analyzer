import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen w-full items-center justify-center px-5 py-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-blue-500/5 backdrop-blur-sm">
        {/* Header */}
        <div className="mb-7 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight bg-linear-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Forgot Password?
          </h1>

          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            Enter your email and we'll send you a password reset link.
          </p>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-300">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-2.5 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10"
          />
        </div>

        {/* Reset Button */}
        <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
          Send Reset Link
        </button>

        {/* Back to Login */}
        <button
          onClick={() => navigate("/login")}
          className="mt-5 flex w-full items-center justify-center text-sm font-medium text-gray-400 transition-colors hover:text-blue-400"
        >
          ← Back to Login
        </button>
      </div>
    </main>
  );
};

export default ForgotPassword;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://github-analyzer-6tx9.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // AuthContext handles token + user
      login(data.token, data.user);

      // Go to Home
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);

      setError("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center px-5">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-blue-500/5 backdrop-blur-sm">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="bg-linear-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
            Welcome Back
          </h1>

          <p className="mt-3 text-sm text-gray-400">
            Login to continue to GitHub Analyzer
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password..."
              className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10"
            />
          </div>

          {/* Forgot Password */}
          <div className="mb-6 text-right">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-sm text-blue-400 transition hover:text-blue-300"
            >
              Forgot password?
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Login */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Signup */}
        <p className="mt-7 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <button
            type="button"
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

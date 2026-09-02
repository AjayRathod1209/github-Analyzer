import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    const { name, email, password, confirmPassword } = formData;

    // Frontend validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://github-analyzer-6tx9.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      // Signup successful
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);

      setError("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center px-5 py-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-blue-500/5 backdrop-blur-sm">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="bg-linear-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Sign up to get started with GitHub Analyzer
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="mb-1.5 block text-sm font-medium text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
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
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password..."
              className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-2.5 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Create Account */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Login */}
        <p className="mt-5 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <button
            type="button"
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

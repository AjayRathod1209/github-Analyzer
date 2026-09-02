import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeContent from "../components/HomeContent";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowLogin(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <button
            onClick={() => navigate("/home")}
            className="text-lg font-bold tracking-tight text-white transition-all duration-300 hover:text-blue-400 sm:text-xl"
          >
            GitHub Analyzer
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-400"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Home Content */}
      <div className="pt-16">
        <HomeContent />
      </div>
    </>
  );
};

export default Home;

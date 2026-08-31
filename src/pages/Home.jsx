import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeContent from "../components/HomeContent";

const Home = () => {
  const navigate = useNavigate();
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

  return (
    <>
      {showLogin && (
        <button
          onClick={() => navigate("/login")}
          className="fixed top-5 right-6 z-50 rounded-lg border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:border-blue-400/50 hover:bg-white/10"
        >
          Login
        </button>
      )}

      <HomeContent />
    </>
  );
};

export default Home;

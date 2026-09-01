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
      <HomeContent />
    </>
  );
};

export default Home;

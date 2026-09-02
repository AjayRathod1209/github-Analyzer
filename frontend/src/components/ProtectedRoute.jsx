import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    setIsAuthenticated(!!token);
  }, []);

  // Server render + initial client render
  if (isAuthenticated === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050816]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-blue-500" />
      </div>
    );
  }

  // No token
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Token exists
  return children;
};

export default ProtectedRoute;

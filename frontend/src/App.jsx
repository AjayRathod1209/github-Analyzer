import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Analyzer from "./pages/Analyzer";
import Comparision from "./pages/Comparision";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgetPassword";

import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-linear-to-br from-[#050816] via-[#0b1220] to-[#111827]">
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/analyzer"
            element={
              <ProtectedRoute>
                <Analyzer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/comparison"
            element={
              <ProtectedRoute>
                <Comparision />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Analyzer from "./pages/Analyzer";
import Comparision from "./pages/Comparision";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgetPassword";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-linear-to-br from-[#050816] via-[#0b1220] to-[#111827]">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/analyzer" element={<Analyzer />} />

          <Route path="/comparison" element={<Comparision />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Analyzer from "./pages/Analyzer";
import Comparision from "./pages/Comparision";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-linear-to-br from-[#050816] via-[#0b1220] to-[#111827]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyzer" element={<Analyzer />} />
          <Route path="/comparison" element={<Comparision />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

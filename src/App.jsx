import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutHome from "./Components/AboutPart";
import "./Components/AboutHome.css";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

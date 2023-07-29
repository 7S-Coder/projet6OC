import "./App.css";
import { Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

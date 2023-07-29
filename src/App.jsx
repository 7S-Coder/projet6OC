import "./App.css";
import { Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

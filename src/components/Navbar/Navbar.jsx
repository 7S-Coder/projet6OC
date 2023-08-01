import { Link } from "react-router-dom";
import "../../styles/Navbar.scss";

export default function Navbar() {
  return (
    <header className="Header">
      <nav className="NavTop">
        <Link to="/" className="Logo">
          <img src="../../../public/LOGO.svg" alt="Logo Kasa" height={68} />
        </Link>
        <Link to="/about"> A Propos</Link>
        <Link to="/"> Accueil</Link>
      </nav>
    </header>
  );
}

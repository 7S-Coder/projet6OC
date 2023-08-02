import "../../styles/Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="Container">
        <Link to="/">
          <img
            className="LogoFooter"
            src="../../../public/LOGOWHITE.svg"
            alt="Logo Kasa"
            width={100}
          />
        </Link>
        <span> © 2020 Kasa. All rights reserved</span>
      </div>
    </footer>
  );
}

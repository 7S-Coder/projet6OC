import "./styles/NotFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="Centred">
      <h2 className="errorTitle">404</h2>
      <span className="errorSpan">
        Oups! La page que vous demandez n&apos;existe pas.
      </span>
      <Link to="/" className="errorLink">
        {" "}
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};
export default NotFound;

import "../styles/Accueil.scss";
import "../App.scss"
import Sign from "./Sign/Sign";
import Gallery from "./Gallery/Gallery"

export default function Accueil() {
  return (
    <div className="Centred" >
      <Sign />
      <Gallery />
    </div>
  );
}

import { dataLocation } from "../../datas/data";
import "../../styles/Card.scss"

const Card = () => {
  return (
    <div>
      <ul className="CardList">
        {dataLocation.map(({ title, id, cover }) => (
          <button className="CardBlock" key={id}>
            <div className="Card">
            <dataLocation
              title={title}
              id={id}
            />
            <p>{title}</p>
            <img src={cover} alt={title} />
            </div>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Card;
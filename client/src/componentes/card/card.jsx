import { Link } from "react-router-dom";
import "./card.css"

function Cards({ driver }) {
  const {id, forename, surname,  image, teams, dob } = driver;
  return (
    <div className="card">
      <Link to={`/driver/${id}`} className="text" >
        <h2>{forename} {surname}</h2>
        <div>
        <img src={image} alt={`${forename}`} className="img" />
        </div>
        <h2>Equipo:</h2>
        <h3>{teams}</h3>
        <h3>Nacimiento:</h3>
        <h3>{dob}</h3>
      </Link>
    </div>
  );
}

export default Cards;

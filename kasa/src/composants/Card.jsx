import { useState, useEffect } from "react";
import "./Card.scss";
import { Link } from "react-router";

export default function Card() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération");
        }
        return response.json();
      })
      .then((data) => setLogements(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="cards-container">
      {logements.slice(0, 6).map((logement) => (
        <Link
          to={`/logement/${logement.id}`}
          key={logement.id}
          className="card"
        >
        <article className="card" key={logement.id}>
          <img src={logement.cover} alt={logement.title} className="card-img" />
          <h2 className="card-title">{logement.title}</h2>
        </article>
        </Link>
      ))}
    </div>
  );
}
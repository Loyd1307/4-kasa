import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Collapse from "./Collapse";
import "./Properties.css"

export default function Properties() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

   useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => response.json())
      .then((data) => setLogement(data));
  }, [id]);

  if (!logement) {
    return <p>Chargement du logement...</p>;
  }

  return (
    <>

    <Header />

    <main className="logement">
      <img src={logement.cover} alt={logement.title} />
      <div>
        <h1>{logement.title}</h1>
        <div>
            <h2>{logement.host.name}</h2>
            <img src={logement.host.name} alt={logement.host.name} />
        </div>
      </div>
      <p>{logement.location}</p>
      <div>
        <ul>
            <li>Cozy</li>
            <li>Canal</li>
            <li>Paris 10</li>
        </ul>
        <div className="rating">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
        </div>
      </div>
      <div>
        <Collapse />
      </div>

    </main>

    <Footer />

    </>
  );
}
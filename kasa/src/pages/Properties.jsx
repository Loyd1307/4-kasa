import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Collapse from "./Collapse";
import Rating from "./Rating";
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
      <img className="carousel" src={logement.cover} alt={logement.title} />
      <div>
        <h1>{logement.title}</h1>
        <div className="flex-host">
            <h2>
              {logement.host.name.split(" ")[0]}
              <br />
              {logement.host.name.split(" ")[1]}
            </h2>
            <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>
      <p>{logement.location}</p>
      <div>
        <ul>
            <li></li>
            <li>Canal</li>
            <li>Paris 10</li>
        </ul>
            <Rating note={Number(logement.rating)} />
      </div>
      <div>
        <Collapse />
      </div>

    </main>

    <Footer />

    </>
  );
}
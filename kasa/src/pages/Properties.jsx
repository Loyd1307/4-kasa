import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Header from "../composants/Header.jsx";
import Footer from "../composants/Footer.jsx";
import Rating from "../composants/Rating.jsx";
import Tag from "../composants/Tag.jsx";
import Slideshow from "../composants/Slideshow.jsx";
import Collapse from "../composants/Collapse.jsx";
import "../composants/Collapse.scss";
import "./Properties.scss";

export default function Properties() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

   useEffect(() => {
  fetch(`http://localhost:8080/api/properties/${id}`)
    .then((response) => {
      if (response.status === 404) {
        navigate("/not-found");
        return null;
      }

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération");
      }

      return response.json();
    })
    .then((data) => {
      if (data) {
        setLogement(data);
      }
    })
    .catch((error) => console.error(error));
}, [id, navigate]);

 if (!logement) {
    return <p>Chargement...</p>;
  }

  return (
    <>

    <Header />

    <main className="logement">
      {logement && (
  <Slideshow pictures={logement.pictures} />
)}
      <div className="logement-flex">
  <div className="properties-info">
    <h1>{logement.title}</h1>
    <p className="logement-location">{logement.location}</p>
  </div>

  <div className="flex-host">
    <h2>
      {logement.host.name.split(" ")[0]}
      <br />
      {logement.host.name.split(" ")[1]}
    </h2>

    <img
      src={logement.host.picture}
      alt={logement.host.name}
    />
  </div>

  <div className="logement-tags">
    <Tag tuiles={logement.tags} />
  </div>

  <div className="logement-rating">
    <Rating note={Number(logement.rating)} />
  </div>
</div>
       
      <div className="collapse-properties">
        <Collapse 
        titre="Description"
        variant="property">

        <p>{logement.description}</p>
        </Collapse>

        <Collapse
        titre="Équipements" 
        variant="property">

        <ul> {logement.equipments.map((equipment) => (
          <li key={equipment}>{equipment}</li>
        ))}</ul>
        </Collapse>
      </div>

    </main>

    <Footer />

    </>
  );
}
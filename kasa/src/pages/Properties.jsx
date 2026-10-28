import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Rating from "./Rating";
import Tag from "./Tag";
import Description from "./Description";
import Stuff from "./Stuff";
import Carousel from "./Slideshow";
import "./Properties.css";

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
  <Carousel pictures={logement.pictures} />
)}
      <div>
        <div className="properties-info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        <div className="flex-host">
            <h2>
              {logement.host.name.split(" ")[0]}
              <br />
              {logement.host.name.split(" ")[1]}
            </h2>
            <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>
      <div>
        <Tag tuiles={logement.tags} />
        <Rating note={Number(logement.rating)} />
      </div>
      <div>
        <Description description={logement.description} />
        <Stuff stuff={logement.equipments} />
      </div>

    </main>

    <Footer />

    </>
  );
}
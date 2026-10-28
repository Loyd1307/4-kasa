import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Rating from "./Rating";
import Tag from "./Tag";
import Description from "./Description";
import Stuff from "./Stuff";
import "./Properties.css";

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
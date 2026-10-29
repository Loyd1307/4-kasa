import { useState } from "react";
import "./Collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown , faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Collapse() {
    const [collapseOpen, setCollapseOpen] = useState(null);
 
    const collapse = [
    {
      titre: "Fiabilité",
      texte: "les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      titre: "Respect",
      texte: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      titre: "Service",
      texte: "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
    },
    {
      titre: "Sécurité",
      texte: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ];

  return (
  <div className="collapse">
    {collapse.map((item, index) => (
      <div className="collapse-container" key={item.titre}>

        <div className="collapse-title">
          <p
            onClick={() =>
              setCollapseOpen(
                collapseOpen === index ? null : index
              )
            }
          >
            {item.titre}
            <span>
              <FontAwesomeIcon
                icon={
                  collapseOpen === index
                    ? faChevronDown
                    : faChevronUp
                }
              />
            </span>
          </p>
        </div>

        {collapseOpen === index && (
          <p className="collapse-texte">
            {item.texte}
          </p>
        )}

      </div>
    ))}
  </div>
);

}

export default Collapse;
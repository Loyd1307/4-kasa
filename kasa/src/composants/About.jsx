import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Logo2 from "../assets/IMG-ABOUT.png"
import "./About.scss"
import Collapse from "./Collapse.jsx"

export default function About() {
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
    <>
      <Header />
      <main>
        <img className="about-logo" src={Logo2} alt="Bannière" />
        <div className="collapse-flex">
          {collapse.map((item) => (
        <Collapse key={item.titre} titre={item.titre}>
          <p className="collapse-texte">{item.texte}</p>
        </Collapse>
        ))}
      </div>
      </main>
      <Footer />
    </>
  )
}
import Header from "./Header";
import Footer from "./Footer";
import "./NotFound.css";
import NotFoundImage from "../assets/404.png";

export default function NotFound() {
  return (
    <div>
      <Header />
      <img className="error-image" src={NotFoundImage} alt="erreur 404 Not Found" />
      <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
      <p className="error-link"><a href="/home">Retourner sur la page d'accueil</a></p>
      <Footer />
    </div>
  );
}
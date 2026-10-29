import "./Header.css";
import logo from "../assets/LOGO.png";

export default function Header() {
  return (
    <header>
        <img className="logo" src={logo} alt="Logo Kasa" />
        <nav>
          <a href="/">Accueil</a>
          <a href="/about">A propos</a>
        </nav>
    </header>
  )
}
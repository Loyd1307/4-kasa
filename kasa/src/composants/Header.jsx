import "./Header.scss";
import logo from "../assets/LOGO.png";
import { NavLink } from "react-router"

export default function Header() {
  return (
    <header>
        <img className="logo" src={logo} alt="Logo Kasa" />
        <nav>
          <NavLink to="/home">Accueil</NavLink>
          <NavLink to="/about">A propos</NavLink>
        </nav>
    </header>
  )
}
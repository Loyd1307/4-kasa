import footerDesk from "../assets/footer-desktop.png"
import footerMobile from "../assets/footer-mobile.png"
import "./Footer.scss"

export default function Footer() {
  return (
    <footer>
      <img className="footer-desk" src={footerDesk} alt="Logo Kasa" />
      <img className="footer-mobile" src={footerMobile} alt="Logo Kasa" />
    </footer>
  )
}
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Logo2 from "../assets/IMG-ABOUT.png"
import "./About.scss"
import Collapse from "./Collapse.jsx"

function About() {
  return (
    <>
    
      <Header />

      <main>
        <img className="about-logo" src={Logo2} alt="Bannière" />
        <Collapse />
      </main>
      <Footer />

    </>
  )
}

export default About
import Card from "../composants/Card.jsx";
import Header from "../composants/Header.jsx";
import Footer from "../composants/Footer.jsx";
import "./Home.scss";

export default function Home() {
  return ( 
    <>
    <div className="home-flex">
    <Header />
  
    <main>
      <h1 className="home-title">Chez vous, partout et ailleurs</h1>
        <Card />
    </main>
  
    <Footer />
    </div>
  </>
  )  
}
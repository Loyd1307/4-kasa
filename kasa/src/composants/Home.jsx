import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";

export default function Home() {
  return ( 
    <>
  
    <Header />
  
    <main>
      <h1 className="home-title">Chez vous, partout et ailleurs</h1>
        <Card />
    </main>
  
    <Footer />

  </>
  )  
}
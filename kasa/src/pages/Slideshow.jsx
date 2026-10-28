import { useState } from "react";
import "./Slideshow.css"

export default function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

   if (!pictures || pictures.length === 0) {
    return <p>Aucune photo disponible.</p>;
  }

   if (pictures.length === 1) {
    return (
      <div className="carousel">
        <img src={pictures[0]} alt="Photo du logement" />
      </div>
    );
  }

   const previousPicture = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? pictures.length - 1 : prev - 1
    );
  };

  const nextPicture = () => {
    setCurrentIndex((prev) =>
      prev === pictures.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={previousPicture} aria-label="Photo précédente">
        ❮
      </button>

      <img
        src={pictures[currentIndex]}
        alt={`Photo ${currentIndex + 1} du logement`}
      />

      <button onClick={nextPicture} aria-label="Photo suivante">
        ❯
      </button>

      <span className="carousel-counter">
        {currentIndex + 1} / {pictures.length}
      </span>
    </div>
  );
}
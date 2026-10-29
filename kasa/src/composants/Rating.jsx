import ActiveStar from "../assets/star-active 1.png"
import InactiveStar from "../assets/star-inactive 1.png"

function Rating({ note }) {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((etoile) => (
        <span key={etoile}>
          {etoile <= note ?  <img src={ActiveStar} /> : <img src={InactiveStar} />}
        </span>
      ))}
    </div>
  );
}

export default Rating;
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import "./Description.css"

export default function Stuff({ stuff }) {
  const [stuffOpen, setStuffOpen] = useState(false);

  return (
    <section className="tuile-propertie">
      <div className="tuile-propertie-title">
        <p onClick={() => setStuffOpen(!stuffOpen)}>
          Équipements

          <span>
            <FontAwesomeIcon
              icon={stuffOpen ? faChevronUp : faChevronDown}
            />
          </span>
        </p>
      </div>

      {stuffOpen && (
        <div className="properties-texte">
          <ul>
            {stuff?.map((equipment) => (
              <li className="stuff" key={equipment}>
                {equipment}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
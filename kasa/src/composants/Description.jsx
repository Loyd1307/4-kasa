import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import "./Description.scss"

export default function Description({ description }) {
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  return (
    <section className="tuile-propertie">
      <div className="tuile-propertie-title">
        <p
          onClick={() => setDescriptionOpen(!descriptionOpen)}
        >
          Description

          <span>
            <FontAwesomeIcon
              icon={descriptionOpen ? faChevronUp : faChevronDown}
            />
          </span>
        </p>
      </div>

      {descriptionOpen && (
        <div className="description-texte">
          {description}
        </div>
      )}
    </section>
  );
}
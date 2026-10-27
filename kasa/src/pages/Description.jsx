import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import "./Description.css"

export default function Description({ description }) {
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  return (
    <div className="tuile-propertie">
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
        <div className="collapse-texte">
          {description}
        </div>
      )}
    </div>
  );
}
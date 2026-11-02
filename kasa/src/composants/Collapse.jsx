import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.scss";

export default function Collapse({ titre, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <button
        className="collapse-title"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {titre}

        <FontAwesomeIcon
          icon={faChevronDown}
          className={`arrow ${isOpen ? "open" : ""}`}
        />
      </button>

      <div className="collapse-content">
        <div className="collapse-inner">
          <div className="collapse-text">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
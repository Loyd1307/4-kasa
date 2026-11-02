import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.scss";

export default function Collapse({ titre, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button
        className="collapse-title"
        onClick={() => setIsOpen(!isOpen)}
      >
        {titre}

        <FontAwesomeIcon
          icon={faChevronDown}
          className={`arrow ${isOpen ? "open" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="collapse-inner">
          {children}
        </div>
      )}
    </div>
  );
}
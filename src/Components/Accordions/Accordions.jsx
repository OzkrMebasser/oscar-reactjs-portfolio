import React, { useState } from "react";

import "./Accordions.css";

const Accordions = ({ logoSchool, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" cardGridShadow accordions">
      <div class="flexs-container space-between">
        <div class="flexs-item">
          <img className="logoSchool" src={logoSchool} alt="logo School" />
          {/* <h2 className="schoolTitles">{title}</h2> */}
        </div>
        <div class="flexs-item">
          {" "}
          <button className="dropBtnCerts  " onClick={toggleAccordion}>
            <div className="">{isOpen ? "Cerrar" : "Ver Certificados"}</div>
          </button>
        </div>
      </div>

      {isOpen && <div className="">{content}</div>}
    </div>
  );
};

export default Accordions;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./Accordions.css";

const Accordions = ({ logoSchool, content }) => {

  const [t] = useTranslation("global");

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
          <button className="dropBtnCerts ">5</button>
          <button className="dropBtnCerts  " onClick={toggleAccordion}>
            <div className="">{isOpen ? `${t("certificatesInfo.closeCertificates")}` : `${t("certificatesInfo.seeCertificates")}`}</div>
          </button>
        </div>
      </div>

      {isOpen && <div className="">{content}</div>}
    </div>
  );
};

export default Accordions;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./Accordions.css";

const Accordions = ({ logoSchool, content, totalCerts }) => {

  // const totalCerts = [
  //   /*0: academlo = 5
  //     1: capacitate = 2
  //     2: freecodecamp = 1
  //     3: udemy = 2
  //     4: Linked = 1
  //     5: grasshopper = 4
  //     6: efset = 1
  //     7: uv = 1
  //   */

  //   5, 2, 1, 2, 1, 4, 1, 1,
  // ];
 

  const [t] = useTranslation("global");

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" cardGridShadow accordions">
      <div className="flexs-container space-between">
        <div className="flexs-item">
          <img className="logoSchool" src={logoSchool} alt="logo School" />
          {/* <h2 className="schoolTitles">{title}</h2> */}
        </div>

        <div className="flexs-item">
          {" "}
          <button className="dropBtnCerts  " onClick={toggleAccordion}>
            <div className="">
              {isOpen
                ? `${t("certificatesInfo.closeCertificates")} - (${totalCerts}) `
                : `${t("certificatesInfo.seeCertificates")} - (${totalCerts})  `}
             
            </div>
          </button>
        </div>
      </div>

      {isOpen && <div className="">{content}</div>}
    </div>
  );
};

export default Accordions;

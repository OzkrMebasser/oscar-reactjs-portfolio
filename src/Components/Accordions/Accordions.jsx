import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Función para actualizar el estado de isMobile en el cambio de tamaño de la pantalla
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // listener para el cambio de tamaño de la pantalla
    window.addEventListener("resize", updateIsMobile);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  return (
    <div className="cardGridShadow accordions">
      <div className="flexs-container space-between">
        <div className="flexs-item">
          <img className="logoSchool" src={logoSchool} alt="logo School" />
        </div>

        <div className="flexs-item">
          {isMobile ? (
            <button className="dropBtnCerts" onClick={toggleAccordion}>
              {isOpen
                ? `${t("certificatesInfo.closeCertificates")}`
                : `${t("certificatesInfo.seeCertificates")}`}
            </button>
          ) : (
            <button className="dropBtnCerts" onClick={toggleAccordion}>
              <div className="">
                {isOpen
                  ? `${t(
                      "certificatesInfo.closeCertificates"
                    )} - (${totalCerts}) `
                  : `${t(
                      "certificatesInfo.seeCertificates"
                    )} - (${totalCerts})  `}
              </div>
            </button>
          )}
        </div>
      </div>

      {isOpen && <div className="">{content}</div>}
    </div>
  );
};

export default Accordions;

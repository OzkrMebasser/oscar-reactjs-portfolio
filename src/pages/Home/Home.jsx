import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Particle from "../../Components/particulesBG/Particle-min.jsx";
import SoundClick from "../../Components/Click/interface.mp3";
import useSound from "../../context/hook/useSound.js";

// import AmChartMap from "../../Components/Maps/AmChartMap.jsx";
import AmChartsMapNew from "../../Components/Maps/AmChartMapNew.jsx";
import Typing from "../../Components/TypingLetters/Typing.jsx";

import "./Home.css";

const Home = ({ handleClose }) => {
  const [t, i18n] = useTranslation("global");
  const [showChart, setShowChart] = useState(true);
  const playSound = useSound(SoundClick);

  function sendEmail() {
    window.location.href = "mailto:oscarmoreno80@gmail.com";
  }

  return (
    <div className="cover-container">
      {showChart && (
        <>
          <div id="social-icons">
            <ul className="ul">
              <li className="li">
                <a
                  href="https://www.linkedin.com/in/oscar-antonio-moreno-martinez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span></span>
                </a>
              </li>
              <li className="li">
                <a
                  href="https://github.com/OzkrMebasser"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span></span>
                </a>
              </li>
              <li className="li">
                <a
                  href="https://t.me/OscarMorenoDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span></span>
                </a>
              </li>
              <li className="li">
                <a
                  href={`https://wa.me/16729747575?text=${t(
                    "contact.whastsAppText"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span></span>
                </a>
              </li>
              <li className="li">
                <a href="#" onClick={sendEmail}>
                  <span></span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flip-box-cover ">
            <div className="flip-box-inner-cover  ">
              <div className="flip-box-front-cover">
                {t("cover.hello-world")}{" "}
              </div>
              <div className="flip-box-back-cover">
                {" "}
                {t("cover.hello-world-2")}
              </div>
            </div>
          </div>

          <Typing />

          <Particle className="particles-cover" />

          <div id="comets">
            <i></i>
            <i></i>
            <i></i>
          </div>

          {/* <AmChartMap /> */}
          <AmChartsMapNew />
        </>
      )}
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Particle from "../../Components/particulesBG/Particle-min.jsx";
import WelcomePopUp from "../../Components/WelcomePopUp/WelcomePopUp.jsx";
import SoundClick from "../../Components/Click/interface.mp3";
import useSound from "../../context/hook/useSound.js";

import AmChartMap from "./AmChartMap";
import Typing from "./Typing";

import "./Home.css";

const Home = ({handleClose}) => {
  const [t, i18n] = useTranslation("global");
  const [showChart, setShowChart] = useState(false);
  const [showPopUp, setShowPopUp] = useState(true);
  const playSound = useSound(SoundClick);

  const handleClick = () => {
    
    setShowPopUp(false);
   
  };

  return (
    <div className="cover-container">
      {showPopUp ? (
        <WelcomePopUp
          trigger={showPopUp}
          setTrigger={setShowPopUp}
          onClose={() => setShowChart(true)}
          setShowChart={setShowChart} 
        />
      ) : showChart ? (
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
                   href={`https://wa.me/16729747575?text=${t("contact.whastsAppText")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span></span>
                </a>
              </li>
              <li className="li">
                <a
                  href="#"
                  onClick={() =>
                    (window.location = "mailto:oscarmoreno80@gmail.com")
                  }
                >
                  <span></span>
                </a>
              </li>
              <li className="li">
                <a
                  href="https://www.facebook.com/oscar.moreno.127201/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span></span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flip-box-cover animatedHello rollIn ">
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

          <Particle className="particles-cover" />

          <Typing />

          <div id="comets">
            <i></i>
            <i></i>
            <i></i>
          </div>

          <AmChartMap />
        </>
      ) : null}
    </div>
  );
};

export default Home;

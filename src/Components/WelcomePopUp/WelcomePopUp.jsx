import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dates from "../Clock/Dates";
import ClockAnalog from "../Clock/AnalogClock";
import ProfileOscar from "../../pages/Home/ProfileOscar";
import useSound from "../../context/hook/useSound";
import SoundClick from "../../Components/Click/interface.mp3";
import LocalWeather from "../Weather/LocalWeather";

import "../../pages/Home/Home.css";
import DigitalClock from "../Clock/DigitalClock";

function WelcomePopUp(props) {
  const playSound = useSound(SoundClick);

  const handleClose = () => {
    // playSound();
    if (props.setShowChart) {
      props.setShowChart(true);
    }
    props.setTrigger(false);
    setTimeout(() => {
      playSound();
    }, 50);
  };

  const [isHovered, setIsHovered] = useState(false);

  const [t, i18n] = useTranslation("global");

  return props.trigger ? (
    <div className="popup">
      <div className="popupInner">
        <div
          className="analog"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? <ClockAnalog /> : <ProfileOscar />}
        </div>

        <div className="dates">
          <div>
            <Dates />
          </div>
        </div>
        <div className="digitalClock">
          <div>
            <DigitalClock />
            <LocalWeather />
          </div>
        </div>
        <h6 className="welcomeTitle animatedLeft bounceInLeft">{t("cover.welcome-title")}</h6>
        <p className="welcomeP animatedRight bounceInRight">
          {t("cover.welcome-p")}
        </p>
        <div className="button-container">
          <button className="goBtn" onClick={handleClose}>
            {t("cover.seePortfolio")}
          </button>

          <button className="goBtnB">
            <NavDropdown className="noLink" title={t("navbar.language")}>
              <NavDropdown.Item
              className="goBtnText"
                onClick={() => {
                  playSound();
                  i18n.changeLanguage("es");
                }}
              >
                ESPAÑOL
                <span className="fi fi-mx ml-flag"></span>{" "}
                <span className="fi fi-es"></span>
              </NavDropdown.Item>

              <NavDropdown.Item
               className="goBtnText"
                onClick={() => {
                  playSound();
                  i18n.changeLanguage("en");
                }}
              >
                ENGLISH
                <span className="fi fi-ca ml-flag"></span>{" "}
                <span className="fi fi-us"></span>
              </NavDropdown.Item>
            </NavDropdown>
          </button>
        </div>

        {props.children}
      </div>
    </div>
  ) : null;
}

export default WelcomePopUp;

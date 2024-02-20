import { useState } from "react";
import { useTranslation } from "react-i18next";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dates from "../Clock/Dates";
import ClockAnalog from "../Clock/AnalogClock";
import ProfileOscar from "../../pages/Home/ProfileOscar";
import useSound from "../../context/hook/useSound";
import SoundClick from "../../Components/Click/interface.mp3";
import LocalWeather from "../Weather/LocalWeather";

import { motion } from "framer-motion";

import "../../pages/Home/Home-min.css";
import DigitalClock from "../Clock/DigitalClock";

function WelcomePopUp(props) {
  const playSound = useSound(SoundClick);

  const [isHovered, setIsHovered] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovered(false);
  // };

  const [t, i18n] = useTranslation("global");

  return props.trigger ? (
    <motion.div
      className="popup"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, type: "fade" }}
    >
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
        <h6 className="welcomeTitle animatedLeft bounceInLeft">
          {" "}
          {t("cover.welcome-title")}
        </h6>
        <p className="welcomeP animatedRight bounceInRight">
          {t("cover.welcome-p")}
        </p>
        <div className="button-container">
          <button
            className="goBtn"
            onClick={() => {
              playSound();
              props.setTrigger(false);
            }}
          >
            {t("cover.seePortfolio")}
          </button>

          <button className="goBtnB">
            <NavDropdown className="noLink" title={t("navbar.language")}>
              <NavDropdown.Item
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
                onClick={() => {
                  playSound();
                  i18n.changeLanguage("en");
                }}
              >
                ENGLISH
                <span className="fi fi-ca ml-flag"></span>{" "}
                <span className="fi fi-us"></span>{" "}
                {/* <span className="fi fi-uk"></span> */}
              </NavDropdown.Item>
            </NavDropdown>
          </button>
        </div>

        {props.children}
      </div>
    </motion.div>
  ) : (
    ""
  );
}

export default WelcomePopUp;

import { useState} from "react"
import { useTranslation } from "react-i18next";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dates from "../../Components/Clock/Dates";
import ClockAnalog from "../../Components/Clock/AnalogClock";
import ProfileOscar from "./ProfileOscar";



import { motion } from "framer-motion";


import "./Home.css";
import DigitalClock from "../../Components/Clock/DigitalClock";

function WelcomePopUp(props) {
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
        
        {/* <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <ProfileOscar />
        </div>

        <div className="parent">
          <AutoLocalClock/>
      
        </div> */}
        <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProfileOscar />
      {isHovered ? <ClockAnalog/> : null}
    </div>

    <div className="dates">
       
       <div><Dates/></div>
     </div>
     <div className="digitalClock">
    
    <div><DigitalClock/></div>
  </div>


        <button className="goBtn " onClick={() => props.setTrigger(false)}>
          {t("cover.seePortfolio")}
        </button>

        <button className="goBtnB ">
          <NavDropdown className="noLink" title={t("navbar.language")}>
            <NavDropdown.Item onClick={() => i18n.changeLanguage("es")}>
              ESPAÑOL <span className="fi fi-mx"></span>{" "}
              <span className="fi fi-es"></span>
            </NavDropdown.Item>

            <NavDropdown.Item onClick={() => i18n.changeLanguage("en")}>
              ENGLISH <span className="fi fi-ca"></span>{" "}
              <span className="fi fi-us"></span>{" "}
              <span className="fi fi-uk"></span>
            </NavDropdown.Item>
          </NavDropdown>
        </button>
        {props.children}
      </div>
    </motion.div>
  ) : (
    ""
  );
}

export default WelcomePopUp;

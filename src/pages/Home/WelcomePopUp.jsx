import React from "react";
import { useTranslation } from "react-i18next";
import NavDropdown from "react-bootstrap/NavDropdown";

import { motion } from "framer-motion";

// import { NavLink } from "react-router-dom";
import "./Home.css";

// https://www.youtube.com/watch?v=i8fAO_zyFAM
function WelcomePopUp(props) {
  const [t, i18n] = useTranslation("global");
  return props.trigger ? (
    <motion.div
      className="popup"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, type: "fade" }}
    >
      <div className="popupInner">
        {/* <NavLink to="/home" activeclassname="" className=""> */}
        {/* */}

        {/*  */}
        {/* </NavLink> */}
        <div className="icon-container">
          {/* <img
            src="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FAbout%2FoscarExec.png?alt=media&token=b68c2ccb-f9fe-44cf-ae19-ee26c5d1eb4d"
            alt="My profile"
            className="icon"
          /> */}
          <figure class="effect-oscar">
						<img src="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FAbout%2FoscarExec.png?alt=media&token=b68c2ccb-f9fe-44cf-ae19-ee26c5d1eb4d" alt="img09"/>
						<figcaption>
							{/* <p>Oscar</p> */}
						</figcaption>			
					</figure>
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

/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Particle from "../../Components/particulesBG/Particle";
import WelcomePopUp from "./WelcomePopUp";
import Typing from "./Typing";


import "../Home/Home.css";
import "../Cover/Cover.css";

import { motion } from 'framer-motion';
import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons";


const Home = () => {

  const [t, i18n] = useTranslation("global");
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timePopup, setTimePopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setButtonPopup(true);
    }, 2000);
  }, []);
  

  return (
    <Fragment >
            
      <motion.div className="cover-container"
                  initial={{y: 600 }}
                  animate={{ y: 0}}
                  transition={{delay: 0.3, type: 'fade' }}>
      <div id="social-icons">

<ul className="ul">
    <li className="li"><a href="https://www.linkedin.com/in/oscar-antonio-moreno-martinez" target="_blank" rel="noopener noreferrer"><span></span></a></li>
    <li className="li"><a href="https://github.com/OzkrMebasser" target="_blank" rel="noopener noreferrer"><span></span></a></li>
    <li className="li"><a href="https://t.me/OscarMorenoDev" target="_blank" rel="noopener noreferrer"><span></span></a></li>
    <li className="li"><a href="https://wa.me/19841681509?text=Hey,%20are%20you%20available%20for%20an%20interview%20?" target="_blank" rel="noopener noreferrer"><span></span></a></li>
    <li className="li"><a href="javascript:void(0)" onClick={() => window.location = 'mailto:oscarmoreno80@gmail.com'}><span></span></a></li>
    <li className="li"><a href="https://www.facebook.com/oscar.moreno.127201/" target="_blank" rel="noopener noreferrer"><span></span></a></li>
</ul>

</div>
        
        <div className="flip-box-cover ">
            <div className="flip-box-inner-cover ">
              <div className="flip-box-front-cover">{t("cover.hello-world")} </div>
              <div className="flip-box-back-cover"> {t("cover.hello-world-2")}</div>
            </div>
          </div>
        <Particle />
          <Typing />
         
      
        <div id="comets">
          <i></i>
          <i></i>
          <i></i>
        </div>
        
        <div className="globe">
          <div></div>
          
        </div>
        {/* <button onClick={() => setButtonPopup(true)}>Open Wlcome</button> */}

      <WelcomePopUp trigger={buttonPopup} setTrigger={setButtonPopup}> 
        <h6 className="welcomeTitle"> {t("cover.welcome-title")}</h6>
        <p className="welcomeP">{t("cover.welcome-p")}</p>
        </WelcomePopUp>

        <WelcomePopUp trigger={timePopup} setTrigger={setTimePopup}> 
        
        </WelcomePopUp>
      </motion.div>
    </Fragment>
  );
};
export default Home;

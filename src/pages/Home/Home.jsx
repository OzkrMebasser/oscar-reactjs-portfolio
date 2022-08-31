import React, { Fragment } from "react";
import { useTranslation } from 'react-i18next';
import Particle from "../../Components/particulesBG/Particle";
import Typing from "./Typing";

import "../Home/Home.css";
import "../Cover/Cover.css"


const Home = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <Fragment>
      
      <div className="cover-container">
      <div id="social-icons">

<ul className="ul">
    <li className="li"><a href="https://www.linkedin.com/in/oscar-antonio-moreno-martinez"><span></span></a></li>
    <li className="li"><a href="https://github.com/OzkrMebasser"><span></span></a></li>
    <li className="li"><a href="#"><span></span></a></li>
    <li className="li"><a href="#"><span></span></a></li>
    <li className="li"><a href="#"><span></span></a></li>
    <li className="li"><a href="#"><span></span></a></li>
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
      
      

      </div>
    </Fragment>
  );
};
export default Home;

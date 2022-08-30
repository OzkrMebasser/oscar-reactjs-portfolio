import React, { Fragment } from "react";
import Particle from "../../Components/particulesBG/Particle";
import Typing from "./Typing";

import "../Home/Home.css";
import "../Cover/Cover.css"


const Home = () => {
  return (
    <Fragment>
      
      <div className="cover-container">
      <div id="social-icons">

<ul className="ul">
    <li className="li"><a href="#"><span></span></a></li>
    <li className="li"><a href="#"><span></span></a></li>
    <li className="li"><a href="#"><span></span></a></li>
    <li className="li"><a href="#"><span></span></a></li>
</ul>

</div>
        <h1 id="label"></h1>
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

import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

import NavDropdown from "react-bootstrap/NavDropdown";

import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { FaStream } from "react-icons/fa";
import { FaReply } from "react-icons/fa";

const logo = "OSCAR";
const logoLN = "MORENO";

const Navbar = ({ isScrolling }) => {

  const [t, i18n] = useTranslation("global");


  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    console.log(toTheTop());
  };

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <nav className="navbar"
      // className={`navbar ${isScrolling > 120 ? "scrolling" : null}`}
      // onClick={(e) => e.stopPropagation()}
    >     
<div className="nav-icon" onClick={handleClick}>
    {click ? <FaReply /> : <FaStream />}
  </div>
      {/* <div className={click ? "main-container" : ""} onClick={() => Close()} /> */}

      <div className="nav-container">
        <NavLink  to="/" activeclassname="active" className="nav-logo ">
          <div className="flip-box  ">
            <div className="flip-box-inner ">
              <div className="flip-box-front logoAnim">{logo}</div>
              <div className="flip-box-back logoAnim">{logoLN}</div>
            </div>
          </div>
        </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item ">
            <NavLink
              
              to="/"
              activeclassname="active "
              className="nav-links"
              onClick={click ? handleClick : null}
            >
             {t("navbar.home")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              
              to="/about"
              activeclassname="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              {t("navbar.about")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              
              to="/skills"
              activeclassname="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              {t("navbar.skills")}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              
              to="/projects"
              activeclassname="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
               {t("navbar.projects")}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              
              to="/contact"
              activeclassname="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              {t("navbar.contact")}
            </NavLink>
          </li>
          

          <li className=" nav-item-prueba " >
          <NavLink
              to="/contact"
              activeclassname="active"
              className="nav-links">
            <NavDropdown className=""  title= {t("navbar.language")}>
              <NavDropdown.Item onClick={()=> i18n.changeLanguage("en")}>
               ENGLISH <span className="fi fi-ca"></span> <span className="fi fi-us"></span> <span className="fi fi-uk"></span>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={()=> i18n.changeLanguage("es")}>
               ESPAÑOL <span className="fi fi-mx"></span> <span className="fi fi-es"></span>
              </NavDropdown.Item>
            </NavDropdown>
            </NavLink>
          </li>

        </ul>
   
       
      </div>
      
    </nav>
    
  );
};
export default Navbar;

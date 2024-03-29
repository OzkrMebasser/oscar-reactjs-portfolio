import React, { useState, useRef, useEffect } from "react";
import SoundClick from "../Click/interface.mp3";
import { useTranslation } from "react-i18next";

import NavDropdown from "react-bootstrap/NavDropdown";

import "./Navbar-min.css";

import { NavLink } from "react-router-dom";
import { FaStream } from "react-icons/fa";

const logo = "OSCAR";
const logoLN = "MORENO";
const closeIcon =
  "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/close_icon_custom.svg?alt=media&token=e7b246c8-76e7-4866-aa37-2dbd2b8d80c9";

const Navbar = ({ isScrolling }) => {
  const [t, i18n] = useTranslation("global");
  const [click, setClick] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    console.log(toTheTop());
  };

  const handleClick = () => {
    setClick(!click);
    playSound();
    setIsClosing(!click);
  };
  const Close = () => setClick(false);

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(SoundClick);
    audio.preload = "auto";
    audioRef.current = audio;
  }, []);

  const playSound = () => {
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <nav
      className="navbar"
      // className={`navbar ${isScrolling > 120 ? "scrolling" : null}`}
      // onClick={(e) => e.stopPropagation()}
    >
      <div className="nav-icon" onClick={() => handleClick()}>
        {click ? (
          <img
            className={`imgIcon ${isClosing ? "spin" : ""}`}
            src={closeIcon}
            alt=""
          />
        ) : (
          <FaStream />
        )}
      </div>
      {/* <div className={click ? "main-container" : ""} onClick={() => Close()} /> */}

      <div className="nav-container">
        <NavLink to="/" activeclassname="active" className="nav-logo ">
          <div className="flip-box  ">
            <div className="flip-box-inner ">
              <div className="flip-box-front logoAnim">{logo}</div>
              <div className="flip-box-back logoAnim">{logoLN}</div>
            </div>
          </div>
        </NavLink>
        <ul className={click ? "nav-menu active mt-li-mobile" : "nav-menu "}>
          <li className="nav-item ">
            <NavLink
              to="/"
              activeclassname="active "
              className="nav-links"
              // onClick={click ? handleClick  : null}
              onClick={() => {
                handleClick();
                playSound();
              }}
            >
              {t("navbar.home")}
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink
              to="/about"
              activeclassname="active"
              className="nav-links"
              // onClick={click ? handleClick && playSound : null}
              onClick={() => {
                handleClick();
                playSound();
              }}
            >
              {t("navbar.about")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/skills"
              activeclassname="active"
              className="nav-links"
              // onClick={click ? handleClick : null}
              onClick={() => {
                handleClick();
                playSound();
              }}
            >
              {t("navbar.skills")}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/projects"
              activeclassname="active"
              className="nav-links"
              // onClick={click ? handleClick : null}
              onClick={() => {
                handleClick();
                playSound();
              }}
            >
              {t("navbar.projects")}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/contact"
              activeclassname="active"
              className="nav-links"
              // onClick={click ? handleClick : null}
              onClick={() => {
                handleClick();
                playSound();
              }}
            >
              {t("navbar.contact")}
            </NavLink>
          </li>

          <li className=" nav-item-prueba ">
            {/* <NavLink
              to="/contact"
              activeclassname="active"
              className="nav-links"
            > */}
              <NavDropdown  activeclassname="active"
              className="nav-links" title={t("navbar.language")}>
                <NavDropdown.Item
                  onClick={() => i18n.changeLanguage("en") && playSound()}
                >
                  ENGLISH <span className="fi fi-ca"></span>{" "}
                  <span className="fi fi-us"></span>{" "}
                  <span className="fi fi-uk"></span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => i18n.changeLanguage("es") && playSound()}
                >
                  ESPAÑOL <span className="fi fi-mx"></span>{" "}
                  <span className="fi fi-es"></span>
                </NavDropdown.Item>
              </NavDropdown>
            {/* </NavLink> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

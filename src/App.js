import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CursorRing from "../src/Components/CursorRing/CursorRing";
import WelcomePopUp from "../src/Components/WelcomePopUp/WelcomePopUp";
import { MouseContext } from "../src/context/MouseContextProvider";

import Navbar from "./Components/Navbar/Navbar";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";

const App = () => {
  //Functions
  const [scrollHeight, setScrollHeight] = useState(0);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timePopup, setTimePopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setButtonPopup(true);
    }, 5000);
  }, []);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <Router
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
    >
      <Navbar isScrolling={scrollHeight} />
      <CursorRing />
      <WelcomePopUp
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
      ></WelcomePopUp>

      <WelcomePopUp
        trigger={timePopup}
        setTrigger={setTimePopup}
      ></WelcomePopUp>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;

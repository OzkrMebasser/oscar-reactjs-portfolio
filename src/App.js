import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CursorRing from "../src/Components/CursorRing/CursorRing";
import { MouseContext } from "../src/context/MouseContextProvider";

import Navbar from "./Components/Navbar/Navbar";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";

const App = () => {
  //Functions
  const [scrollHeight, setScrollHeight] = useState(0);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

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
      <AnimatedRoutes />
    </Router>
  );
};

export default App;

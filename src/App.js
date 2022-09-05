import React,{useState,useEffect} from "react";
import {BrowserRouter as Router} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";








const App = () => {

  
//Functions
const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);




  return (
    <Router>
      <Navbar isScrolling={scrollHeight} />
      <AnimatedRoutes/>
    </Router>
  );
};

export default App;

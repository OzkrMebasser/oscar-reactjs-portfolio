import React,{useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Navbar from "./Components/Navbar/Navbar";







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

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />      
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

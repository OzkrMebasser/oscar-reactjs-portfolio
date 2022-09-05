import React from 'react'
import {
    Route,
    Navigate,
    Routes,
    useLocation,
  } from "react-router-dom";

import Navbar from '../Navbar/Navbar';
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import Skills from "../../pages/Skills/Skills";
import Projects from "../../pages/Projects/Projects";


import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {

    const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter transition>
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Navbar />} />
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />      
    <Route path="skills" element={<Skills />} />
    <Route path="projects" element={<Projects />} />
    <Route path="*" element={<Navigate replace to="/" />} />
    <Route path="contact" element={<Contact />} />
  </Routes>
  </AnimatePresence>
  );
}

export default AnimatedRoutes
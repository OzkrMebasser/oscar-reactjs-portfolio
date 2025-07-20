import React from "react";
import { Route, Navigate, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../../pages/Home/Home";
import Navbar from "../Navbar/Navbar";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import HomePopUp from "../../pages/Home/HomePopUp";
import Skills from "../../pages/Skills/Skills";
import Projects from "../../pages/Projects/Projects";
import OtherProjects from "../../pages/OtherProjects/OtherProjects";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" transition>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navbar />} />
        <Route index element={<HomePopUp />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="more-projects" element={<OtherProjects />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

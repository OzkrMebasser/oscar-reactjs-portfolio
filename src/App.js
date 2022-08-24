import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/Service/Services";
import Testimonial from "./pages/Testimonial/Testimonial";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Services />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

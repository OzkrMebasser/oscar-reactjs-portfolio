import React, { Fragment } from "react";
import { BiAdjust } from "react-icons/bi";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import "./Projects.css";

const Projects = () => {
  return (
    <Fragment className="container center">
      <h1 className="text-center" style={{ paddingTop: "10px" }}>
        Projects
      </h1>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      ><ButtonBack className="btnfixeda">Back</ButtonBack>
      <ButtonNext className="btnfixeda">Next</ButtonNext>
        <Slider className="centerCar">
          <Slide index={0}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/Captura%20de%20pantalla%202022-09-04%20203230.png?alt=media&token=17e6eb5e-6821-4620-99d7-b825a3fec6f7"
              alt="MDN"
            />
          </Slide>
          <Slide index={1}>
            {" "}
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/Captura%20de%20pantalla%202022-09-04%20203230.png?alt=media&token=17e6eb5e-6821-4620-99d7-b825a3fec6f7"
              alt="MDN"
            /><BiAdjust/>
          </Slide>
          <Slide index={2}>
            {" "}
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/Captura%20de%20pantalla%202022-09-04%20203230.png?alt=media&token=17e6eb5e-6821-4620-99d7-b825a3fec6f7"
              alt="MDN"
            /> 
          </Slide><BiAdjust/>
        
        </Slider>
        
      </CarouselProvider>
    </Fragment>
  );
};
export default Projects;

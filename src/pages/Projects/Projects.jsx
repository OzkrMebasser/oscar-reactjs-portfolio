import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalItem from "./ModalItem";

import ItemsCarousel from "react-items-carousel";
import { projects } from "../../Api/projects";
import { ImUndo2, ImRedo2 } from "react-icons/im";

import "./Projects.css";

const Projects = ({ props }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const chevronWidth = 100;

  return (
    <div className="bodyContainer">
      <div
        className="carouselContainer"
        style={{ padding: `0 ${chevronWidth}px` }}
      >
        <ItemsCarousel
          infiniteLoop={true}
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={1}
          gutter={8}
          leftChevron={
            <span className="arrowIcon">
              <ImUndo2 />
            </span>
          }
          rightChevron={
            <span className="arrowIcon">
              <ImRedo2 />
            </span>
          }
          outsideChevron
          chevronWidth={chevronWidth}
          showSlither={false}
        >
          {projects.map((project, index) => (
            
            <div className="image-wrapper text-center " key={index}>
              {/* <strong>
                  <p>{index + 1}</p>
                </strong> */}
              <p className="projectName">{project.project_name}</p>
              
              <a href={project.href} rel="noreferrer" target="_blank">
                <img
                  className="inner-img"
                  src={project.src}
                  alt={project.alt}
                />
              </a>

              <br />
              <br />
           
                <ModalItem {...project}
               
                />
         
              
            </div>
          ))}
        </ItemsCarousel>
        
      </div>
     
    </div>
  );
};
export default Projects;

/*
key={project.id}
show={handleModalShow}
onHide={handleModalHide}
onItemChange={this.handleItemChange}
project={project}*/
import React, { useState} from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

import ItemsCarousel from "react-items-carousel";
import { projects } from "../../Api/projects";
import { ImUndo2, ImRedo2 } from "react-icons/im";





import "./Projects.css";

const Projects = () => {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }


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
          {projects.map((project, id) => (
            <div className="image-wrapper text-center ">
              <p className="projectName">{project.name}</p>
              <a href={project.href} rel="noreferrer" target="_blank">
                <img
                  className="inner-img"
                  src={project.src}
                  alt={project.alt}
                />
              </a>
             
              <Accordion className="text-center" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header></Accordion.Header>
        <Accordion.Body> 
          <span>
              <OverlayTrigger
               key={id}
                 // First Icon
                placement="right"
                overlay={
                  <Tooltip>
                    Click to see <strong>{
                    project.tech_1_name
                    }</strong> Doc.
                  </Tooltip>
                  
                }
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.tech_1_url}
                >
                  <img
                    className="iconSize"
                    src={project.tech_1_icon}
                    alt={project.tech_1_name}
                  />
                </a>
              </OverlayTrigger> 
            </span>
            <span>
              <OverlayTrigger
               key={id}
                 // Second Icon
                placement="right"
                overlay={
                  <Tooltip>
                    Click to see <strong>{
                    project.tech_2_name
                    }</strong> Doc.
                  </Tooltip>
                  
                }
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.tech_2_url}
                >
                  <img
                    className="iconSize"
                    src={project.tech_2_icon}
                    alt={project.tech_2_name}
                  />
                </a>
              </OverlayTrigger> 
            </span>
            <span>
              <OverlayTrigger
               key={id}
                 // Third Icon
                placement="right"
                overlay={
                  <Tooltip>
                    Click to see <strong>{
                    project.tech_3_name
                    }</strong> Doc.
                  </Tooltip>
                  
                }
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.tech_3_url}
                >
                  <img
                    className="iconSize"
                    src={project.tech_3_icon}
                    alt={project.tech_3_name}
                  />
                </a>
              </OverlayTrigger> 
            </span>
            <span>
              <OverlayTrigger
               key={id}
                 // Third Icon
                placement="right"
                overlay={
                  <Tooltip>
                    Click to see <strong>{
                    project.tech_4_name
                    }</strong> Doc.
                  </Tooltip>
                  
                }
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.tech_4_url}
                >
                  <img
                    className="iconSize"
                    src={project.tech_4_icon}
                    alt={project.tech_4_name}
                  />
                </a>
              </OverlayTrigger> 
            </span>
            </Accordion.Body>
 </Accordion.Item>
    </Accordion>
              
                        </div>
              
            
          ))}
        </ItemsCarousel>
      </div>
    </div>
  );
};
export default Projects;

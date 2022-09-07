import React, { useState, useEffect, useRef } from "react";
import ItemsCarousel from "react-items-carousel";
import { projects } from "../../Api/projects";
import { ImUndo2,ImRedo2 } from "react-icons/im";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FaReply } from "react-icons/fa";

import './Projects.css';


 const Projects = ()=> {

  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
            <FaReply/>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  const myRefname = useRef(null);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 150;
  const [timeLeft, setTimeLeft] = useState(1);
  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      myRefname.current.click();
      setTimeLeft(timeLeft + 1);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);
  return (
    
    <div className="bodyContainer">
      <h1 className="text-center projectsH1">
        My Projects
      </h1>
    <div className="carouselContainer" style={{ padding: `0 ${chevronWidth}px` }}>
      
      <ItemsCarousel
        infiniteLoop={true}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={8}
        leftChevron={<span className="arrowIcon"><ImUndo2/></span>}
        rightChevron={<span className="arrowIcon"><ImRedo2/></span>}
        outsideChevron
        chevronWidth={chevronWidth}
        showSlither={true}
      >

          {projects.map((project, id) => (
            
              <div className="image-wrapper">
               
              <a href={project.href} rel="noreferrer" target="_blank">
            
                <img
                className="inner-img"
                src={project.src}
                alt={project.alt}
              />
           
              </a>
              <Button variant="primary" onClick={() => setModalShow(true)}>
        View Tech Stack used
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            </div>
            
          ))}


      </ItemsCarousel>
    </div>
    </div>
  );
}
export default Projects;
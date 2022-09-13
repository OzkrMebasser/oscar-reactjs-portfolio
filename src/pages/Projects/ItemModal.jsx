import React from "react";
import { Modal, Button } from "react-bootstrap";

const ItemModal = ({ project, onItemChange, ...props }) => 

(
  

  <Modal {...props} bsSize="large">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-lg">Helo</Modal.Title>
    </Modal.Header>
    <Modal.Body key={props.Footerindex+1} >
       
       <p>
         {project.project_name} 
       </p>
       <p>
         {project.desc}
       </p>
       <span >
         <img className='iconSize' src={project.tech_1_icon} alt={project.alt} />
       </span>
       <span >
         <img className='iconSize' src={project.tech_2_icon} alt={project.alt} />
       </span>
       <span >
         <img className='iconSize' src={project.tech_3_icon} alt={project.alt} />
       </span>
       <span >
         <img className='iconSize' src={project.tech_4_icon} alt={project.alt} />
       </span>
       <span >
         <img className='iconSize' src={project.tech_5_icon} alt={project.alt} />
       </span>
     </Modal.Body>
    <Button onClick={props.onHide}>Close</Button>
    <Modal.Footer />
  </Modal>
);

export default ItemModal;
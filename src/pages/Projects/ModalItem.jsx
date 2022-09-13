import React,{ useState} from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

 

function ModalItem({props, ...project}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button>
<br />
    <Modal className='moreDown' show={show} onHide={handleClose} animation={false}>
      <Modal.Header className="mt-4" >
        <Modal.Title> Id: {project.id} <h1>{project.project_name}</h1></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p>{project.desc}</p>
  
      <span>
        <img className="iconSize" src={project.tech_1_icon} alt={project.tech_1_name} />
      </span>
      <span>
        <img className="iconSize" src={project.tech_2_icon} alt={project.tech_2_name} />
      </span>
      <span>
        <img className="iconSize" src={project.tech_3_icon} alt={project.tech_3_name} />
      </span>
      <span>
        <img className="iconSize" src={project.tech_4_icon} alt={project.tech_4_name} />
      </span>
      <span>
        <img className="iconSize" src={project.tech_5_icon} alt={project.tech_5_name} />
      </span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
         Go back
        </Button>
        
      </Modal.Footer>
    </Modal>
  </>
  );
}


export default ModalItem;
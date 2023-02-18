import React,{ useState} from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

 

function ModalItem({props, ...project}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Button className='stackBtn' onClick={handleShow}>
      VER TECH STACK
    </Button>
    
<br />
    <Modal className='moreDown' show={show} onHide={handleClose} animation={false}>
      <Modal.Header className="mt-4" >
        <Modal.Title> Id: {project.id} <h1>{project.project_name}</h1></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        {/* <p>{project.desc}</p> */}
  
      <span>
        <img className="iconSize" src={project.tech_1_icon} alt={project.tech_1_name} />
        <p>{project.tech_1_name}</p>
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
      {/*Git hub repo*/ " "}

      <span style={{marginLeft: "56px"}} id="repo" data-tooltip-content="Ver codigo en gitHub"> 
          <a href={project.git_url} rel="nofollow noopener noreferrer" target="_blank">
          <img className="iconSize" src={project.git_icon} alt={project.git_alt} />  
          </a>    
      </span> 
        {/*Web */ " "}<span id="www" data-tooltip-content="Ir al sitio web..."> 
        <a href={project.www_site} rel="nofollow noopener noreferrer" target="_blank">

        <img className="iconSize" src={project.www_icon} alt="" />
        </a>    
      </span> 
      {/*Tooltips config*/}
      <ReactTooltip anchorId="www" />
      <ReactTooltip anchorId="repo" />


      </Modal.Body>
      <Modal.Footer>


      <Button className='stackBtn' onClick={handleClose}>
         Go back
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  );
}


export default ModalItem;
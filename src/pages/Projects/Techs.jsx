import React from 'react'
import { projects} from "../../Api/projects";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

 

const Techs = () => {
  return (
    <div >
      {projects.map((project,index) => ( 
        <>
            <span>
              <OverlayTrigger
               key={index}
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
               key={index}
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
               key={index}
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
               key={index}
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

            
           
            </>
          ))}

    </div>
  )
}

export default Techs;
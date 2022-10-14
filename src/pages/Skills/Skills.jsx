import React, { Fragment } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Accordion from 'react-bootstrap/Accordion';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./Skills.css";
import { skills } from "../../Api/hardSkillsData";

const Skills = () => {
  const [t] = useTranslation("global");



  return (
    <Fragment className="containerGrid" >
      <h2 className="textTitle">{t("skills.title")}</h2>
    <motion.div  className="cardGrid" 
         initial={{y: 600 }}
         animate={{ y: 0}}
         transition={{delay: 0.3, type: 'fade' }}>
     <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="texts">{t("skills.hardSkills")}</Accordion.Header>
        
        <Accordion.Body>
      
      <Row xs={1} md={6} fluid className="g-4 texts">
        {skills.map((skill, id) => (
          <Col >
            <Card className="cardGrid align-middle" >
              {/* <span className={skill.class} ><span className="bgBlack">{skill.icon}</span></span> */}
              <img className={skill.class} src={skill.icon} alt={skill.alt} />
              <Card.Body>
                <Card.Title>{skill.title}</Card.Title>
                {/* <Card.Text>{skill.category}</Card.Text> */}
                {/* <Card.Text className="textM">{skill.description}</Card.Text> */}
                {/* <strong><p className="texts">Aproximate knowledge</p></strong> */}
                <ProgressBar className="texts" animated now={skill.progress} label={`${skill.progress}%`} variant={skill.variant} style={{height:"20px", color:"dark"}}/>
                
              </Card.Body>
              
            </Card>

          </Col>
        ))}
      </Row>

      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>{t("skills.softSkills")}</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className="texts">{t("skills.hardSkills")}</Accordion.Header>
        
        <Accordion.Body>
      
      <Row xs={1} md={3} fluid className="g-4 texts">
        {skills.map((skill, id) => (
          <Col >
            <Card className="cardGrid align-middle" >
              {/* <span className={skill.class} ><span className="bgBlack">{skill.icon}</span></span> */}
              <img className={skill.class} src={skill.icon} alt={skill.alt} />
              <Card.Body>
                <Card.Title>{skill.title}</Card.Title>
                <Card.Text>{skill.category}</Card.Text>
                <Card.Text className="textM">{skill.description}</Card.Text>
                <strong><p className="texts">Aproximate knowledge</p></strong>
                <ProgressBar className="texts" animated now={skill.progress} label={`${skill.progress}%`} variant={skill.variant} style={{height:"20px", color:"dark"}}/>
              </Card.Body>
              
            </Card>
          </Col>
        ))}
      </Row>

      </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </motion.div>
    </Fragment>
  );
};
export default Skills;


  
  // {skills.map((skill, id) => (
  //   <div class="card">
  //     <h3>{skill.title}</h3>
  //     <i class={skill.icon} aria-hidden="true"></i>
  //     <p>{skill.category}</p>
  //     <div class="button">
  //       <button>Read More</button>
  //     </div>
  //   </div>
  // ))}

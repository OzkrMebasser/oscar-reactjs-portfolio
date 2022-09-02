import React, { useState, Fragment } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Accordion from 'react-bootstrap/Accordion';


import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./Skills.css";
import { skills } from "../../Api/hardSkillsData";

const Skills = () => {

  return (
    <Fragment className="cardGrid containerGrid">
     <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="texts">MY HARD SKILLS</Accordion.Header>
        
        <Accordion.Body>
      <h1 className="texts">Here are some of my hard skills</h1>
      <Row xs={2} md={4} className="g-4 texts ">
        {skills.map((skill, id) => (
          <Col >
            <Card className="cardGrid" >
              <span className={skill.class} >{skill.icon}</span>
              <Card.Body>
                <Card.Title>{skill.title}</Card.Title>
                <Card.Text>{skill.category}</Card.Text>
                <Card.Text className="textM">{skill.description}</Card.Text>
                <strong><p className="texts">Aproximate knowledge</p></strong>
                <ProgressBar className="texts" animated now={skill.progress} label={`${skill.progress}%`} variant={skill.variant} style={{height:"20px"}}/>
              </Card.Body>
              
            </Card>
          </Col>
        ))};
      </Row>
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
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
      </Accordion>
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

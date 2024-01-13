import React, { useState, useEffect } from "react";
import CertificationsPdf from "../Skills/CertificationsPdf/CertificationsPdf";
import ScrollToTop from "../../Components/GoUpButton/ScrollToTop";
import useSound from "../../context/hook/useSound";
import SoundClick from "../../Components/Click/interface.mp3";
import FlipCard from "./FlipCard";
import { skillsFE, skillsBE } from "../../Api/hardSkillsData";
import { softSkills, workingSoftSkills } from "../../Api/softSkillsData";
import ProgressBar from "react-bootstrap/ProgressBar";
import Accordion from "react-bootstrap/Accordion";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./Skills.css";

const Skills = (props) => {
  const [t] = useTranslation("global");
  const playSound = useSound(SoundClick);
  //Dropdown Tech description

  const { isDropOpen } = props;
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);
  const [categoryFE, setCategoryFE] = useState("");
  const [categoryBE, setCategoryBE] = useState("");
  const [filteredFECategories, setFilteredFECategories] = useState(skillsFE);
  const [filteredBECategories, setFilteredBECategories] = useState(skillsBE);

  // Using set to filter unique values from FRONT END SKILLS
  const categoriesFE = Array.from(new Set(skillsFE.map((cat) => cat.category)));
  useEffect(() => {
    setFilteredFECategories(
      skillsFE.filter((cat) => !categoryFE || categoryFE === t(cat.category))
    );
  }, [categoryFE, skillsFE, t]);

  // Using set to filter unique values from BACK END SKILLS
  const categoriesBE = Array.from(new Set(skillsBE.map((cat) => cat.category)));
  useEffect(() => {
    setFilteredBECategories(
      skillsBE.filter((cat) => !categoryBE || categoryBE === t(cat.category))
    );
  }, [categoryBE, skillsBE, t]);

  const clearFilters = () => {
    setCategoryFE("");
  };
  function handleCardClick(index) {
    setSelectedCardIndex(selectedCardIndex === index ? -1 : index);
  }

  return (
    <>
      <motion.div
        className="skills-container text-uppercase"
        initial={{ y: 600 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: "fade" }}
      >
        <section className="">
          <h2 className="textTitle">{t("skills.title")}</h2>
          <h6 className="subTitles">
            {t("skills.hardSkills")}
            {"    "}
          </h6>
        </section>
        <Accordion>
          <ScrollToTop />
          {/*↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  FrontEnd tools  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/}
          <Accordion.Item eventKey="0">
            {/* <ScrollToTop /> */}
            <Accordion.Header className="texts ">
          
              {t("skills.frontendTools")}{" "}
              <img
                
                className="frontEndimg "
                id="spaceBtwn"
                src="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2Ffrontend.png?alt=media&token=6ce6c9c4-97e2-4e9f-b883-45a9dd5ed0fa"
                alt="FrontEnd"
              />
            </Accordion.Header>

            <Accordion.Body>
              <div className="select-cats">
                <select
                  className="select-input"
                  onChange={(e) => setCategoryFE(e.target.value)}
                  value={categoryFE}
                >
                  <option value="" disabled>
                    {t("skills.selectCat")}
                  </option>

                  {categoriesFE.map((cat) => (
                    <option key={cat}>{t(`${cat}`)}</option>
                  ))}
                </select>

                <button
                  className="select-btn"
                  onClick={() => {playSound(); setCategoryFE("");}}
                >
                  {t("skills.viewAllCats")}
                </button>
              </div>

              <Row xs={1} md={5} fluid className="g-3 texts alto">
                {filteredFECategories.map((skill, index) => (
                  <Col key={skill.id}>
                    <Card
                      key={skill.id}
                      className=" cardGridShadow align-middle "
                      style={{
                        backgroundColor: isDropOpen
                          ? "cardGrid"
                          : "cardGridOpen",
                      }}
                    >
                      {/* <span className={skill.class} ><span className="bgBlack">{skill.icon}</span></span> */}
                      <img
                        className={skill.class}
                        src={skill.icon}
                        alt={skill.alt}
                      />
                      <Card.Body>
                        <Card.Title>{skill.title} </Card.Title>

                        <div className="alto">
                          <Card.Text className="subTitle">
                            {t(`${skill.category}`)}
                            {"    "}
                          </Card.Text>
                        </div>

                        <div className="dropdown">
                          {/* {"Button DROP DOWN"} */}
                          <button
                            className="dropBtn"
                            onClick={() => {playSound(); handleCardClick(index);}}
                          >
                            <span className="xTtitle">
                              {t("skills.whatIsIt")}
                            </span>{" "}
                            <span className="bgTechTitle xTtitle">
                              "{skill.title}" ?
                            </span>{" "}
                          </button>
                          {selectedCardIndex === index && (
                            <div id="dropdown-content">
                              <Card.Text className="textM">
                                <Card.Text className="subTitle">
                                  <p className="techTitle">
                                    {t(`${skill.typeOfTech}`)}
                                  </p>
                                </Card.Text>
                                {t(`${skill.description}`)}
                                <br />
                                <button className="docsBtn" onClick={()=> playSound()}>
                                  <a
                                    className="noUnderline"
                                    href={`${skill.docs}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Read Docs.
                                    <img
                                      className="docsLink"
                                      src="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fbooks-svgrepo-com%20(1).svg?alt=media&token=03a80306-1366-4ba7-ad3a-e7368d1ff0c9"
                                      alt="docs"
                                    />
                                  </a>
                                </button>
                              </Card.Text>
                            </div>
                          )}

                          <ProgressBar
                            className="progressBar"
                            animated
                            now={skill.progress}
                            label={`${t("skills.learning")}`}
                            variant={skill.variant}
                            style={{ height: "23px", color: "black" }}
                          />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          {/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑  FrontEnd tools  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/}
          {/*↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ BackEnd tools ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/}

          <Accordion.Item eventKey="1">
            {/* <ScrollToTop /> */}
            <Accordion.Header>
              {t("skills.backendTools")}
              <img
                className="backEndimg"
                src="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2Fbackend.png?alt=media&token=733cc56b-1d7e-447d-b904-a4b88f2bc7d7"
                alt="FrontEnd"
              />
            </Accordion.Header>
            <Accordion.Body>
              <div className="select-cats">
                <select
                  className="select-input"
                  onChange={(e) => setCategoryBE(e.target.value)}
                  value={categoryBE}
                >
                  <option value="" disabled>
                    {t("skills.selectCat")}
                  </option>

                  {categoriesBE.map((cat) => (
                    <option key={cat}>{t(`${cat}`)}</option>
                  ))}
                </select>

                <button
                  className="select-btn"
                  onClick={() => {playSound(); setCategoryBE("")}}
                >
                  {t("skills.viewAllCats")}
                </button>
              </div>
              <Row xs={1} md={5} fluid className="g-3 texts alto">
                {filteredBECategories.map((skill, index) => (
                  <Col key={skill.id}>
                    <Card
                      className=" cardGridShadow align-middle "
                      style={{
                        backgroundColor: isDropOpen
                          ? "cardGrid"
                          : "cardGridOpen",
                      }}
                    >
                      {/* <span className={skill.class} ><span className="bgBlack">{skill.icon}</span></span> */}
                      <img
                        className={skill.class}
                        src={skill.icon}
                        alt={skill.alt}
                      />
                      <Card.Body>
                        <Card.Title>{skill.title} </Card.Title>

                        <div className="alto">
                          <Card.Text className="subTitle">
                            {t(`${skill.category}`)}
                            {"    "}
                          </Card.Text>
                        </div>

                        <div className="dropdown">
                          <button
                            className="dropBtn"
                            onClick={() => {playSound(); handleCardClick(index);}}
                          >
                            <span className="xTtitle">
                              {t("skills.whatIsIt")}
                            </span>{" "}
                            <span className="bgTechTitle xTtitle">
                              "{skill.title}" ?
                            </span>{" "}
                          </button>
                          {selectedCardIndex === index && (
                            <div id="dropdown-content">
                              <Card.Text className="textM">
                                <Card.Text className="subTitle">
                                  <p className="techTitle">
                                    {t(`${skill.typeOfTech}`)}
                                  </p>
                                </Card.Text>
                                {t(`${skill.description}`)}
                                <br />
                                <button className="docsBtn" onClick={()=> playSound()}>
                                  <a
                                    className="noUnderline"
                                    href={`${skill.docs}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Read Docs.
                                    <img
                                      className="docsLink"
                                      src="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fbooks-svgrepo-com%20(1).svg?alt=media&token=03a80306-1366-4ba7-ad3a-e7368d1ff0c9"
                                      alt="docs"
                                    />
                                  </a>
                                </button>
                              </Card.Text>
                            </div>
                          )}

                          <ProgressBar
                            className="progressBar"
                            animated
                            now={skill.progress}
                            label={`${t("skills.learning")}`}
                            variant={skill.variant}
                            style={{ height: "23px", color: "black" }}
                          />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          {/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ BackEnd tools ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/}

          {/*↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Certifications ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/}
          <Accordion.Item eventKey="2">
            {/* <ScrollToTop /> */}
            <Accordion.Header className="texts">
              {t("skills.certificates")}
              <img
                className="certsImg"
                src="https://www.svgrepo.com/show/263184/graduation-mortarboard.svg"
                alt="Certifications"
              />
            </Accordion.Header>

            <Accordion.Body>
              <CertificationsPdf />
              {/* <CertsList/> */}
            </Accordion.Body>
          </Accordion.Item>
          {/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑  Certifications  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/}
          {/*↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Soft skills ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/}
          <h4 className="subTitles">{t("skills.softSkills")}</h4>

          <Accordion.Item eventKey="3">
            <Accordion.Header className="texts">
              {t("skills.mySoftSkills")}
              <img
                className="skillsImg"
                src="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2Fsoftskills.png?alt=media&token=614a1f81-ac9d-4d36-914a-185e7f71bd15"
                alt="softSkills"
              />
            </Accordion.Header>

            <Accordion.Body>
              <Accordion id="softSkillsSubAcc">
                {/*  acordion 1 SoftSkills  */}
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="texts">
                    {/* LAS QUE POSEO */}
                    {t("mySoftSkills.iposees")}
                  </Accordion.Header>
                  <Accordion.Body>
                    {" "}
                    {/* <h2 className="subTitles">En las que estoy trabajando:</h2>
                     */}
                    <Row className="g-3 texts ">
                      {softSkills.map((skill) => (
                        <FlipCard
                          key={skill.id}
                          frontImage={skill.imageFront}
                          backImage={skill.imageBack}
                          title={t(skill.title)}
                          description={t(skill.description)}
                        />
                      ))}
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                {/*  acordion 2 SoftSkills  */}
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="subTitlesAccordion">
                    {/* Las que estoy trabajando */}
                    {t("mySoftSkills.woorkingOnIt")}
                  </Accordion.Header>
                  <Accordion.Body>
                    {" "}
                    {/* <h2 className="subTitles">En las que estoy trabajando:</h2>
                     */}
                    <Row className="g-3 texts ">
                      {workingSoftSkills.map((skill) => (
                        <FlipCard
                          key={skill.id}
                          frontImage={skill.imageFront}
                          backImage={skill.imageBack}
                          title={skill.title}
                          description={skill.description}
                        />
                      ))}
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
            {/* acordion 2  */}
          </Accordion.Item>
          {/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑  Soft skills  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/}
        </Accordion>
      </motion.div>
    </>
  );
};
export default Skills;

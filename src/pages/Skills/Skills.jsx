import React, { useState, useEffect } from "react";
import CertificationsPdf from "../../Components/CertificationsPdf/CertificationsPdf";
import ScrollToTop from "../../Components/GoUpButton/ScrollToTop";
import useSound from "../../context/hook/useSound";
import SoundClick from "../../Components/Click/interface.mp3";
import SkillCardBody from "../../Components/Cards/SkillCardBody";
import FlipCard from "../../Components/Cards/FlipCard";
import { skillsFE, skillsBE } from "../../Api/hardSkillsData";
import { softSkills, workingSoftSkills } from "../../Api/softSkillsData";
import Accordion from "react-bootstrap/Accordion";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Row from "react-bootstrap/Row";
import "./Skills.css";

const Skills = () => {
  const [t] = useTranslation("global");
  const playSound = useSound(SoundClick);

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
  }, [categoryFE, t]);

  // Using set to filter unique values from BACK END SKILLS
  const categoriesBE = Array.from(new Set(skillsBE.map((cat) => cat.category)));
  useEffect(() => {
    setFilteredBECategories(
      skillsBE.filter((cat) => !categoryBE || categoryBE === t(cat.category))
    );
  }, [categoryBE, t]);

  // const clearFilters = () => {
  //   setCategoryFE("");
  // };
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
                  onClick={() => {
                    playSound();
                    setCategoryFE("");
                  }}
                >
                  {t("skills.viewAllCats")}
                </button>
              </div>
              <Row xs={1} md={5} fluid className="g-3 texts alto">
                {filteredFECategories.map((skill, index) => (
                  <SkillCardBody
                    key={skill.id}
                    skillId={skill.id}
                    skillClass={skill.class}
                    skillIcon={skill.icon}
                    skillAlt={skill.alt}
                    skillTitle={skill.title}
                    skillCategory={skill.category}
                    index={index}
                    skillTypeOfTech={skill.typeOfTech}
                    skillDescription={skill.description}
                    skillDocs={skill.docs}
                    skillProgress={skill.progress}
                    skillVariant={skill.variant}
                    playSound={playSound}
                    isDropOpen={selectedCardIndex === index}
                    selectedCardIndex={selectedCardIndex}
                    handleCardClick={handleCardClick}
                  />
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
                  onClick={() => {
                    playSound();
                    setCategoryBE("");
                  }}
                >
                  {t("skills.viewAllCats")}
                </button>
              </div>
              <Row xs={1} md={5} fluid className="g-3 texts alto">
                {filteredBECategories.map((skill, index) => (
                  <SkillCardBody
                    key={skill.id}
                    skillId={skill.id}
                    skillClass={skill.class}
                    skillIcon={skill.icon}
                    skillAlt={skill.alt}
                    skillTitle={skill.title}
                    skillCategory={skill.category}
                    index={index}
                    skillTypeOfTech={skill.typeOfTech}
                    skillDescription={skill.description}
                    skillDocs={skill.docs}
                    skillProgress={skill.progress}
                    skillVariant={skill.variant}
                    playSound={playSound}
                    isDropOpen={selectedCardIndex === index}
                    selectedCardIndex={selectedCardIndex}
                    handleCardClick={handleCardClick}
                  />
                ))}
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          {/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ BackEnd tools ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/}

          {/*↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Certifications ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/}

          <Accordion.Item eventKey="2">
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
                      {workingSoftSkills.map((workinSkill) => (
                        <FlipCard
                          key={workinSkill.id}
                          frontImage={workinSkill.imageFront}
                          backImage={workinSkill.imageBack}
                          title={t(workinSkill.title)}
                          description={t(workinSkill.description)}
                        />
                      ))}
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
          {/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑  Soft skills  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/}
        </Accordion>
      </motion.div>
    </>
  );
};
export default Skills;

import React, { useState } from "react";
import { Row, Col, Card, ProgressBar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../../pages/Skills/Skills.css";

const SkillCardBody = ({
  skillId,
  skillClass,
  skillIcon,
  skillAlt,
  skillTitle,
  index,
  skillCategory,
  skillTypeOfTech,
  skillDescription,
  skillDocs,
  skillProgress,
  skillVariant,
  isDropOpen,
  playSound,
  selectedCardIndex,
  handleCardClick,
}) => {
  const [t] = useTranslation("global");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Col>
        <Card
          key={skillId}
          className="cardGridShadow align-middle"
          style={{
            backgroundColor: isDropOpen ? "cardGrid" : "cardGridOpen",
          }}
        >
          <img className={skillClass} src={skillIcon} alt={skillAlt} />
          <Card.Body>
            <Card.Title>{skillTitle}</Card.Title>
            <div className="alto">
              <Card.Text className="subTitle">
                {t(`${skillCategory}`)}
              </Card.Text>
            </div>
            <div className="dropdown">
              <button
                className="dropBtn bgTechTitle xTtitle"
                onClick={() => {
                  playSound();
                  handleCardClick(index);
                }}
              >
                <span className="noBg">{t("skills.whatIsIt")}</span>
                <span className="yesBg">"{skillTitle}"</span>
                <span className="noBg"> ?</span>
              </button>
              {selectedCardIndex === index && (
                <div id="dropdown-content">
                  <Card.Text className="textM">
                    <Card.Text className="subTitle">
                      <p className="techTitle">{t(`${skillTypeOfTech}`)}</p>
                    </Card.Text>
                    {t(`${skillDescription}`)}
                    <br />
                    <a
                      className="noUnderline"
                      href={`${skillDocs}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="docsBtn" onClick={() => playSound()}>
                        Read Docs.
                        <img
                          className="docsLink"
                          src="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fbooks-svgrepo-com%20(1).svg?alt=media&token=03a80306-1366-4ba7-ad3a-e7368d1ff0c9"
                          alt="docs"
                        />
                      </button>
                    </a>
                  </Card.Text>
                </div>
              )}
              <ProgressBar
                className="progressBar"
                animated
                now={skillProgress}
                label={`${t("skills.learning")}`}
                variant={skillVariant}
                style={{ height: "23px", color: "black" }}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SkillCardBody;

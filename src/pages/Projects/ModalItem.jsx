import React, { useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { MdOutlineQueuePlayNext } from "react-icons/md";

import { Link } from "react-router-dom";
import CheckBox from "./CheckBox";
import { useTranslation } from "react-i18next";
import useSound from "../../context/hook/useSound";

import SoundClick from "../../Components/Click/interface.mp3";
import "./Projects.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalItem({ props, ...project }) {
  const [t] = useTranslation("global");
  const playSound = useSound(SoundClick);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="stackBtn text-uppercase" onClick={handleShow}>
        {/* VER TECH STACK */}
        {t("myProjects.seeStack")}
      </Button>
      <br />
      <Modal
        className="modalMoreDown text-uppercase"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        {/* {" "}
            Id: {project.id} */}
        <Modal.Header className="modalHeader">
          <Modal.Title>{t(`${project.project_name}`)}</Modal.Title>
          <div className="blink-soft">
            <CheckBox checked={project.deployed} projectType={project.type} />
          </div>
        </Modal.Header>
        <Modal.Body>
          <p className="textDescIcons ">{t(`${project.desc}`)}</p>

          {project.linkSchool && (
            // {t(`${project.linkSchool}`)}
            <>
              <p className="school">
                <span className="asterisc">*</span>
                {t(`${project.linkSchool}`)}
                <br />
                <Link to="/skills">{t(`${project.seeCert}`)}</Link>
              </p>
            </>
          )}

          <hr />
          <h3 className="textInIcons">
            {/* Stack I Used */}
            {t("myProjects.stackIused")}
          </h3>
          <div className="iconContainer mb-3">
            <span
              id={`${project.tech_1_name}`}
              data-tooltip-content={`${project.tech_1_name}`}
            >
              <img
                className="iconSize"
                src={project.tech_1_icon}
                alt={project.tech_1_name}
              />
            </span>
            <span
              id={`${project.tech_2_name}`}
              data-tooltip-content={`${project.tech_2_name}`}
            >
              <img
                className="iconSize"
                src={project.tech_2_icon}
                alt={project.tech_2_name}
              />
            </span>
            <span
              id={`${project.tech_3_name}`}
              data-tooltip-content={`${project.tech_3_name}`}
            >
              <img
                className="iconSize"
                src={project.tech_3_icon}
                alt={project.tech_3_name}
              />
            </span>
            <span
              id={`${project.tech_4_name}`}
              data-tooltip-content={`${project.tech_4_name}`}
            >
              <img
                className="iconSize"
                src={project.tech_4_icon}
                alt={project.tech_4_name}
              />
            </span>
            {project.tech_5_icon && project.tech_5_name && (
              <span
                id={`${project.tech_5_name}`}
                data-tooltip-content={`${project.tech_5_name}`}
              >
                <img
                  className="iconSize"
                  src={project.tech_5_icon}
                  alt={project.tech_5_name}
                />
              </span>
            )}

            {project.tech_6_icon && project.tech_6_name && (
              <span
                id={`${project.tech_6_name}`}
                data-tooltip-content={`${project.tech_6_name}`}
              >
                <img
                  className="iconSize"
                  src={project.tech_6_icon}
                  alt={project.tech_6_name}
                />
              </span>
            )}

            {project.tech_7_icon && project.tech_7_name && (
              <span
                id={`${project.tech_7_name}`}
                data-tooltip-content={`${project.tech_7_name}`}
              >
                <img
                  className="iconSize"
                  src={project.tech_7_icon}
                  alt={project.tech_7_name}
                />
              </span>
            )}
            {project.tech_8_icon && project.tech_8_name && (
              <span
                id={`${project.tech_8_name}`}
                data-tooltip-content={`${project.tech_8_name}`}
              >
                <img
                  className="iconSize"
                  src={project.tech_8_icon}
                  alt={project.tech_8_name}
                />
              </span>
            )}
          </div>
          {/* <hr /> */}
          {project.git_url || project.www_site ? <hr /> : null}
          {/* Deployment */}
          {/* <span> {t("myProjects.deployed")}</span> */}
          {project.git_url || project.www_site ? (
            <span> {t("myProjects.deployed")}</span>
          ) : null}
          {/* <span>
            <CheckBox checked={project.deployed} projectType={project.type} />
            </span> */}

          {project.git_url || project.www_site ? (
            <div className="iconsDeploy">
              {/*Deployed in*/ " "}
              {project.deploy_name_1 && (
                <span
                  id={`${project.deploy_name_1}`}
                  data-tooltip-content={`${project.deploy_name_1}`}
                >
                  <img
                    className="iconSize"
                    src={project.deploy_icon_1}
                    alt={project.deploy_name_1}
                  />
                </span>
              )}
              {/*Git hub repo*/ " "}
              {project.git_url && (
                <span
                  // style={{ marginLeft: "56px" }}
                  id="repo"
                  data-tooltip-content={`${t("myProjects.githubLink")}`}
                >
                  <a
                    href={project.git_url}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="iconSize"
                      src={project.git_icon}
                      alt={project.git_alt}
                    />
                  </a>
                </span>
              )}
              {/*Web */ " "}
              {project.www_site && (
                <span
                  id="www"
                  data-tooltip-content={`${t("myProjects.websiteLink")}`}
                >
                  <a
                    href={project.www_site}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <img className="iconSize" src={project.www_icon} alt="" />
                  </a>
                </span>
              )}
            </div>
          ) : (
            <div className="seeOtherProj">
              <Link to="/other-projects">
                <Button
                  className="seeOtherProjBtn text-uppercase"
                  onClick={handleClose}
                >
                  {t("myProjects.moreProjects")}
                  {/* SEE PROYECTS */}
                  <MdOutlineQueuePlayNext className="moreProj" />
                </Button>
              </Link>
            </div>
          )}

          {/*Tooltips config*/}
          <ReactTooltip anchorId={`${project.deploy_name_1}`} />
          <ReactTooltip anchorId="www" />
          <ReactTooltip anchorId="repo" />
          <ReactTooltip anchorId={`${project.tech_1_name}`} />
          <ReactTooltip anchorId={`${project.tech_2_name}`} />
          <ReactTooltip anchorId={`${project.tech_3_name}`} />
          <ReactTooltip anchorId={`${project.tech_4_name}`} />
          {project.tech_5_icon && project.tech_5_name && (
            <ReactTooltip anchorId={`${project.tech_5_name}`} />
          )}
          {project.tech_6_icon && project.tech_6_name && (
            <ReactTooltip anchorId={`${project.tech_6_name}`} />
          )}
          {project.tech_7_icon && project.tech_7_name && (
            <ReactTooltip anchorId={`${project.tech_7_name}`} />
          )}
          {project.tech_8_icon && project.tech_8_name && (
            <ReactTooltip anchorId={`${project.tech_8_name}`} />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="stackBtn text-uppercase" onClick={handleClose}>
            {t("myProjects.goBack")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalItem;

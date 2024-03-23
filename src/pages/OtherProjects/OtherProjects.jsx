import React, { useState, useEffect } from "react";
import Checkbox from "../Projects/CheckBox";
import { otherProjects } from "../../Api/projects";
import { Tooltip as MyTooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";
import useSound from "../../context/hook/useSound";
import SoundClick from "../../Components/Click/interface.mp3";
import ScrollToTop from "../../Components/GoUpButton/ScrollToTop";
import { Link } from "react-router-dom";
import LoadingScrolling from "../../Components/Loader/LoadingScrolling";

import "../Projects/Projects.css";
import "./OtherProjects.css";

const OtherProjects = () => {
  const [t] = useTranslation("global");
  const playSound = useSound(SoundClick);
  const [projectsWithTechNames, setProjectsWithTechNames] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [numDisplayed, setNumDisplayed] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function getTechNames(project) {
      const techNames = [];
      for (const key in project) {
        if (key.startsWith("tech_") && key.endsWith("_name")) {
          const techName = project[key];
          techNames.push(techName);
        }
      }
      return techNames;
    }

    const projectsWithNames = otherProjects.map((project) => {
      const techNames = getTechNames(project);
      const projectCopy = { ...project };
      for (const key in project) {
        if (key.startsWith("tech_") && key.endsWith("_name")) {
          delete projectCopy[key];
        }
      }
      return { ...projectCopy, techNames };
    });

    setProjectsWithTechNames(projectsWithNames);
  }, []);

  const handleSelectChange = (e) => {
    setSelectedType(e.target.value);
  };

  const filteredProjects = projectsWithTechNames.filter((project) => {
    if (selectedType === "all") {
      return true;
    } else {
      // console.log(selectedType);
      return project.type === selectedType;
    }
  });

  const handleScroll = () => {
    const scrolledToBottom =
      window.pageYOffset + window.innerHeight >=
      document.documentElement.scrollHeight;
    const scrolledToTop = window.pageYOffset === 0;

    if (scrolledToBottom && numDisplayed < filteredProjects.length) {
      setIsLoading(true);
      setTimeout(() => {
        setNumDisplayed(numDisplayed + 6);
        setIsLoading(false);
      }, 2000);
    }

    if (scrolledToTop) {
      setNumDisplayed(6);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [numDisplayed, filteredProjects]);

  return (
    <>
      <header className="select-type">
        <select
          className="select-input-types uppercase"
          value={selectedType}
          onChange={handleSelectChange}
        >
          <option value="all" disabled>
          
          {t("myProjects.selectProjectType")}
          </option>
          <option value="online">{t("myProjects.online")}</option>
          <option value="academic">{t("myProjects.academic")}</option>
          <option value="development">{t("myProjects.dev")}</option>
          <option value="practice">{t("myProjects.practice")}</option>
          <option value="offline">{t("myProjects.offline")}</option>
        </select>
        <button
          className="select-all-btn uppercase"
          onClick={() => {
            playSound();
            setSelectedType("all");
          }}
        >
            {t("myProjects.viewAll")}
        
        </button>
      </header>
      <ScrollToTop />
      <main className="main-container">
        {filteredProjects.slice(0, numDisplayed).map((project, index) => (
          <section className="section-cards" key={index}>
            <div className="status-project">
              <span className="blink-soft ">
                <Checkbox
                  checked={project.deployed}
                  projectType={project.type}
                />
              </span>
            </div>
            <figure className="figure-project ">
              <a href={project.href} rel="noreferrer" target="_blank">
                <img
                  className="img-project"
                  src={project.src}
                  alt={project.alt}
                />
              </a>
            </figure>
            <article className="article-card">
              <h3 className="card-project-title">
                {t(`${project.project_name}`)}
              </h3>

              <div className="divDesc">
                <p className="desc-project">{t(`${project.desc}`)}</p>
                {project.aliasInstitutionName && (
                  <>
                    <p className="desc-project">
                      <span className="asterisc">*</span>
                      {t(`${project.aliasInstitutionName}`)}
                      <br />
                      {t(`${project.aliasInstitutionTitle}`)}
                      <br />
                      <Link to="/skills">{t(`${project.seeCert}`)}</Link>
                    </p>
                  </>
                )}
              </div>
            </article>
            <div className="stack-used-contain">
              <h3 className="stack-used">{t("myProjects.stackIused")}</h3>
            </div>
            <div className="stacks">
              <div className="stack-contain">
                {project.techNames.map((techName, techIndex) => (
                  <span key={techIndex}>
                    <span
                      id={`${techName}-${index}-${techIndex}`}
                      data-tooltip-content={techName}
                    >
                      <img
                        className="icon-stack"
                        src={project[`tech_${techIndex + 1}_icon`]}
                        alt={techName}
                      />
                    </span>
                    <MyTooltip
                      key={`${techName}-${index}-${techIndex}-tooltip`}
                      anchorId={`${techName}-${index}-${techIndex}`}
                      data-tooltip-content={techName}
                    />
                  </span>
                ))}
              </div>

              <span className="stack-used"> {t("myProjects.deployed")}</span>
              <div className="stack-contain">
                <span
                  id={`deploy-${index}`}
                  data-tooltip-content={project.deploy_name_1}
                >
                  <img
                    className="icon-stack"
                    src={project.deploy_icon_1}
                    alt={project.deploy_name_1}
                  />
                </span>

                <span
                  id={`repo-${index}`}
                  data-tooltip-content={`${t("myProjects.githubLink")}`}
                >
                  <a
                    href={project.git_url}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="icon-stack"
                      src={project.git_icon}
                      alt={project.git_alt}
                    />
                  </a>
                </span>

                <span
                  id={`www-${index}`}
                  data-tooltip-content={`${t("myProjects.websiteLink")}`}
                >
                  <a
                    href={project.www_site}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <img className="icon-stack" src={project.www_icon} alt="" />
                  </a>
                </span>

                <MyTooltip anchorId={`deploy-${index}`} />

                <MyTooltip anchorId={`www-${index}`} />
                <MyTooltip anchorId={`repo-${index}`} />
                {project.techNames.map((techName, techIndex) => (
                  <MyTooltip
                    key={`${techName}-${index}-${techIndex}-tooltip`}
                    anchorId={`${techName}-${index}-${techIndex}`}
                    data-tooltip-content={techName}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      {isLoading && numDisplayed < filteredProjects.length && (
        <LoadingScrolling />
      )}
    </>
  );
};

export default OtherProjects;

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useSound from "../../context/hook/useSound";
import SoundClick from "../../Components/Click/interface.mp3";
import ModalItem from "./ModalItem";
import CheckBox from "./CheckBox";
import ItemsCarousel from "react-items-carousel";
import { projects } from "../../Api/projects";
import { MdOutlineDoubleArrow } from "react-icons/md";
import "./Projects.css";
import "../OtherProjects/OtherProjects.css";

const Projects = ({ props }) => {
  const [t] = useTranslation("global");
  const playSound = useSound(SoundClick);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 200;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Función para actualizar el estado de isMobile en el cambio de tamaño de la pantalla
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // listener para el cambio de tamaño de la pantalla
    window.addEventListener("resize", updateIsMobile);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <main className="main-container">
          {projects.map((proj, id) => (
            <section className="section-cards-proj" key={id}>
              {/* <div className="status-project">
                <span className="blink-soft ">
                  <CheckBox checked={proj.deployed} projectType={proj.type} />
                </span>
              </div> */}
              <h3 className="card-proj-title">
                {" "}
                {id + 1} - {t(`${proj.project_name}`)}
              </h3>
              <figure className="figure-project ">
                {/* <img className="img-project" src={proj.src} alt={proj.alt} /> */}
                {/* <a href={proj.href} rel="noreferrer" target="_blank"> */}
                <img className="inner-img" src={proj.src} alt={proj.alt} />
                {/* </a> */}
              </figure>
              <article className="article-card">
                {/* 
                <p className="desc-project">{t(`${proj.desc}`)}</p> */}
              </article>

              <div className="btn-stack-center">
                <ModalItem {...proj} />
              </div>
            </section>
          ))}
        </main>
      ) : (
        <div className="bodyContainer">
          <div
            className="carouselContainer chevronWidth"
            style={{ padding: isMobile ? "0" : `0 ${chevronWidth}px` }}
          >
            <ItemsCarousel
              infiniteLoop={true}
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={1}
              gutter={8}
              leftChevron={
                <span className="arrowIconLeft">
                  <MdOutlineDoubleArrow className="voltearALaIzquierda" />
                </span>
              }
              rightChevron={
                <span className="arrowIconRight">
                  <MdOutlineDoubleArrow />
                </span>
              }
              outsideChevron
              chevronWidth={chevronWidth}
              showSlither={false}
            >
              {projects.map((project, index) => (
                <div className="text-center" key={index}>
                  <p className="projectName">
                    {/* {index + 1} - {t(`${project.project_name}`)} */}
                    {t(`${project.project_name}`)}
                  </p>

                  {project.href === "/more-projects" ? (
                    <Link to="/more-projects">
                      <img
                        className="inner-img"
                        src={project.src}
                        alt={project.alt}
                      />
                    </Link>
                  ) : (
                    <a href={project.href} rel="noreferrer" target="_blank">
                      <img
                        className="inner-img"
                        src={project.src}
                        alt={project.alt}
                      />
                    </a>
                  )}

                  <br />
                  <br />
                  <ModalItem {...project} />
                </div>
              ))}
            </ItemsCarousel>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;

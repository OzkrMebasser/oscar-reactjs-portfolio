import Checkbox from "../Projects/CheckBox";
import { otherProjects } from "../../Api/projects";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";
import useSound from "../../context/hook/useSound";
import SoundClick from "../../Components/Click/interface.mp3";

import "../Projects/Projects.css";
import "./OtherProjects.css";

const OtherProjects = () => {
  const [t] = useTranslation("global");
  const playSound = useSound(SoundClick);
  // console.log(otherProjects.map(other=>other));

  return (
    <>
      <main className="main-container">
        {otherProjects.map((project, id) => (
          <section className="section-cards" key={id}>
            <div className="status-project">
              <span className="blink-soft ">
                <Checkbox
                  checked={project.deployed}
                  projectType={project.type}
                />
              </span>
            </div>
            <figure className="figure-project ">
              <img
                className="img-project"
                src={project.src}
                alt={project.alt}
              />
            </figure>
            <article className="article-card">
              <h3 className="card-project-title">{project.project_name}</h3>

              <p className="desc-project">{project.desc}</p>
            </article>
            <div className="stack-used-contain">
              <h3 className="stack-used">
                {/* Stack I Used */}
                {t("myProjects.stackIused")}
              </h3>
            </div>
            <div className="stacks">
              <div className="stack-contain">
                <span
                  id={`${project.tech_1_name}`}
                  data-tooltip-content={`${project.tech_1_name}`}
                >
                  <img
                    className="icon-stack"
                    src={project.tech_1_icon}
                    alt={project.tech_1_name}
                  />
                </span>
                <span
                  id={`${project.tech_1_name}`}
                  data-tooltip-content={`${project.tech_1_name}`}
                >
                  <img
                    className="icon-stack"
                    src={project.tech_1_icon}
                    alt={project.tech_1_name}
                  />
                </span>
                <span
                  id={`${project.tech_1_name}`}
                  data-tooltip-content={`${project.tech_1_name}`}
                >
                  <img
                    className="icon-stack"
                    src={project.tech_1_icon}
                    alt={project.tech_1_name}
                  />
                </span>
                <span
                  id={`${project.tech_1_name}`}
                  data-tooltip-content={`${project.tech_1_name}`}
                >
                  <img
                    className="icon-stack"
                    src={project.tech_1_icon}
                    alt={project.tech_1_name}
                  />
                </span>
                <span
                  id={`${project.tech_1_name}`}
                  data-tooltip-content={`${project.tech_1_name}`}
                >
                  <img
                    className="icon-stack"
                    src={project.tech_1_icon}
                    alt={project.tech_1_name}
                  />
                </span>
              </div>
              <div className="stack-contain">
                <span
                  id={`${project.tech_1_name}`}
                  data-tooltip-content={`${project.tech_1_name}`}
                >
                  <img
                    className="icon-stack"
                    src={project.tech_1_icon}
                    alt={project.tech_1_name}
                  />
                </span>
                <span
                  id={`${project.tech_1_name}`}
                  data-tooltip-content={`${project.tech_1_name}`}
                >
                  <img
                    className="icon-stack"
                    src={project.tech_1_icon}
                    alt={project.tech_1_name}
                  />
                </span>
                <span
                  id={`${project.tech_1_name}`}
                  data-tooltip-content={`${project.tech_1_name}`}
                >
                  <img
                    className="icon-stack"
                    src={project.tech_1_icon}
                    alt={project.tech_1_name}
                  />
                </span>
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
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default OtherProjects;

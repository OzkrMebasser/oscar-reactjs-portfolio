import React, { Fragment } from "react";
import { GoDesktopDownload } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import "./About.css";

const About = () => {
  const [t] = useTranslation("global");

  return (
    <Fragment>
      <motion.div
        className="about-container"
        initial={{ y: -600 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: "fade" }}
      >
        <div className="about-desc animatedLeft bounceInLeft ">
          <h3 className="titleAbout">{t("about.aboutH1")}</h3>
          <p>{t("about.aboutP")}</p>
          <button className="downloadBtn">
            {" "}
            <a
              className="dwl"
              href={t("about.resume")}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("about.downloadResume")}{" "}
              <div>
                <GoDesktopDownload className="dwlIcon" />
              </div>{" "}
            </a>
          </button>
        </div>
        <div className="flip-card animatedRight bounceInRight">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
              
                className="img"
                src="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FHome%2FperfilPortafolio.png?alt=media&token=45ea57b5-55eb-4bbf-a4ee-8c7353ada542"
                alt="about"
              />
            </div>
            <div className="flip-card-back">
              <p className="greetings"> {t("about.greeting")}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Fragment>
  );
};
export default About;

import { useContext } from "react";
import { useTranslation } from "react-i18next";
import useSound from "../../../context/hook/useSound";
import SoundClick from "../../../Components/Click/interface.mp3";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

import "../../Skills/Skills.css";

function ContextAwareToggle({ children, eventKey, callback }) {
  const playSound = useSound(SoundClick);
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey) && playSound()
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button type="button" className="certsBtn" onClick={decoratedOnClick} onMouseDown={()=>playSound()}> 
      {children}
    </button>
  );
}

const CertPdf = (props) => {
  const playSound = useSound(SoundClick);
  const [t] = useTranslation("global");

  // console.log(props);
  return (
    <>
      {/* {"Cert #1"} */}
      <Card className="cardsCerts">
        <Card.Header>
          <div className="flex-container">
            <div className="flex-item-left">
              <p className="certTitles">
                {t("certificatesInfo.certification")}:
                <span className="certsStrongTitles">{props.certName} </span>
              </p>

              <p className="certTitles ">
              {t("certificatesInfo.institution")}:
                <span className="certsStrongTitles ">{props.institution}</span>
                <span className="certsStrongTitles ">
                  {props.aliasInstitution}
                </span>
              </p>
              <a
                className="websitesLinks"
                href={props.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                 {t("certificatesInfo.website")}:{" "}
                <img
                  src="https://www.svgrepo.com/show/378648/link-out.svg"
                  className="linkExternal"
                  alt="link Externo"
                />
              </a>

              <div className="">
                <a
                  className="websitesLinks "
                  href={props.issuedCertificate}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("certificatesInfo.issuedCertificate")}:{" "}
                  <img
                    src="https://www.svgrepo.com/show/378648/link-out.svg"
                    className="linkExternal"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  className="importantNote "
                  href={props.importantNoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.importantNote}
                  {/* <img
                      src="https://www.svgrepo.com/show/378648/link-out.svg"
                      style={{ height: "25px", width: "25px" }}
                      alt=""
                    /> */}
                </a>
                <p className="certTitles mtSkills">
                {t("certificatesInfo.skills")}: <br />
                </p>

                <div className="skillsEarned ">
                  <div className="skillEarnedTagsLi">
                    {props.skillsEarned_1}
                  </div>
                  <div className="skillEarnedTagsLi ">
                    {props.skillsEarned_2}
                  </div>
                  <div className="skillEarnedTagsLi ">
                    {props.skillsEarned_3}
                  </div>
                  <div className="skillEarnedTagsLi ">
                    {props.skillsEarned_4}
                  </div>
                  <div className="skillEarnedTagsLi ">
                    {props.skillsEarned_5}
                  </div>
                  <div className="skillEarnedTagsLi ">
                    {props.skillsEarned_6}
                  </div>
                  <div className="skillEarnedTagsLi ">
                    {props.skillsEarned_7}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-item-right text-uppercase">
              <div className="logosCerts">
                <img
                  src={props.logoInstitution}
                  className="imgCert"
                  alt="logo institution"
                />
              </div>
              <ContextAwareToggle eventKey={props.eventKey } >
            
                {t("certificatesInfo.seeCertificate")}
                {/* <img className="docsLink" src="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fbooks-svgrepo-com%20(1).svg?alt=media&token=03a80306-1366-4ba7-ad3a-e7368d1ff0c9" alt="docs" /> */}
              </ContextAwareToggle>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey={props.eventKey}>
          <Card.Body>
            {" "}
            <Viewer fileUrl={props.fileUrl} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

export default CertPdf;

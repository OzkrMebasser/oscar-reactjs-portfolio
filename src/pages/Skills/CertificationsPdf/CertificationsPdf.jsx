// import React, { useState, useRef } from "react";

// import ScrollToTop from "../../../Components/GoUpButton/ScrollToTop";
import Accordions from "../../../Components/Accordions/Accordions";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import SkillsEarned from "./SkillsEarned";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

//Pdf files
//Academlo Certificates
import FullStackCert from "./AcademloCerts/Full_Stack_Web_Development_and_Computer_Science.pdf";
import ReactCert from "./AcademloCerts/Front_end_Development_with_React.pdf";
import NodeJsCert from "./AcademloCerts/Back_end_Development_with_NodeJs.pdf";
import PythonCert from "./AcademloCerts/Back_end_Development_with_Python_y_Django.pdf";
import AlgorithmsCert from "./AcademloCerts/Algorithms_and_Data_Structures.pdf";
import Foundations from "./AcademloCerts/Foundations_in_HTML_CSS_and_Javascript.pdf";

//Aprende Certificates
import FronEndAprende from "./AprendeCert/Desarrollador_Front_end_Aprende.pdf";
import CuradorDatos from "./AprendeCert/Curador_de_datos.pdf";

//FreeCodeCamp
import responsiveWebDFCC from "./FreeCodeCamp/responsiveWebFreeCodeCamp.pdf";

//Udemy
import JavaScriptModerno from "./Udemy/Javascript_Guia_Udemy.pdf";
import MktDigital from "./Udemy/Marketing_Digital_Udemy.pdf";

//LinkedIn
import wevDevDesignLinkedIn from "./LinkedIn/Intro_to_Web_Design_and_Development_Linkedin.pdf";

//Grasshopper
import FundamentalsOne from "./Grasshopper/GrasshopperCodingFundamentalsCertificate.pdf";
import FundamentalsTwo from "./Grasshopper/GrasshopperCodingFundamentalsIICertificate.pdf";
import IntroWebPagesGH from "./Grasshopper/GrasshopperIntrotoWebpagesCertificate.pdf";
import CodeEditorGH from "./Grasshopper/GrasshopperUsingaCodeEditorCertificate.pdf";

//EF Set
import EFSETCertificateOM from "./EfSet/EFSETCertificateOM.pdf";

// UV Exaver
import EXAVER from "./UV/EXAVER.pdf";

import "../../Skills/Skills.css";

//Component Cert. Individual
import CertPdf from "./CertPdf";

const CertificationsPdf = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <Accordion defaultActiveKey="0" className="accordion-padding">
        {/* <ScrollToTop /> */}

        <Accordions
          //Academlo....
          totalCerts="6"
          logoSchool="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Flogo_academlo2.png?alt=media&token=c4b55a3f-78b2-4a29-9601-7a9179305b6a"
          content={
            <div>
              <CertPdf
                //Cert #1 Academlo
                certName={t("academloCerts.cert_1.certName")}
                eventKey="1"
                institution="ACADEMLO "
                aliasInstitution={t("academloCerts.aliasInstitution")}
                logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Flogo_academlo2.png?alt=media&token=c4b55a3f-78b2-4a29-9601-7a9179305b6a"
                skillsEarned_1={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_1.skillsEarned_1")}
                  />
                }
                skillsEarned_2={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_1.skillsEarned_2")}
                  />
                }
                skillsEarned_3={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_1.skillsEarned_3")}
                  />
                }
                skillsEarned_4={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_1.skillsEarned_4")}
                  />
                }
                skillsEarned_5={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_1.skillsEarned_5")}
                  />
                }
                skillsEarned_6={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_1.skillsEarned_6")}
                  />
                }
                skillsEarned_7={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_1.skillsEarned_7")}
                  />
                }
                fileUrl={FullStackCert}
                website={"https://www.academlo.com"}
                issuedCertificate={
                  "https://certificates.academlo.com/en/verify/59321101185207"
                }
              />

              <CertPdf
                //Cert #2 Academlo
                certName={t("academloCerts.cert_2.certName")}
                eventKey="2"
                institution="ACADEMLO "
                aliasInstitution={t("academloCerts.aliasInstitution")}
                logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Flogo_academlo2.png?alt=media&token=c4b55a3f-78b2-4a29-9601-7a9179305b6a"
                fileUrl={ReactCert}
                website={"https://www.academlo.com"}
                issuedCertificate={
                  "https://certificates.academlo.com/en/verify/85081735827091"
                }
                skillsEarned_1={<SkillsEarned skillsEarned={"React.js"} />}
                skillsEarned_2={<SkillsEarned skillsEarned={"React Jsx"} />}
                skillsEarned_3={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_2.skillsEarned_3")}
                  />
                }
                skillsEarned_4={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_2.skillsEarned_4")}
                  />
                }
                skillsEarned_5={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_2.skillsEarned_5")}
                  />
                }
                skillsEarned_6={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_2.skillsEarned_6")}
                  />
                }
                skillsEarned_7={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_2.skillsEarned_7")}
                  />
                }
              />

              <CertPdf
                //Cert #3 Academlo
                certName={t("academloCerts.cert_3.certName")}
                eventKey="3"
                institution="ACADEMLO "
                aliasInstitution={t("academloCerts.aliasInstitution")}
                logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Flogo_academlo2.png?alt=media&token=c4b55a3f-78b2-4a29-9601-7a9179305b6a"
                fileUrl={NodeJsCert}
                website={"https://www.academlo.com"}
                issuedCertificate={
                  "https://certificates.academlo.com/en/verify/65762544626703"
                }
                skillsEarned_1={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_3.skillsEarned_1")}
                  />
                }
                skillsEarned_2={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_3.skillsEarned_2")}
                  />
                }
                skillsEarned_3={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_3.skillsEarned_3")}
                  />
                }
                skillsEarned_4={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_3.skillsEarned_4")}
                  />
                }
                skillsEarned_5={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_3.skillsEarned_5")}
                  />
                }
                skillsEarned_6={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_3.skillsEarned_6")}
                  />
                }
              />

              <CertPdf
                //Cert #4 Academlo
                certName={t("academloCerts.cert_4.certName")}
                eventKey="4"
                institution="ACADEMLO "
                aliasInstitution={t("academloCerts.aliasInstitution")}
                logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Flogo_academlo2.png?alt=media&token=c4b55a3f-78b2-4a29-9601-7a9179305b6a"
                skillsEarned_1={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_4.skillsEarned_1")}
                  />
                }
                skillsEarned_2={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_4.skillsEarned_2")}
                  />
                }
                skillsEarned_3={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_4.skillsEarned_3")}
                  />
                }
                skillsEarned_4={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_4.skillsEarned_4")}
                  />
                }
                skillsEarned_5={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_4.skillsEarned_5")}
                  />
                }
                fileUrl={PythonCert}
                website={"https://www.academlo.com"}
                issuedCertificate={
                  "https://certificates.academlo.com/en/verify/21632663952010"
                }
              />

              <CertPdf
                //Cert #5 Academlo
                certName={t("academloCerts.cert_5.certName")}
                eventKey="5"
                institution="ACADEMLO "
                aliasInstitution={t("academloCerts.aliasInstitution")}
                logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Flogo_academlo2.png?alt=media&token=c4b55a3f-78b2-4a29-9601-7a9179305b6a"
                skillsEarned_1={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_5.skillsEarned_1")}
                  />
                }
                skillsEarned_2={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_5.skillsEarned_2")}
                  />
                }
                skillsEarned_3={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_5.skillsEarned_3")}
                  />
                }
                fileUrl={AlgorithmsCert}
                website={"https://www.academlo.com"}
                issuedCertificate={
                  "https://certificates.academlo.com/en/verify/20275035180098"
                }
              />

              <CertPdf
                //Cert #6 Academlo
                certName={t("academloCerts.cert_6.certName")}
                eventKey="6"
                institution="ACADEMLO "
                aliasInstitution={t("academloCerts.aliasInstitution")}
                logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Flogo_academlo2.png?alt=media&token=c4b55a3f-78b2-4a29-9601-7a9179305b6a"
                skillsEarned_1={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_6.skillsEarned_1")}
                  />
                }
                skillsEarned_2={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_6.skillsEarned_2")}
                  />
                }
                skillsEarned_3={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_6.skillsEarned_3")}
                  />
                }
                skillsEarned_4={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_6.skillsEarned_4")}
                  />
                }
                skillsEarned_5={
                  <SkillsEarned
                    skillsEarned={t("academloCerts.cert_6.skillsEarned_5")}
                  />
                }
                fileUrl={Foundations}
                website={"https://www.academlo.com"}
                issuedCertificate={
                  "https://certificates.academlo.com/en/verify/36359798103867"
                }
              />
            </div>
          }
        />

        <Accordions
          //Capacítate para el empleo ....
          totalCerts="2"
          logoSchool="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Fcapacitate.png?alt=media&token=fe50d261-469c-4120-8ce0-be3ab99f8924"
          content={
            <div>
              <CertPdf
                //Cert #7 Capacítate
                // certName="Desarrollador Front-end"
                certName={t("capacitateCerts.cert_1.certName")}
                eventKey="7"
                institution={t("capacitateCerts.institution")}
                aliasInstitution={t("capacitateCerts.aliasInstitution")}
                logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Fcapacitate.png?alt=media&token=fe50d261-469c-4120-8ce0-be3ab99f8924"
                skillsEarned_1={
                  <SkillsEarned
                    skillsEarned={t("capacitateCerts.cert_1.skillsEarned_1")}
                  />
                }
                skillsEarned_2={
                  <SkillsEarned
                    skillsEarned={t("capacitateCerts.cert_1.skillsEarned_2")}
                  />
                }
                skillsEarned_3={
                  <SkillsEarned
                    skillsEarned={t("capacitateCerts.cert_1.skillsEarned_3")}
                  />
                }
                skillsEarned_4={
                  <SkillsEarned
                    skillsEarned={t("capacitateCerts.cert_1.skillsEarned_4")}
                  />
                }
                skillsEarned_5={
                  <SkillsEarned
                    skillsEarned={t("capacitateCerts.cert_1.skillsEarned_5")}
                  />
                }
                fileUrl={FronEndAprende}
                website={"https://capacitateparaelempleo.org/"}
                issuedCertificate={
                  "https://capacitateparaelempleo.org/verifica/4369b30e-5526-467e-ab50-091305c22f20/d071dd79-724b-4817-a212-8f78560fadfa"
                }
              />

              <CertPdf
                //Cert #8 Capacítate
                certName={t("capacitateCerts.cert_2.certName")}
                eventKey="8"
                institution={t("capacitateCerts.institution")}
                aliasInstitution={t("capacitateCerts.aliasInstitution")}
                logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Fcapacitate.png?alt=media&token=fe50d261-469c-4120-8ce0-be3ab99f8924"
                skillsEarned_1={
                  <SkillsEarned
                    skillsEarned={t("capacitateCerts.cert_2.skillsEarned_1")}
                  />
                }
                skillsEarned_2={
                  <SkillsEarned
                    skillsEarned={t("capacitateCerts.cert_1.skillsEarned_2")}
                  />
                }
                skillsEarned_3={
                  <SkillsEarned
                    skillsEarned={t("capacitateCerts.cert_2.skillsEarned_3")}
                  />
                }
                skillsEarned_4={
                  <SkillsEarned
                    skillsEarned={t("capacitateCerts.cert_2.skillsEarned_4")}
                  />
                }
                skillsEarned_5={
                  <SkillsEarned
                    skillsEarned={t("capacitateCerts.cert_2.skillsEarned_5")}
                  />
                }
                fileUrl={CuradorDatos}
                website={"https://capacitateparaelempleo.org/"}
                issuedCertificate={
                  "https://capacitateparaelempleo.org/verifica/4369b30e-5526-467e-ab50-091305c22f20/24e65981-a75f-4ffa-81d5-45b91044ce3a"
                }
              />
            </div>
          }
        />
        <Accordions
          //FreeCodeCamp ....
          totalCerts="1"
          logoSchool="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2FFreeCodeCamp_logo.png?alt=media&token=d9b83ebe-8cb2-42f4-801f-cccc64202662"
          content={
            <div>
              <CertPdf
                //Cert #9 FreeCodeCamp
                certName={t("freeCodeCampCerts.cert_1.certName")}
                eventKey="9"
                institution={t("freeCodeCampCerts.institution")}
                aliasInstitution={t("freeCodeCampCerts.aliasInstitution")}
                logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2FFreeCodeCamp_logo.png?alt=media&token=d9b83ebe-8cb2-42f4-801f-cccc64202662"
                skillsEarned_1={
                  <SkillsEarned
                    skillsEarned={t("freeCodeCampCerts.cert_1.skillsEarned_1")}
                  />
                }
                skillsEarned_2={
                  <SkillsEarned
                    skillsEarned={t("freeCodeCampCerts.cert_1.skillsEarned_2")}
                  />
                }
                skillsEarned_3={
                  <SkillsEarned
                    skillsEarned={t("freeCodeCampCerts.cert_1.skillsEarned_3")}
                  />
                }
                skillsEarned_4={
                  <SkillsEarned
                    skillsEarned={t("freeCodeCampCerts.cert_1.skillsEarned_4")}
                  />
                }
                fileUrl={responsiveWebDFCC}
                website={"https://www.freecodecamp.org/"}
                issuedCertificate={
                  "https://www.freecodecamp.org/certification/oscarmebasser/responsive-web-design"
                }
              />
            </div>
          }
        />

        <Accordions
          //Udemy ....
          totalCerts="2"
          logoSchool="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2FUdemy_logo2.png?alt=media&token=51d33619-c738-4fea-b699-a33a6c63320d"
          content={
            <div>
              <CertPdf
                //Cert #10 Udemy
                certName={t("udemyCerts.cert_1.certName")}
                eventKey="10"
                institution={t("udemyCerts.institution")}
                aliasInstitution={t("udemyCerts.aliasInstitution")}
                logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2FUdemy_logo2.png?alt=media&token=51d33619-c738-4fea-b699-a33a6c63320d"
                skillsEarned_1={
                  <SkillsEarned
                    skillsEarned={t("udemyCerts.cert_1.skillsEarned_1")}
                  />
                }
                skillsEarned_2={
                  <SkillsEarned
                    skillsEarned={t("udemyCerts.cert_1.skillsEarned_2")}
                  />
                }
                skillsEarned_3={
                  <SkillsEarned
                    skillsEarned={t("udemyCerts.cert_1.skillsEarned_3")}
                  />
                }
                skillsEarned_4={
                  <SkillsEarned
                    skillsEarned={t("udemyCerts.cert_1.skillsEarned_4")}
                  />
                }
                skillsEarned_5={
                  <SkillsEarned
                    skillsEarned={t("udemyCerts.cert_1.skillsEarned_5")}
                  />
                }
                skillsEarned_6={
                  <SkillsEarned
                    skillsEarned={t("udemyCerts.cert_1.skillsEarned_6")}
                  />
                }
                fileUrl={JavaScriptModerno}
                website={"https://www.udemy.com/"}
                issuedCertificate={
                  "https://www.udemy.com/certificate/UC-723a5325-b7b3-4728-8f85-4ebfe0b9054c/"
                }
              />
              <CertPdf
                //Cert #11 Udemy
                certName={t("udemyCerts.cert_2.certName")}
                eventKey="11"
                institution={t("udemyCerts.institution")}
                aliasInstitution={t("udemyCerts.aliasInstitution")}
                logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2FUdemy_logo2.png?alt=media&token=51d33619-c738-4fea-b699-a33a6c63320d"
                skillsEarned_1={
                  <SkillsEarned
                    skillsEarned={t("udemyCerts.cert_2.skillsEarned_1")}
                  />
                }
                skillsEarned_2={
                  <SkillsEarned
                    skillsEarned={t("udemyCerts.cert_2.skillsEarned_2")}
                  />
                }
                skillsEarned_3={
                  <SkillsEarned
                    skillsEarned={t("udemyCerts.cert_2.skillsEarned_3")}
                  />
                }
                skillsEarned_4={
                  <SkillsEarned
                    skillsEarned={t("udemyCerts.cert_2.skillsEarned_4")}
                  />
                }
                skillsEarned_5={
                  <SkillsEarned
                    skillsEarned={t("udemyCerts.cert_2.skillsEarned_5")}
                  />
                }
                skillsEarned_6={
                  <SkillsEarned
                    skillsEarned={t("udemyCerts.cert_2.skillsEarned_6")}
                  />
                }
                skillsEarned_7={
                  <SkillsEarned
                    skillsEarned={t("udemyCerts.cert_2.skillsEarned_7")}
                  />
                }
                fileUrl={MktDigital}
                website={"https://www.udemy.com/"}
                issuedCertificate={
                  "https://www.udemy.com/certificate/UC-f05dc718-f04a-41f1-8e04-78a9ba542db0/"
                }
              />
            </div>
          }
        />
        <Accordions
          //LinkedIn ....
          totalCerts="1"
          logoSchool="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2FlinkedInLearnign3.png?alt=media&token=dfafb3a7-e31b-429a-8e92-c21d96b0b5c8"
          content={
            <div>
              <CertPdf
                //Cert #12 LinkedIn
                certName={t("linkedInCerts.cert_1.certName")}
                eventKey="12"
                institution={t("linkedInCerts.institution")}
                aliasInstitution={t("linkedInCerts.aliasInstitution")}
                logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2FlinkedInLearnign3.png?alt=media&token=dfafb3a7-e31b-429a-8e92-c21d96b0b5c8"
                skillsEarned_1={
                  <SkillsEarned
                    skillsEarned={t("linkedInCerts.cert_1.skillsEarned_1")}
                  />
                }
                skillsEarned_2={
                  <SkillsEarned
                    skillsEarned={t("linkedInCerts.cert_1.skillsEarned_2")}
                  />
                }
                skillsEarned_3={
                  <SkillsEarned
                    skillsEarned={t("linkedInCerts.cert_1.skillsEarned_3")}
                  />
                }
                skillsEarned_4={
                  <SkillsEarned
                    skillsEarned={t("linkedInCerts.cert_1.skillsEarned_4")}
                  />
                }
                skillsEarned_5={
                  <SkillsEarned
                    skillsEarned={t("linkedInCerts.cert_1.skillsEarned_5")}
                  />
                }
                fileUrl={wevDevDesignLinkedIn}
                website={"https://www.linkedin.com/learning/"}
                issuedCertificate={
                  "https://www.linkedin.com/learning-login/share?account=74417548&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fcollections%2F7028871335065882624%3Ftrk%3Dshare_collection_url%26shareId%3DDdX90sRgTzCdDzx5esR3%252Fw%253D%253D"
                }
              />
            </div>
          }
        />

        <Accordions
          //Grasshopper ....
          totalCerts="4"
          logoSchool="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2FgrassHopper.jpg?alt=media&token=ad4f2959-4b10-4b04-8c23-d03bc03d8482"
          content={
            <div>
              <CertPdf
                //Cert #13 Grasshopper
                certName={t("grassHopperCerts.cert_1.certName")}
                eventKey="13"
                institution={t("grassHopperCerts.institution")}
                aliasInstitution={t("grassHopperCerts.aliasInstitution")}
                logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2FgrassHopper.jpg?alt=media&token=ad4f2959-4b10-4b04-8c23-d03bc03d8482"
                skillsEarned_1={
                  <SkillsEarned
                    skillsEarned={t("grassHopperCerts.cert_1.skillsEarned_1")}
                  />
                }
                skillsEarned_2={
                  <SkillsEarned
                    skillsEarned={t("grassHopperCerts.cert_1.skillsEarned_2")}
                  />
                }
                skillsEarned_3={
                  <SkillsEarned
                    skillsEarned={t("grassHopperCerts.cert_1.skillsEarned_3")}
                  />
                }
                fileUrl={FundamentalsOne}
                website={
                  "https://play.google.com/store/apps/details?id=com.area120.grasshopper&hl=en_CA&gl=CN"
                }
                // issuedCertificate={
                //   ""
                // }
                importantNote={t("grassHopperCerts.importantNote")}
                importantNoteUrl="https://en.wikipedia.org/wiki/Grasshopper_(mobile_app)"
              />
              <CertPdf
                //Cert #14 Grasshopper
                certName={t("grassHopperCerts.cert_2.certName")}
                eventKey="14"
                institution={t("grassHopperCerts.institution")}
                aliasInstitution={t("grassHopperCerts.aliasInstitution")}
                logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2FgrassHopper.jpg?alt=media&token=ad4f2959-4b10-4b04-8c23-d03bc03d8482"
                skillsEarned_1={
                  <SkillsEarned
                    skillsEarned={t("grassHopperCerts.cert_2.skillsEarned_1")}
                  />
                }
                skillsEarned_2={
                  <SkillsEarned
                    skillsEarned={t("grassHopperCerts.cert_2.skillsEarned_2")}
                  />
                }
                skillsEarned_3={
                  <SkillsEarned
                    skillsEarned={t("grassHopperCerts.cert_2.skillsEarned_3")}
                  />
                }
                fileUrl={FundamentalsTwo}
                website={
                  "https://play.google.com/store/apps/details?id=com.area120.grasshopper&hl=en_CA&gl=CN"
                }
                // issuedCertificate={
                //   ""
                // }
                importantNote={t("grassHopperCerts.importantNote")}
                importantNoteUrl="https://en.wikipedia.org/wiki/Grasshopper_(mobile_app)"
              />

              <CertPdf
                //Cert #15 Grasshopper
                certName={t("grassHopperCerts.cert_3.certName")}
                eventKey="15"
                institution={t("grassHopperCerts.institution")}
                aliasInstitution={t("grassHopperCerts.aliasInstitution")}
                logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2FgrassHopper.jpg?alt=media&token=ad4f2959-4b10-4b04-8c23-d03bc03d8482"
                skillsEarned_1={
                  <SkillsEarned
                    skillsEarned={t("grassHopperCerts.cert_3.skillsEarned_1")}
                  />
                }
                skillsEarned_2={
                  <SkillsEarned
                    skillsEarned={t("grassHopperCerts.cert_3.skillsEarned_2")}
                  />
                }
                skillsEarned_3={
                  <SkillsEarned
                    skillsEarned={t("grassHopperCerts.cert_3.skillsEarned_3")}
                  />
                }
                skillsEarned_4={
                  <SkillsEarned
                    skillsEarned={t("grassHopperCerts.cert_3.skillsEarned_4")}
                  />
                }
                skillsEarned_5={
                  <SkillsEarned
                    skillsEarned={t("grassHopperCerts.cert_3.skillsEarned_5")}
                  />
                }
                fileUrl={IntroWebPagesGH}
                website={
                  "https://play.google.com/store/apps/details?id=com.area120.grasshopper&hl=en_CA&gl=CN"
                }
                // issuedCertificate={
                //   ""
                // }
                importantNote={t("grassHopperCerts.importantNote")}
                importantNoteUrl="https://en.wikipedia.org/wiki/Grasshopper_(mobile_app)"
              />

              <CertPdf
                //Cert #16 Grasshopper
                certName={t("grassHopperCerts.cert_4.certName")}
                eventKey="16"
                institution={t("grassHopperCerts.institution")}
                aliasInstitution={t("grassHopperCerts.aliasInstitution")}
                logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2FgrassHopper.jpg?alt=media&token=ad4f2959-4b10-4b04-8c23-d03bc03d8482"
                skillsEarned_1={
                  <SkillsEarned
                    skillsEarned={t("grassHopperCerts.cert_4.skillsEarned_1")}
                  />
                }
                skillsEarned_2={
                  <SkillsEarned
                    skillsEarned={t("grassHopperCerts.cert_4.skillsEarned_2")}
                  />
                }
                skillsEarned_3={
                  <SkillsEarned
                    skillsEarned={t("grassHopperCerts.cert_4.skillsEarned_3")}
                  />
                }
                skillsEarned_4={
                  <SkillsEarned
                    skillsEarned={t("grassHopperCerts.cert_4.skillsEarned_4")}
                  />
                }
                fileUrl={CodeEditorGH}
                website={
                  "https://play.google.com/store/apps/details?id=com.area120.grasshopper&hl=en_CA&gl=CN"
                }
                // issuedCertificate={
                //   ""
                // }
                importantNote={t("grassHopperCerts.importantNote")}
                importantNoteUrl="https://en.wikipedia.org/wiki/Grasshopper_(mobile_app)"
              />
            </div>
          }
        />
        <Accordions
          //EF SET  ....
          totalCerts="1"
          logoSchool="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Fefset-logo.png?alt=media&token=26d9cb2c-dc79-4e66-81c5-feb0bdb4de7f"
          content={
            <CertPdf
              //Cert #17 EF Set English Test
              certName={t("EFenglishTestCerts.cert_1.certName")}
              eventKey="17"
              institution={t("EFenglishTestCerts.institution")}
              aliasInstitution={t("EFenglishTestCerts.aliasInstitution")}
              logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Fefset-logo.png?alt=media&token=26d9cb2c-dc79-4e66-81c5-feb0bdb4de7f"
              skillsEarned_1={
                <SkillsEarned
                  skillsEarned={t("EFenglishTestCerts.cert_1.skillsEarned_1")}
                />
              }
              fileUrl={EFSETCertificateOM}
              website={"https://www.efset.org"}
              issuedCertificate={"https://www.efset.org/cert/cLp27r"}
            />
          }
        />

        <Accordions
          //Universidad Veracruz  ....
          totalCerts="1"
          logoSchool="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2FlogouvUV.JPG?alt=media&token=ed36f0c7-f0ac-4c0a-8f7a-71ffc1918080"
          content={
            <CertPdf
              //Cert #18 Universidad Veracruz
              certName={t("UVCerts.cert_1.certName")}
              eventKey="18"
              institution={t("UVCerts.institution")}
              aliasInstitution={t("UVCerts.aliasInstitution")}
              logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2FlogouvUV.JPG?alt=media&token=ed36f0c7-f0ac-4c0a-8f7a-71ffc1918080"
              fileUrl={EXAVER}
              website={"https://www.uv.mx/idiomas/certificaciones/exaver/"}
              issuedCertificate={"https://www.exaver.com/verify/319A-50107328"}
              skillsEarned_1={
                <SkillsEarned skillsEarned={t("UVCerts.cert_1.skillsEarned_1")} />
              }
            />
          }
        />
      </Accordion>
    </>
  );
};

export default CertificationsPdf;

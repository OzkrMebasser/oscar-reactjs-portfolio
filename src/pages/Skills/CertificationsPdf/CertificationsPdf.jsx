import React, { useState, useRef } from "react";
import Accordion from "react-bootstrap/Accordion";
import ScrollToTop from "../../../Components/GoUpButton/ScrollToTop";
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
import responsiveWebDFCC from "./FreeCodeCamp/responsiveWebFreeCodeCamp.pdf"

import "../../Skills/Skills.css";
//Component Cert. Individual
import CertPdf from "./CertPdf";

const CertificationsPdf = () => {


  
  return (
    <>
      <Accordion defaultActiveKey="0" className="accordion-padding">
        
        <ScrollToTop />

        {/* {"Cert #1 Academlo"} */}
        <h2 className="subTitles">
          ACADEMLO School of Technology and Computer Science
        </h2>
        <CertPdf
          certName="Full Stack Web Development and Computer Science"
          eventKey="1"
          institution="ACADEMLO "
          aliasInstitution="School of Technology and Computer Science"
          logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Flogo_academlo2.png?alt=media&token=c4b55a3f-78b2-4a29-9601-7a9179305b6a"
          skillsEarned_1={
            <SkillsEarned skillsEarned={"Software Engineering"} />
          }
          skillsEarned_2={
            <SkillsEarned skillsEarned={"Software Development"} />
          }
          skillsEarned_3={
            <SkillsEarned skillsEarned={"Object-Oriented Programming (OOP)"} />
          }
          skillsEarned_4={<SkillsEarned skillsEarned={"Node.js"} />}
          skillsEarned_5={
            <SkillsEarned skillsEarned={"JavaScript Frameworks"} />
          }
          skillsEarned_6={
            <SkillsEarned skillsEarned={"Full Stack Software Engineering"} />
          }
          skillsEarned_7={<SkillsEarned skillsEarned={"Computer Science"} />}
          fileUrl={FullStackCert}
          website={"https://www.academlo.com"}
          issuedCertificate={
            "https://certificates.academlo.com/en/verify/59321101185207"
          }
        />
        {/* {"Cert #2 Academlo"} */}
        <CertPdf
          certName="Front-end Development with React"
          eventKey="2"
          institution="ACADEMLO "
          aliasInstitution="School of Technology and Computer Science"
          logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Flogo_academlo2.png?alt=media&token=c4b55a3f-78b2-4a29-9601-7a9179305b6a"
          fileUrl={ReactCert}
          website={"https://www.academlo.com"}
          issuedCertificate={
            "https://certificates.academlo.com/en/verify/85081735827091"
          }
          skillsEarned_1={<SkillsEarned skillsEarned={"React.js"} />}
          skillsEarned_2={<SkillsEarned skillsEarned={"React Jsx"} />}
          skillsEarned_3={
            <SkillsEarned skillsEarned={"Object-Oriented JavaScript"} />
          }
          skillsEarned_4={
            <SkillsEarned skillsEarned={"JavaScript Frameworks"} />
          }
          skillsEarned_5={
            <SkillsEarned skillsEarned={"JavaScript (Programming Language)"} />
          }
          skillsEarned_6={
            <SkillsEarned skillsEarned={"Full Stack Software Engineering"} />
          }
          skillsEarned_7={<SkillsEarned skillsEarned={"Front End Design"} />}
        />
        {/* {"Cert #3 Academlo"} */}
        <CertPdf
          certName="Back-End Development with Node.js"
          eventKey="3"
          institution="ACADEMLO "
          aliasInstitution="School of Technology and Computer Science"
          logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Flogo_academlo2.png?alt=media&token=c4b55a3f-78b2-4a29-9601-7a9179305b6a"
          fileUrl={NodeJsCert}
          website={"https://www.academlo.com"}
          issuedCertificate={
            "https://certificates.academlo.com/en/verify/65762544626703"
          }
          skillsEarned_1={<SkillsEarned skillsEarned={"Node.js"} />}
          skillsEarned_2={
            <SkillsEarned skillsEarned={"JavaScript (Programming Language)"} />
          }
          skillsEarned_3={
            <SkillsEarned skillsEarned={"Back End (Software Engineering)"} />
          }
        />
        {/* {"Cert #4 Academlo"} */}
        <CertPdf
          certName="Back-End Development with Python & Django"
          eventKey="4"
          institution="ACADEMLO "
          aliasInstitution="School of Technology and Computer Science"
          logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Flogo_academlo2.png?alt=media&token=c4b55a3f-78b2-4a29-9601-7a9179305b6a"
          skillsEarned_1={<SkillsEarned skillsEarned={"Server-Side"} />}
          skillsEarned_2={<SkillsEarned skillsEarned={"RESTful API"} />}
          skillsEarned_3={
            <SkillsEarned skillsEarned={"Python (Programming Language)"} />
          }
          skillsEarned_4={
            <SkillsEarned skillsEarned={"Django (Web Framework)"} />
          }
          skillsEarned_5={
            <SkillsEarned skillsEarned={"Back End (Software Engineering)"} />
          }
          fileUrl={PythonCert}
          website={"https://www.academlo.com"}
          issuedCertificate={
            "https://certificates.academlo.com/en/verify/21632663952010"
          }
        />
        {/* {"Cert #5 Academlo"} */}
        <CertPdf
          certName="Algorithms and Data Structures"
          eventKey="5"
          institution="ACADEMLO "
          aliasInstitution="School of Technology and Computer Science"
          logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Flogo_academlo2.png?alt=media&token=c4b55a3f-78b2-4a29-9601-7a9179305b6a"
          skillsEarned_1={<SkillsEarned skillsEarned={"Problem Solving"} />}
          skillsEarned_2={<SkillsEarned skillsEarned={"Data Structures"} />}
          skillsEarned_3={<SkillsEarned skillsEarned={"Algorithms"} />}
          fileUrl={AlgorithmsCert}
          website={"https://www.academlo.com"}
          issuedCertificate={
            "https://certificates.academlo.com/en/verify/20275035180098"
          }
        />
        {/* {"Cert #6 Academlo"} */}
        <CertPdf
          certName="Foundations in HTML,CSS, and Javascript"
          eventKey="6"
          institution="ACADEMLO "
          aliasInstitution="School of Technology and Computer Science"
          logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Flogo_academlo2.png?alt=media&token=c4b55a3f-78b2-4a29-9601-7a9179305b6a"
          skillsEarned_1={<SkillsEarned skillsEarned={"Web Development"} />}
          skillsEarned_2={<SkillsEarned skillsEarned={"Web Design"} />}
          skillsEarned_3={
            <SkillsEarned skillsEarned={"JavaScript (Programming Language)"} />
          }
          skillsEarned_4={
            <SkillsEarned skillsEarned={"HyperText Markup Language (HTML)"} />
          }
          skillsEarned_5={
            <SkillsEarned skillsEarned={"Cascading Style Sheets (CSS)"} />
          }
          fileUrl={Foundations}
          website={"https://www.academlo.com"}
          issuedCertificate={
            "https://certificates.academlo.com/en/verify/36359798103867"
          }
        />
        <h2 className="subTitles">Aprende</h2>

        {/* {"Cert #7 Capacítate..."} */}
        <CertPdf
          certName="Desarrollador Front-end"
          eventKey="7"
          institution="Capacítate para el empleo"
          aliasInstitution="Fundación Carlos Slim"
          logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Fcapacitate.png?alt=media&token=fe50d261-469c-4120-8ce0-be3ab99f8924"
          skillsEarned_1={<SkillsEarned skillsEarned={"Web Development"} />}
          skillsEarned_2={<SkillsEarned skillsEarned={"Web Design"} />}
          skillsEarned_3={
            <SkillsEarned skillsEarned={"JavaScript (Programming Language)"} />
          }
          skillsEarned_4={
            <SkillsEarned skillsEarned={"HyperText Markup Language (HTML)"} />
          }
          skillsEarned_5={
            <SkillsEarned skillsEarned={"Cascading Style Sheets (CSS)"} />
          }
          fileUrl={FronEndAprende}
          website={"https://capacitateparaelempleo.org/"}
          issuedCertificate={
            "https://capacitateparaelempleo.org/verifica/4369b30e-5526-467e-ab50-091305c22f20/d071dd79-724b-4817-a212-8f78560fadfa"
          }
        />

        {/* {"Cert #8 Capacítate..."} */}
        <CertPdf
          certName="Curador de Datos"
          eventKey="8"
          institution="Capacítate para el empleo"
          aliasInstitution="Fundación Carlos Slim"
          logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Fcapacitate.png?alt=media&token=fe50d261-469c-4120-8ce0-be3ab99f8924"
          skillsEarned_1={<SkillsEarned skillsEarned={"SQL Database creation"} />}
          skillsEarned_2={<SkillsEarned skillsEarned={"Data Management"} />}
          skillsEarned_3={
            <SkillsEarned skillsEarned={"Maintain Databases"} />
          }
          skillsEarned_4={
            <SkillsEarned skillsEarned={"Ensure Integrity of Data"} />
          }
          skillsEarned_5={
            <SkillsEarned skillsEarned={"Implement data management policies and procedures"} />
          }
          fileUrl={CuradorDatos}
          website={"https://capacitateparaelempleo.org/"}
          issuedCertificate={
            "https://capacitateparaelempleo.org/verifica/4369b30e-5526-467e-ab50-091305c22f20/24e65981-a75f-4ffa-81d5-45b91044ce3a"
          }
        />
        <h2 className="subTitles">FreeCodeCamp</h2>
        {/* {"Cert #9 FreeCodeCamp..."} */}
        <CertPdf
          certName="Responsive Web Design"
          eventKey="9"
          institution="freeCodeCamp.org"
          aliasInstitution="Non-profit organization for learning Software Development "
          logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2FFreeCodeCamp_logo.png?alt=media&token=d9b83ebe-8cb2-42f4-801f-cccc64202662"
          skillsEarned_1={<SkillsEarned skillsEarned={"HyperText Markup Language (HTML)"} />}
          skillsEarned_2={<SkillsEarned skillsEarned={"Cascading Style Sheets (CSS)"} />}
          skillsEarned_3={
            <SkillsEarned skillsEarned={"Web Development"} />
          }
          skillsEarned_4={
            <SkillsEarned skillsEarned={"Web Design"} />
          }
    
          fileUrl={responsiveWebDFCC}
          website={"https://www.freecodecamp.org/"}
          issuedCertificate={
            "https://www.freecodecamp.org/certification/oscarmebasser/responsive-web-design"
          }
        />
      </Accordion>
    </>
  );
};

export default CertificationsPdf;

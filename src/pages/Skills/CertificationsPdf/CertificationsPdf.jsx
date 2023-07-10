import React, { useState, useRef } from 'react';
import Accordion from "react-bootstrap/Accordion";
import ScrollToTop from "../../../Components/GoUpButton/ScrollToTop";
import SkillsEarned from "./SkillsEarned";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

//Pdf files
import FullStackCert from "./AcademloCerts/Full_Stack_Web_Development_and_Computer_Science.pdf";
import ReactCert from "./AcademloCerts/Front_end_Development_with_React.pdf";
import NodeJsCert from "./AcademloCerts/Back_end_Development_with_NodeJs.pdf";
import PythonCert from "./AcademloCerts/Back_end_Development_with_Python_y_Django.pdf";
import AlgorithmsCert from "./AcademloCerts/Algorithms_and_Data_Structures.pdf";
import Foundations from "./AcademloCerts/Foundations_in_HTML_CSS_and_Javascript.pdf";

import "../../Skills/Skills.css";
//Component Cert. Individual
import CertPdf from "./CertPdf";

const CertificationsPdf = () => {


  return (
    <>
      <Accordion defaultActiveKey="0" className="accordion-padding">
      <ScrollToTop/>
    

                {/* {"Cert #1"} */}
      
                  <CertPdf
          certName="Full Stack Web Development and Computer Science"
          eventKey="1"
          institution="ACADEMLO "
          aliasInstitution="School of Technology and Computer Science"
          logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Flogo_academlo2.png?alt=media&token=c4b55a3f-78b2-4a29-9601-7a9179305b6a"
          skillsEarned_1={<SkillsEarned skillsEarned={"Software Engineering"} />}
          skillsEarned_2={<SkillsEarned skillsEarned={"Software Development"} />}
          skillsEarned_3={<SkillsEarned skillsEarned={"Object-Oriented Programming (OOP)"} />}
          skillsEarned_4={<SkillsEarned skillsEarned={"Node.js"} />}
          skillsEarned_5={<SkillsEarned skillsEarned={"JavaScript Frameworks"} />}
          skillsEarned_6={<SkillsEarned skillsEarned={"Full Stack Software Engineering"}/>}
          skillsEarned_7={<SkillsEarned skillsEarned={"Computer Science"}/>}
          fileUrl={FullStackCert}
          website={"https://www.academlo.com"}
          issuedCertificate={
            "https://certificates.academlo.com/en/verify/59321101185207"
          }
        />
        {/* {"Cert #2"} */}
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
          skillsEarned_3={<SkillsEarned skillsEarned={"Object-Oriented JavaScript"} />}
          skillsEarned_4={<SkillsEarned skillsEarned={"JavaScript Frameworks"} />}
          skillsEarned_5={<SkillsEarned skillsEarned={"JavaScript (Programming Language)"} />}
          skillsEarned_6={<SkillsEarned skillsEarned={"Full Stack Software Engineering"}/>}
          skillsEarned_7={<SkillsEarned skillsEarned={"Front End Design"}/>}
        />

        {/* {"Cert #3"} */}
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
          skillsEarned_2={<SkillsEarned skillsEarned={"JavaScript (Programming Language)"}/>}
          skillsEarned_3={<SkillsEarned skillsEarned={"Back End (Software Engineering)"} />}

        />
        {/* {"Cert #4"} */}

        <CertPdf
          certName="Back-End Development with Python & Django"
          eventKey="4"
          institution="ACADEMLO "
          aliasInstitution="School of Technology and Computer Science"
          logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Flogo_academlo2.png?alt=media&token=c4b55a3f-78b2-4a29-9601-7a9179305b6a"
          skillsEarned_1={<SkillsEarned skillsEarned={"Server-Side"} />}
          skillsEarned_2={<SkillsEarned skillsEarned={"RESTful API"} />}
          skillsEarned_3={<SkillsEarned skillsEarned={"Python (Programming Language)"} />}
          skillsEarned_4={<SkillsEarned skillsEarned={"Django (Web Framework)"} />}
          skillsEarned_5={<SkillsEarned skillsEarned={"Back End (Software Engineering)"} />}
          fileUrl={PythonCert}
          website={"https://www.academlo.com"}
          issuedCertificate={
            "https://certificates.academlo.com/en/verify/21632663952010"
          }
        />
        {/* {"Cert #5"} */}
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
        {/* {"Cert #6"} */}
        <CertPdf 
        certName="Foundations in HTML,CSS, and Javascript"
        eventKey="6"
        institution="ACADEMLO "
        aliasInstitution="School of Technology and Computer Science"
        logoInstitution="https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FSkills%2FlogosInstitutions%2Flogo_academlo2.png?alt=media&token=c4b55a3f-78b2-4a29-9601-7a9179305b6a"
        skillsEarned_1={<SkillsEarned skillsEarned={"Web Development"} />}
        skillsEarned_2={<SkillsEarned skillsEarned={"Web Design"} />}
        skillsEarned_3={<SkillsEarned skillsEarned={"JavaScript (Programming Language)"} />}
        skillsEarned_4={<SkillsEarned skillsEarned={"HyperText Markup Language (HTML)"}/>}
        skillsEarned_5={<SkillsEarned skillsEarned={"Cascading Style Sheets (CSS)"}/>}
        fileUrl={Foundations}
        website={"https://www.academlo.com"}
        issuedCertificate={
          "https://certificates.academlo.com/en/verify/36359798103867"
        }
        />
        {/* {"Cert #7"} */}


              </Accordion>
    </>
  );
};

export default CertificationsPdf;

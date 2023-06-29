import React, { useState, useRef } from 'react';
import Accordion from "react-bootstrap/Accordion";
import ScrollToTop from "../../../Components/GoUpButton/ScrollToTop";
import SkillsEarned from "./SkillsEarned";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

//Pdf files
import FullStackCert from "./AcademloCerts/Full_Stack_Web_Development_and_Computer_Science.pdf";
import ReactCert from "./AcademloCerts/Front_end_Development_with_React.pdf";

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

        {/* {"Cert #4"} */}
        {/* {"Cert #5"} */}
        {/* {"Cert #6"} */}
        {/* {"Cert #7"} */}
      </Accordion>
    </>
  );
};

export default CertificationsPdf;

// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import useSound from "../../context/hook/useSound";
// import SoundClick from "../../Components/Click/interface.mp3";
// import ModalItem from "./ModalItem";
// import CheckBox from "./CheckBox";

// import ItemsCarousel from "react-items-carousel";
// import { projects } from "../../Api/projects";
// // import { ImUndo2, ImRedo2 } from "react-icons/im";
// import { MdOutlineDoubleArrow } from "react-icons/md";

// import "./Projects-min.css";

// const Projects = ({ props }) => {
//   const [t] = useTranslation("global");
//   const playSound = useSound(SoundClick);
//   const [activeItemIndex, setActiveItemIndex] = useState(0);

//   const chevronWidth = 200;

//   return (
//     <div className="bodyContainer">
//       <div
//         className="carouselContainer chevronWidth"
//         // style={{ padding: `0 ${chevronWidth}px` }}
//       >
//         <ItemsCarousel
//           infiniteLoop={true}
//           requestToChangeActive={setActiveItemIndex}
//           activeItemIndex={activeItemIndex}
//           numberOfCards={1}
//           gutter={8}
//           leftChevron={
//             <span className="arrowIconLeft">
//               <MdOutlineDoubleArrow className="voltearALaIzquierda" />
//             </span>
//           }
//           rightChevron={
//             <span className="arrowIconRight">
//               <MdOutlineDoubleArrow />
//             </span>
//           }
//           outsideChevron
//           chevronWidth={chevronWidth}
//           showSlither={false}
//         >
//           {projects.map((project, index) => (
//             <div className=" text-center " key={index}>
//               <p className="projectName">
//                 {index + 1} - {t(`${project.project_name}`)}{" "}
//               </p>

//               <a href={project.href} rel="noreferrer" target="_blank">
//                 <img
//                   className="inner-img"
//                   src={project.src}
//                   alt={project.alt}
//                 />
//               </a>

//               <br />
//               <br />

//               <ModalItem {...project} />
//             </div>
//           ))}
//         </ItemsCarousel>
//       </div>
//     </div>
//   );
// };
// export default Projects;

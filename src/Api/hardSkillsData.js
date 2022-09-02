import {ImHtmlFive,} from "react-icons/im";
import {IoLogoCss3} from "react-icons/io";
import {SiJavascript} from "react-icons/si";
import {FaNode} from "react-icons/fa";
import '../../src/pages/Skills/Skills.css'

export const skills = [
    {
      id: 1,
      icon: <ImHtmlFive/>,
      title: "HTML-5",
      progress: 75,
      description: "HTML (HyperText Markup Language) is the most basic building block of the Web",
      class: "icon-html5",
      variant: "success",

      
    },
    {
        id: 2,
        title: "CCS-3",
        progress: 75,
        description: "CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen.",
        icon: <IoLogoCss3/>,
        class: "icon-Css",
        variant: "success",
        
      },
      {
        id: 3,
        title: "JAVASCRIPT",
        progress: 60,
        description: "JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more.",
        icon: <SiJavascript/>,
        class: "icon-Js",
        variant: "info",
        
      },
      {
        id: 4,
        title: "NODE-JS",
        progress: 55,
        description: "Disfruta de un dia espectacular ",
        icon: <FaNode/>,
        class: "icon-NodeJs",
        variant: "warning",
      },
  ];
  
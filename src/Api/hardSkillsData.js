import Skills from '../pages/Skills/Skills';
import '../../src/pages/Skills/Skills.css';
// import en from '../translations/en/global.json';
// import es from '../translations/es/global.json';



// export function myProps(htmlCat) {
  
//   return htmlCat
  
// }

const htmlCat = "categories.html";
const cssCat = "categories.css";



export const skills = [
    {
      id: 1,
      icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fhtml-svgrepo-com.svg?alt=media&token=bf007597-213f-410e-b369-8035584a3ad7",
      title: "HTML-5",
      alt: "HTML-5 logo",
      progress: 75,
      description: "HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.",
      class: "icons",
      variant: "success",
      category:"Front End",
      typeofTech: `${htmlCat}`

      
    },
    {
        id: 2,
        icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fcss-svgrepo-com.svg?alt=media&token=05933c42-aa37-4123-a959-dd7ace7fb4b8",
        title: "CCS-3",
        progress: 75,
        description: "CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once.",
        class: "icons",
        variant: "success",
        category:"Front End",
        typeofTech: `${cssCat}`,


        
      },
      {
        id: 3,
        icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fjs-svgrepo-com.svg?alt=media&token=c6b39548-7d54-4dfc-8720-5a500786edda",
        title: "JAVASCRIPT",
        progress: 70,
        description: "JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more.",
        class: "icons",
        variant: "success",
        category:"Front End",
        typeofTech: "chcu",
        
      },
      {
        id: 4,
        icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freact-1-logo-svgrepo-com.svg?alt=media&token=f690f37d-9457-4a0b-8378-16a7d426114f",
        title: "REACT-JS",
        progress: 65,
        description: "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript. ",
        class: "icons",
        variant: "warning",
        category:"Front End",
      },
      {
        id: 5,
        icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fnodejs-1-logo-svgrepo-com.svg?alt=media&token=afa3c35d-425a-44d7-95bc-ca797548ba45",
        title: "NODE-JS",
        progress: 55,
        description: "Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.",
        class: "icons",
        variant: "warning",
        category:"Back End",
      },
      {
        id: 6,
        icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fexpress-svgrepo-com.svg?alt=media&token=0ac98956-4734-4662-92b6-15c83e71408e",
        title: "EXPRESS JS",
        progress: 50,
        description: "Disfruta de un dia espectacular ",
        class: "icons",
        variant: "warning",
        category:"Back End",
      },
      {
        /* Cambiar imagenes a la carpeta de Oscar en firebase*/
        id: 7,
        icon: "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/python-svgrepo-com.svg?alt=media&token=e9f46773-c5eb-453c-be42-23f8326ae705",
        title: "PYHTON",
        progress: 50,
        description: "Disfruta de un dia espectacular ",
        class: "icons",
        variant: "warning",
        category:"Back End",
      },
      {
        id: 8,
        icon: "https://firebasestorage.googleapis.com/v0/b/ecommerce-proyecto-b850b.appspot.com/o/django-logo-negative.svg?alt=media&token=4f93d2c3-3cef-4dc2-805b-282cb9ac6b9d",
        title: "DJANGO",
        progress: 75,
        description: "JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more.",
        class: "icons",
        variant: "success",
        category:"Back End",
      },
      {
        id: 9,
        icon: "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/git-svgrepo-com.svg?alt=media&token=b637e647-5b49-4fb2-887d-664ee0404b8b",
        title: "Git hub",
        progress: 75,
        description: "JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more.",
        class: "icons",
        variant: "success",
        category:"Back End",
      },
      {
        id: 10,
        icon: "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/firebase-svgrepo-com.svg?alt=media&token=f9fd526c-0f88-42d9-ad80-6e56835b9d42",
        title: "Firebase",
        progress: 75,
        description: "JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more.",
        class: "icons",
        variant: "success",
        category:"Back End",
      },
      {
        id: 11,
        icon: "https://firebasestorage.googleapis.com/v0/b/ecommerce-proyecto-b850b.appspot.com/o/postgresql-svgrepo-com.svg?alt=media&token=2140f950-f755-4727-bf2f-a5ca6b049d03",
        title: "POSTGRESQL",
        progress: 80,
        description: "",
        class: "icons",
        variant: "success",
        category:"Full Stack"
      },
      {
        id: 12,
        icon: "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/Wordpress-Logo.svg?alt=media&token=7e23a390-ba4b-4e10-adbb-ef013ac01c84",
        title: "WordPress",
        progress: 80,
        description: "",
        class: "iconWP",
        variant: "success",
        category:"Full Stack"
      }
  ];
  




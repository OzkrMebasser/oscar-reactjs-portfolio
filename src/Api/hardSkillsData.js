import "../../src/pages/Skills/Skills.css";

//  FrontEnd Categories**
const categories = {
  htmlCat: "categories.fe.htmlCat",
  cssCat: "categories.fe.cssCat",
  jsCat: "categories.fe.jsCat",
  reactJsCat: "categories.fe.reactJsCat",
  reduxCat: "categories.fe.reduxCat",
  reactRouterCat: "categories.fe.reactRouterCat",
  tailwindCat: "categories.fe.tailwindCat",
  sassCat: "categories.fe.sassCat",
  muiCat: "categories.fe.muiCat",
  bootstrapCat: "categories.fe.bootstrapCat",
  wordpressCat: "categories.fe.wordpressCat",
  gitCat: "categories.fe.gitCat",
  gitHubCat: "categories.fe.gitHubCat",
  npmCat: "categories.fe.npmCat"
};

//  FrontEnd tools type of **
const typeOfTech = {
  htmlTech: "typeOfTech.fe.htmlTech",
  cssTech: "typeOfTech.fe.cssTech",
  jsTech: "typeOfTech.fe.jsTech",
  reactJsTech: "typeOfTech.fe.reactJsTech",
  reduxTech: "typeOfTech.fe.reduxTech",
  reactRouterTech: "typeOfTech.fe.reactRouterTech",
  tailwindTech: "typeOfTech.fe.tailwindTech",
  sassTech: "typeOfTech.fe.sassTech",
  muiTech: "typeOfTech.fe.muiTech",
  bootstrapTech: "typeOfTech.fe.bootstrapTech",
  wordpressTech: "typeOfTech.fe.wordpressTech",
  gitTech: "typeOfTech.fe.gitTech",
  gitHubTech: "typeOfTech.fe.gitHubTech",
  npmTech: "typeOfTech.fe.npmTech"
  // BackEnd tools type of

};

// Descripton of Technologies
const techDescription = {
  // Descriptions frontEnd technologies
  htmlDesc: "techDescription.fe.htmlDesc",
  cssDesc: "techDescription.fe.cssDesc",
  jsDesc: "techDescription.fe.jsDesc",
  reactJsDesc: "techDescription.fe.reactJsDesc",
  reduxDesc: "techDescription.fe.reduxDesc",
  reactRouterDesc: "techDescription.fe.reactRouterDesc",
  tailwindDesc: "techDescription.fe.tailwindDesc",
  sassDesc: "techDescription.fe.sassDesc",
  muiDesc: "techDescription.fe.muiDesc",
  bootstrapDesc: "techDescription.fe.bootstrapDesc",
  wordpressDesc: "techDescription.fe.wordpressDesc",
  gitDesc: "techDescription.fe.gitDesc",
  gitHubDesc: "techDescription.fe.gitHubDesc",
  npmDesc: "techDescription.fe.npmDesc",

  // Descriptions BackEnd technologies
}

export const skillsFE = [
  {
    id: 1,
    icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fhtml-svgrepo-com.svg?alt=media&token=bf007597-213f-410e-b369-8035584a3ad7",
    title: "HTML-5",
    alt: "HTML-5 logo",
    description: `${techDescription.htmlDesc}`,
    class: "icons",
    progress: 85,
    variant: "success",
    category: `${categories.htmlCat}`,
    typeOfTech: `${typeOfTech.htmlTech}`,
    docs: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    id: 2,
    icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fcss-svgrepo-com.svg?alt=media&token=05933c42-aa37-4123-a959-dd7ace7fb4b8",
    title: "CSS-3",
    alt: "CSS-3 logo",
    description: `${techDescription.cssDesc}`,
    class: "icons",
    progress: 80,
    variant: "success",
    category: `${categories.cssCat}`,
    typeOfTech: `${typeOfTech.cssTech}`,
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    id: 3,
    icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fjs-svgrepo-com.svg?alt=media&token=c6b39548-7d54-4dfc-8720-5a500786edda",
    title: "JAVASCRIPT",
    alt: "Javascript logo",
    description: `${techDescription.jsDesc}`,
    class: "icons",
    progress: 75,
    variant: "success",
    category: `${categories.jsCat}`,
    typeOfTech: `${typeOfTech.jsTech}`,
    docs: "https://developer.mozilla.org/en-US/docs/Web/JAVASCRIPT"
  },
  {
    id: 4,
    icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freact-1-logo-svgrepo-com.svg?alt=media&token=f690f37d-9457-4a0b-8378-16a7d426114f",
    title: "REACT JS",
    alt: "React js logo",
    description: `${techDescription.reactJsDesc}`,
    class: "icons",
    progress: 75,
    variant: "success", 
    category: `${categories.reactJsCat}`,
    typeOfTech: `${typeOfTech.reactJsTech}`,
    docs: "https://react.dev/"  
  },
  {
    id: 5,
    icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fredux-logo-svgrepo-com.svg?alt=media&token=12531cdc-c737-43e7-9494-bacab532fd09",
    title: "REDUX",
    alt: "Redux logo",
    description: `${techDescription.reduxDesc}`,
    class: "icons",
    progress: 75,
    variant: "success",
    category: `${categories.reduxCat}`,
    typeOfTech: `${typeOfTech.reduxTech}`,
    docs: "https://redux.js.org/"
  },
  {
    id: 6,
    icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freact-router-svgrepo-com.svg?alt=media&token=75893829-0a4a-4df9-a8ed-27e47c6dbb65",
    title: "REACT ROUTER",
    alt: "React Router logo",
    description: `${techDescription.reactRouterDesc}`,
    class: "icons",
    progress: 75,
    variant: "success",
    category: `${categories.reactRouterCat}`,
    typeOfTech: `${typeOfTech.reactRouterTech}`,
    docs: "https://reactrouter.com/en/main"
  },
  {
    
    id: 7,
    icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Ftailwind-svgrepo-com.svg?alt=media&token=de41409e-f0e5-4784-96fa-524c7a31c626",
    title: "TAILWIND",
    alt: "Tailwind logo",
    description: `${techDescription.tailwindDesc}`,
    class: "icons",
    progress: 75,
    variant: "success",
    category: `${categories.tailwindCat}`,
    typeOfTech: `${typeOfTech.tailwindTech}`,
    docs: "https://tailwindcss.com/"
  },
  {
    id: 8,
    icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fsass-svgrepo-com.svg?alt=media&token=bd2e56f6-5ad4-4d9e-92c9-4e256a6e7833",
    title: "SASS",
    alt: "Sass logo",
    description: `${techDescription.sassDesc}`,
    class: "icons",
    progress: 75,
    variant: "success",
    category: `${categories.sassCat}`,
    typeOfTech: `${typeOfTech.sassTech}`,
    docs: "https://sass-lang.com/documentation/"
  },
  {
    id: 9,
    icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fmaterial-ui-svgrepo-com.svg?alt=media&token=d9f03156-d62b-43b4-8265-026d65cbca23",
    title: "MUI",
    alt: "mui logo",
    description: `${techDescription.muiDesc}`,
    class: "icons",
    progress: 75,
    variant: "success",
    category: `${categories.muiCat}`,
    typeOfTech: `${typeOfTech.muiTech}`,
    docs: "https://mui.com/material-ui/getting-started/overview/"
  },
  {
    id: 10,
    icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fbootstrap.svg.svg?alt=media&token=d2cd69d3-f464-4646-8108-5fb9be6c3392",
    title: "BOOTSTRAP",
    alt: "Bootstrap logo",
    description: `${techDescription.bootstrapDesc}`,
    class: "icons",
    progress: 75,
    variant: "success",
    category: `${categories.bootstrapCat}`,
    typeOfTech: `${typeOfTech.bootstrapTech}`,
    docs: "https://getbootstrap.com/docs/5.3/getting-started/introduction/"
  },
  {
  id: 11,
  icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fwordpress-svgrepo-com.svg?alt=media&token=b537352d-cda5-4c99-84ae-319fd6a6ffdb",
  title: "WORDPRESS",
  alt: "Wordpress logo",
  description: `${techDescription.wordpressDesc}`,
  class: "icons",
  progress: 80,
  variant: "success",
  category: `${categories.wordpressCat}`,
  typeOfTech: `${typeOfTech.wordpressTech}`,
  docs: "https://wordpress.com/"
  },
  {
    id: 12,
    icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fgit-svgrepo-com.svg?alt=media&token=3aabc077-af83-4871-ba95-3e4cde1d6ffa",
    title: "GIT",
    alt: "Git logo",
    description: `${techDescription.gitDesc}`,
    class: "icons",
    progress: 80,
    variant: "success",
    category: `${categories.gitCat}`,
    typeOfTech: `${typeOfTech.gitTech}`,
    docs: "https://git-scm.com/doc"
    },
    {
      id: 13,
      icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fgithub-svgrepo-com.svg?alt=media&token=626982bd-014c-44a7-a8e2-8ff92d88dbd5",
      title: "GIT-HUB",
      alt: "Github logo",
      description: `${techDescription.gitHubDesc}`,
      class: "icons",
      progress: 80,
      variant: "success",
      category: `${categories.gitHubCat}`,
      typeOfTech: `${typeOfTech.gitHubTech}`,
      docs: "https://docs.github.com/es"
      },
      {
        id: 14,
        icon: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fnpm-svgrepo-com.svg?alt=media&token=6b9a7f75-37b3-40dd-9c59-63c9769b9a5b",
        title: "NPM",
        alt: "npm logo",
        description: `${techDescription.npmDesc}`,
        class: "icons",
        progress: 80,
        variant: "success",
        category: `${categories.npmCat}`,
        typeOfTech: `${typeOfTech.npmTech}`,
        docs: "https://docs.npmjs.com/"
        }
];

export const skillsBE = [
  {
    id: 1,
    icon: "",
    title: "HTML-5",
    alt: "HTML-5 logo",
    description: `${techDescription}`,
    class: "icons",
    progress: 75,
    variant: "success",
    category: `${categories}`,
    typeOfTech: `${typeOfTech}`,
    docs: ""
  },
]
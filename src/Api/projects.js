const myProjects = {
  //id.1 MY PORTOFOLIO
  id_1_project_name: "myProjects.id_1.project_name",
  id_1_desc: "myProjects.id_1.desc",
  //id.2 SILVER PROTECT
  id_2_project_name: "myProjects.id_2.project_name",
  id_2_desc: "myProjects.id_2.desc",
  //id.3 SAM ESQUIRE BARBER SHOP
  id_3_project_name: "myProjects.id_3.project_name",
  id_3_desc: "myProjects.id_3.desc",
  //id.4 NLB REAL ESTATE
  id_4_project_name: "myProjects.id_4.project_name",
  id_4_desc: "myProjects.id_4.desc",
  //id.5 CLEAN AID PLUS
  id_5_project_name: "myProjects.id_5.project_name",
  id_5_desc: "myProjects.id_5.desc",
  //id.6 CLEAN AID PLUS
  id_6_project_name: "myProjects.id_6.project_name",
  id_6_desc: "myProjects.id_6.desc",
  //id.7 ACADEMLO LIBRARY
  id_7_project_name: "myProjects.id_7.project_name",
  id_7_desc: "myProjects.id_7.desc",
  //id.8 AGENCIA DE TOURS
  id_8_project_name: "myProjects.id_8.project_name",
  id_8_desc: "myProjects.id_8.desc",
  aliasInstitution: "myProjects.id_8.aliasInstitution",
  seeCert: "myProjects.id_8.seeCert",
};

export const projects = [
  //id.1 MY PORTOFOLIO
  {
    id: 1,
    project_name: `${myProjects.id_1_project_name}`,
    src: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2F1.v2.oscarmorenoportfolio.png?alt=media&token=e255f12d-c04b-4682-8b32-14fdec4a99cd",
    alt: "Oscar Moreno Portfolio",
    desc: `${myProjects.id_1_desc}`,
    href: "https://moreno-oscar-dev.vercel.app/projects",
    //Deployment section

    //Vercel
    deploy_icon_1:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fvercel-icon-svgrepo-com.svg?alt=media&token=d8d668a2-26f0-4103-a3ae-99e6d3c31103",
    deploy_name_1: "Vercel",
    // git hub repo
    git_icon: "https://www.svgrepo.com/show/217753/github.svg",
    git_url: "https://github.com/OzkrMebasser/oscar-reactjs-portfolio",
    git_name: "Git repository",
    www_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Finternet-www-svgrepo-com.svg?alt=media&token=49e3d743-fa07-4bdc-879e-0e99c87df52e",
    www_site: "https://moreno-oscar-dev.vercel.app/projects",

    //Stack I used Section
    /*Icons alt names*/
    tech_1_name: "HTML-5",
    tech_2_name: "CSS-3",
    tech_3_name: "JavaScript",
    tech_4_name: "React Js",
    tech_5_name: "Boostrap",
    tech_6_name: "i18next",

    deployed: true,
    type: "online",

    /*Icons images*/

    tech_1_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fhtml-svgrepo-com.svg?alt=media&token=bf007597-213f-410e-b369-8035584a3ad7",
    tech_2_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fcss-svgrepo-com.svg?alt=media&token=05933c42-aa37-4123-a959-dd7ace7fb4b8",
    tech_3_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fjs-svgrepo-com.svg?alt=media&token=c6b39548-7d54-4dfc-8720-5a500786edda",
    tech_4_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freact-1-logo-svgrepo-com.svg?alt=media&token=f690f37d-9457-4a0b-8378-16a7d426114f",
    tech_5_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fbootstrap.svg.svg?alt=media&token=d2cd69d3-f464-4646-8108-5fb9be6c3392",
    tech_6_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fi18next.png?alt=media&token=84de9dec-afef-41a0-a233-7701bd1e5e27",
  },
  //id.2 SILVER PROTECT
  {
    id: 2,
    project_name: `${myProjects.id_2_project_name}`,
    src: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2F2.silverprotec.com.mx.png?alt=media&token=b3c22837-33ca-4036-acf7-71c9d172bab1",
    alt: "Silver Protect",
    desc: `${myProjects.id_2_desc}`,
    href: "https://silverprotect.com.mx/",

    //Deployment section
    //Firebase
    deploy_icon_1:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Ffirebase-svgrepo-com.svg?alt=media&token=ea3cf79a-0fa3-4a32-ae04-89625cdaa904",
    deploy_name_1: "Firabase",
    git_icon: "https://www.svgrepo.com/show/217753/github.svg",
    git_url: "https://github.com/OzkrMebasser/silver-protect-website",
    git_name: "Git repository",
    www_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Finternet-www-svgrepo-com.svg?alt=media&token=49e3d743-fa07-4bdc-879e-0e99c87df52e",
    www_site: "https://silverprotect.com.mx/",

    tech_1_name: "HTML-5",
    tech_2_name: "CSS-3",
    tech_3_name: "JavaScript",
    tech_4_name: "React Js",
    tech_5_name: "Tailwind CSS",
    tech_6_name: "Email JS",

    deployed: true,
    type: "online",

    tech_1_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fhtml-svgrepo-com.svg?alt=media&token=bf007597-213f-410e-b369-8035584a3ad7",
    tech_2_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fcss-svgrepo-com.svg?alt=media&token=05933c42-aa37-4123-a959-dd7ace7fb4b8",
    tech_3_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fjs-svgrepo-com.svg?alt=media&token=c6b39548-7d54-4dfc-8720-5a500786edda",
    tech_4_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freact-1-logo-svgrepo-com.svg?alt=media&token=f690f37d-9457-4a0b-8378-16a7d426114f",
    tech_5_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Ftailwind-svgrepo-com.svg?alt=media&token=de41409e-f0e5-4784-96fa-524c7a31c626",

    tech_6_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Femailjs.png?alt=media&token=e31be33a-174b-4860-8a75-44fcedb47b74",
  },
  //id.3 SAM ESQUIRE BARBER SHOP
  {
    id: 3,
    project_name: `${myProjects.id_3_project_name}`,
    src: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2F3.samesquire.com.png?alt=media&token=e75c445f-f0ac-4f39-8b6d-10a8e5ae5841",
    alt: "SAM ESQUIRE BARBER SHOP",
    desc: `${myProjects.id_3_desc}`,
    href: "https://samesquire.com/",

    //Deployment section
    //Firebase
    deploy_icon_1:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Ffirebase-svgrepo-com.svg?alt=media&token=ea3cf79a-0fa3-4a32-ae04-89625cdaa904",
    deploy_name_1: "Firabase",
    // git hub repo
    git_icon: "https://www.svgrepo.com/show/217753/github.svg",
    git_url: "https://github.com/OzkrMebasser/sam-esquire-barbershop",
    git_name: "Git repository",
    www_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Finternet-www-svgrepo-com.svg?alt=media&token=49e3d743-fa07-4bdc-879e-0e99c87df52e",
    www_site: "https://samesquire.com/",

    //Stack I used Section
    /*Icons alt names*/
    tech_1_name: "HTML-5",
    tech_2_name: "CSS-3",
    tech_3_name: "JavaScript",
    tech_4_name: "Swiper JS",
    tech_5_name: "AOS",

    deployed: true,
    type: "online",

    tech_1_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fhtml-svgrepo-com.svg?alt=media&token=bf007597-213f-410e-b369-8035584a3ad7",
    tech_2_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fcss-svgrepo-com.svg?alt=media&token=05933c42-aa37-4123-a959-dd7ace7fb4b8",
    tech_3_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fjs-svgrepo-com.svg?alt=media&token=c6b39548-7d54-4dfc-8720-5a500786edda",
    tech_4_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fswiper-logo.svg?alt=media&token=0cfb7375-4661-4036-ad96-8bd143b4ac41",
    tech_5_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2FAOS.jpeg?alt=media&token=284f7e39-7d00-4c67-a4bd-fe5c5cb4896c",
  },
  //id.4 NLB REAL ESTATE
  {
    id: 4,
    project_name: `${myProjects.id_4_project_name}`,
    src: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2F4.httpsnlbrealestate.com.png?alt=media&token=d71a0660-ea18-41a2-9c6e-36fee1dfc6bc",
    alt: "NLB REAL ESTATE",
    desc: `${myProjects.id_4_desc}`,
    href: "https://nlb-realestate.com/",
    //Deployment section

    //Firebase
    deploy_icon_1:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Ffirebase-svgrepo-com.svg?alt=media&token=ea3cf79a-0fa3-4a32-ae04-89625cdaa904",
    deploy_name_1: "Firebase",
    // git hub repo
    git_icon: "https://www.svgrepo.com/show/217753/github.svg",
    git_url: "https://github.com/OzkrMebasser/nlb-real-estate-nxtjs",
    git_name: "Git repository",
    www_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Finternet-www-svgrepo-com.svg?alt=media&token=49e3d743-fa07-4bdc-879e-0e99c87df52e",
    www_site: "https://nlb-realestate.com/",

    //Stack I used Section
    /*Icons alt names*/
    tech_1_name: "HTML-5",
    tech_2_name: "CSS-3",
    tech_3_name: "JavaScript",
    tech_4_name: "React Js",
    tech_5_name: "Tailwind",
    tech_6_name: "Next Js",
    tech_7_name: "i18next",

    deployed: true,
    type: "online",

    /*Icons images*/

    tech_1_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fhtml-svgrepo-com.svg?alt=media&token=bf007597-213f-410e-b369-8035584a3ad7",
    tech_2_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fcss-svgrepo-com.svg?alt=media&token=05933c42-aa37-4123-a959-dd7ace7fb4b8",
    tech_3_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fjs-svgrepo-com.svg?alt=media&token=c6b39548-7d54-4dfc-8720-5a500786edda",
    tech_4_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freact-1-logo-svgrepo-com.svg?alt=media&token=f690f37d-9457-4a0b-8378-16a7d426114f",
    tech_5_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Ftailwind-svgrepo-com.svg?alt=media&token=de41409e-f0e5-4784-96fa-524c7a31c626",
    tech_6_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fnext-js-svgrepo-com.svg?alt=media&token=ac7b37d1-13b5-4c9e-8986-6f6eb1123f31",
    tech_7_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fi18next.png?alt=media&token=84de9dec-afef-41a0-a233-7701bd1e5e27",
  },
  //id.5 CLEAN AID PLUS
  {
    id: 5,
    project_name: `${myProjects.id_5_project_name}`,
    src: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2F5.cleanaidplus.ca.png?alt=media&token=4d59d4a0-8d46-4e52-b0fd-5a5eb15d0480",
    alt: "CLEAN AID PLUS",
    desc: `${myProjects.id_5_desc}`,
    href: "https://clean-aid-plus.vercel.app/",
    //Deployment section

    //Vercel
    deploy_icon_1:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fvercel-icon-svgrepo-com.svg?alt=media&token=d8d668a2-26f0-4103-a3ae-99e6d3c31103",
    deploy_name_1: "Vercel",
    // git hub repo
    git_icon: "https://www.svgrepo.com/show/217753/github.svg",
    git_url: "https://github.com/OzkrMebasser/clean-aid-plus",
    git_name: "Git repository",
    www_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Finternet-www-svgrepo-com.svg?alt=media&token=49e3d743-fa07-4bdc-879e-0e99c87df52e",
    www_site: "https://clean-aid-plus.vercel.app/",

    //Stack I used Section
    /*Icons alt names*/
    tech_1_name: "HTML-5",
    tech_2_name: "CSS-3",
    tech_3_name: "JavaScript",
    tech_4_name: "React Js",
    tech_5_name: "Tailwind",
    tech_6_name: "Next Js",
    tech_7_name: "Swiper",

    deployed: true,
    type: "development",

    /*Icons images*/

    tech_1_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fhtml-svgrepo-com.svg?alt=media&token=bf007597-213f-410e-b369-8035584a3ad7",
    tech_2_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fcss-svgrepo-com.svg?alt=media&token=05933c42-aa37-4123-a959-dd7ace7fb4b8",
    tech_3_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fjs-svgrepo-com.svg?alt=media&token=c6b39548-7d54-4dfc-8720-5a500786edda",
    tech_4_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freact-1-logo-svgrepo-com.svg?alt=media&token=f690f37d-9457-4a0b-8378-16a7d426114f",
    tech_5_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Ftailwind-svgrepo-com.svg?alt=media&token=de41409e-f0e5-4784-96fa-524c7a31c626",
    tech_6_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fnext-js-svgrepo-com.svg?alt=media&token=ac7b37d1-13b5-4c9e-8986-6f6eb1123f31",
    tech_7_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fswiper-logo.svg?alt=media&token=0cfb7375-4661-4036-ad96-8bd143b4ac41",
  },
  //id.6 TRIPYTOUR BLOG
  {
    id: 6,
    project_name: `${myProjects.id_6_project_name}`,
    src: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2F6.tripytour.blog.png?alt=media&token=5b8792fd-cbd8-44a5-8a58-c3a140922c24",
    alt: "TRIPYTOUR BLOG",
    desc: `${myProjects.id_6_desc}`,
    href: "https://tripytour-blog.vercel.app/",

    //Deployment section

    //Vercel
    deploy_icon_1:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fvercel-icon-svgrepo-com.svg?alt=media&token=d8d668a2-26f0-4103-a3ae-99e6d3c31103",
    deploy_name_1: "Vercel",
    // git hub repo
    git_icon: "https://www.svgrepo.com/show/217753/github.svg",
    git_url: "https://github.com/OzkrMebasser/tripytour-blog",
    git_name: "Git repository",
    www_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Finternet-www-svgrepo-com.svg?alt=media&token=49e3d743-fa07-4bdc-879e-0e99c87df52e",
    www_site: "https://tripytour-blog.vercel.app/",

    //Stack I used Section
    /*Icons alt names*/
    tech_1_name: "HTML-5",
    tech_2_name: "CSS-3",
    tech_3_name: "JavaScript",
    tech_4_name: "React Js",
    tech_5_name: "Next Js",
    tech_6_name: "Prisma",
    tech_7_name: "MongoDB",

    deployed: true,
    type: "development",

    /*Icons images*/

    tech_1_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fhtml-svgrepo-com.svg?alt=media&token=bf007597-213f-410e-b369-8035584a3ad7",
    tech_2_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fcss-svgrepo-com.svg?alt=media&token=05933c42-aa37-4123-a959-dd7ace7fb4b8",
    tech_3_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fjs-svgrepo-com.svg?alt=media&token=c6b39548-7d54-4dfc-8720-5a500786edda",
    tech_4_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freact-1-logo-svgrepo-com.svg?alt=media&token=f690f37d-9457-4a0b-8378-16a7d426114f",
    tech_5_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fnext-js-svgrepo-com.svg?alt=media&token=ac7b37d1-13b5-4c9e-8986-6f6eb1123f31",
    tech_6_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2FPRISMA.png?alt=media&token=fc59e78c-6885-4d82-9243-076c630c983e",
    tech_7_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fmongodb-svgrepo-com.svg?alt=media&token=12d49f5f-5031-43e4-abd8-aa14ae07565a",
  },
  //id.7 ACADEMLO LIBRARY
  {
    id: 7,
    project_name: `${myProjects.id_7_project_name}`,
    src: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2F7.academloslibrary.png?alt=media&token=a6e98d82-f5c9-4dd3-8640-5a310bdacf10",
    alt: "ACADEMLO's LIBRARY",
    desc: `${myProjects.id_7_desc}`,
    href: "https://academlo-library-system-v2.onrender.com/",

    //Deployment section
    deployed: true,
    linkSchool: `${myProjects.aliasInstitution}`,
    seeCert: `${myProjects.seeCert}`,
    type: "academic",
    //Vercel
    deploy_icon_1:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Frenderlogo.png?alt=media&token=fdad5cbe-e801-401b-9c88-e4f4b908e03a",
    deploy_name_1: "RENDER",
    // git hub repo
    git_icon: "https://www.svgrepo.com/show/217753/github.svg",
    git_url: "https://github.com/OzkrMebasser/academlo-library-system-v2",
    git_name: "Git repository",
    www_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Finternet-www-svgrepo-com.svg?alt=media&token=49e3d743-fa07-4bdc-879e-0e99c87df52e",
    www_site: "https://academlo-library-system-v2.onrender.com/",

    tech_1_name: "HTML-5",
    tech_2_name: "BOOTSTRAP",
    tech_3_name: "PYTHON",
    tech_4_name: "DJANGO",
    tech_5_name: "POSTGRESQL",

    tech_1_icon:
      "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/html-svgrepo-com.svg?alt=media&token=e8fcd17b-c890-4418-b058-e274e446bfd9",
    tech_2_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fbootstrap.svg.svg?alt=media&token=d2cd69d3-f464-4646-8108-5fb9be6c3392",
    tech_3_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fpython-svgrepo-com.svg?alt=media&token=dd35c257-b994-4350-8fb0-9226eb25e748",
    tech_4_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fdjango-svgrepo-com.svg?alt=media&token=13b31f65-df6d-4986-84ea-2d6abd0cc8d2",
    tech_5_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fpostgresql-svgrepo-com%20(1).svg?alt=media&token=8294cc05-91ae-49c4-8418-d531fc8ca0b7",
  },
  //id.8 TOUR AGENCY ECOMMMERCE
  {
    id: 8,
    project_name: `${myProjects.id_8_project_name}`,
    src: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2F8.touragency.ecommerce.png?alt=media&token=33ab71f5-6496-4250-92f1-e1ca8946b074",
    alt: "TOUR AGENCY ECOMMMERCE",
    desc: `${myProjects.id_8_desc}`,
    href: "https://oscar-ecommerce-context-reducer.netlify.app/",

    //Deployment section
    deployed: true,
    linkSchool: `${myProjects.aliasInstitution}`,
    seeCert: `${myProjects.seeCert}`,
    type: "academic",
    //Vercel
    deploy_icon_1:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fvercel-icon-svgrepo-com.svg?alt=media&token=d8d668a2-26f0-4103-a3ae-99e6d3c31103",
    deploy_name_1: "VERCEL",
    // git hub repo
    git_icon: "https://www.svgrepo.com/show/217753/github.svg",
    git_url:
      "https://github.com/OzkrMebasser/ecommer-context-reducer-oscar-beta",
    git_name: "Git repository",
    www_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Finternet-www-svgrepo-com.svg?alt=media&token=49e3d743-fa07-4bdc-879e-0e99c87df52e",
    www_site: "https://oscar-ecommerce-context-reducer.netlify.app/",

    tech_1_name: "HTML-5",
    tech_2_name: "MATERIAL UI",
    tech_3_name: "REACT JS",
    tech_4_name: "REACT ROUTER",
    tech_5_name: "REACT SPRING",

    tech_1_icon:
      "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/html-svgrepo-com.svg?alt=media&token=e8fcd17b-c890-4418-b058-e274e446bfd9",
    tech_2_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fmaterial-ui-svgrepo-com.svg?alt=media&token=d9f03156-d62b-43b4-8265-026d65cbca23",
    tech_3_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freact-1-logo-svgrepo-com.svg?alt=media&token=f690f37d-9457-4a0b-8378-16a7d426114f",
    tech_4_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freact-router-svgrepo-com.svg?alt=media&token=75893829-0a4a-4df9-a8ed-27e47c6dbb65",
    tech_5_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freactspring.jpeg?alt=media&token=cc64a01c-85fe-4b3b-b34e-efc464130f26",
  },
  //id.9 OTHER PROJECTS
  {
    id: 9,
    project_name: `OTHER PROJECTS`,
    src: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2F8.touragency.ecommerce.png?alt=media&token=33ab71f5-6496-4250-92f1-e1ca8946b074",
    alt: "OTHER PROJECTS",
    desc: `${myProjects.id_8_desc}`,
    href: "other-projects",

    //Deployment section
    deployed: true,
    linkSchool: `${myProjects.aliasInstitution}`,
    seeCert: `${myProjects.seeCert}`,
    type: "academic",
    //Vercel
    deploy_icon_1:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fvercel-icon-svgrepo-com.svg?alt=media&token=d8d668a2-26f0-4103-a3ae-99e6d3c31103",
    deploy_name_1: "VERCEL",
    // git hub repo
    git_icon: "https://www.svgrepo.com/show/217753/github.svg",
    git_url:
      "https://github.com/OzkrMebasser/ecommer-context-reducer-oscar-beta",
    git_name: "Git repository",
    www_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Finternet-www-svgrepo-com.svg?alt=media&token=49e3d743-fa07-4bdc-879e-0e99c87df52e",
    www_site: "other-projects",

    tech_1_name: "HTML-5",
    tech_2_name: "MATERIAL UI",
    tech_3_name: "REACT JS",
    tech_4_name: "REACT ROUTER",
    tech_5_name: "REACT SPRING",

    tech_1_icon:
      "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/html-svgrepo-com.svg?alt=media&token=e8fcd17b-c890-4418-b058-e274e446bfd9",
    tech_2_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fmaterial-ui-svgrepo-com.svg?alt=media&token=d9f03156-d62b-43b4-8265-026d65cbca23",
    tech_3_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freact-1-logo-svgrepo-com.svg?alt=media&token=f690f37d-9457-4a0b-8378-16a7d426114f",
    tech_4_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freact-router-svgrepo-com.svg?alt=media&token=75893829-0a4a-4df9-a8ed-27e47c6dbb65",
    tech_5_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freactspring.jpeg?alt=media&token=cc64a01c-85fe-4b3b-b34e-efc464130f26",
  },
];

export const otherProjects = [
  //id.1 MY PORTOFOLIO
  {
    id: 1,
    // project_name: `${myProjects.id_1_project_name}`,
    project_name: `PRYECTO UNO`,
    src: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2F1.v2.oscarmorenoportfolio.png?alt=media&token=e255f12d-c04b-4682-8b32-14fdec4a99cd",
    alt: "Oscar Moreno Portfolio",
    desc: `O FINAL DEL MÓDULO DE DESARROLLO FRONT-END CON REACT EN *ACADEMLO. DESARROLLÉ UN MOCKUP DE COMERCIO ELECTRÓNICO. EN ESTE PROYECTO, UTILICÉ REACT, REACT-ROUTER Y CONTEXT PARA EL ESTADO GLOBAL, DEL CARRITO, FAVORITOS, ETC"`,
    href: "https://moreno-oscar-dev.vercel.app/projects",
    //Deployment section

    //Vercel
    deploy_icon_1:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fvercel-icon-svgrepo-com.svg?alt=media&token=d8d668a2-26f0-4103-a3ae-99e6d3c31103",
    deploy_name_1: "Vercel",
    // git hub repo
    git_icon: "https://www.svgrepo.com/show/217753/github.svg",
    git_url: "https://github.com/OzkrMebasser/oscar-reactjs-portfolio",
    git_name: "Git repository",
    www_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Finternet-www-svgrepo-com.svg?alt=media&token=49e3d743-fa07-4bdc-879e-0e99c87df52e",
    www_site: "https://moreno-oscar-dev.vercel.app/projects",

    //Stack I used Section
    /*Icons alt names*/
    tech_1_name: "HTML-5",
    tech_2_name: "CSS-3",
    tech_3_name: "JavaScript",
    tech_4_name: "React Js",
    tech_5_name: "Boostrap",
    tech_6_name: "i18next",

    deployed: true,
    type: "online",

    /*Icons images*/

    tech_1_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fhtml-svgrepo-com.svg?alt=media&token=bf007597-213f-410e-b369-8035584a3ad7",
    tech_2_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fcss-svgrepo-com.svg?alt=media&token=05933c42-aa37-4123-a959-dd7ace7fb4b8",
    tech_3_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fjs-svgrepo-com.svg?alt=media&token=c6b39548-7d54-4dfc-8720-5a500786edda",
    tech_4_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freact-1-logo-svgrepo-com.svg?alt=media&token=f690f37d-9457-4a0b-8378-16a7d426114f",
    tech_5_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fbootstrap.svg.svg?alt=media&token=d2cd69d3-f464-4646-8108-5fb9be6c3392",
    tech_6_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fi18next.png?alt=media&token=84de9dec-afef-41a0-a233-7701bd1e5e27",
  },
  {
    id: 1,
    // project_name: `${myProjects.id_1_project_name}`,
    project_name: `PRYECTO UNO`,
    src: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2F1.v2.oscarmorenoportfolio.png?alt=media&token=e255f12d-c04b-4682-8b32-14fdec4a99cd",
    alt: "Oscar Moreno Portfolio",
    desc: `O FINAL DEL MÓDULO DE DESARROLLO FRONT-END CON REACT EN *ACADEMLO. DESARROLLÉ UN MOCKUP DE COMERCIO ELECTRÓNICO. EN ESTE PROYECTO, UTILICÉ REACT, REACT-ROUTER Y CONTEXT PARA EL ESTADO GLOBAL, DEL CARRITO, FAVORITOS, ETC"`,
    href: "https://moreno-oscar-dev.vercel.app/projects",
    //Deployment section

    //Vercel
    deploy_icon_1:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fvercel-icon-svgrepo-com.svg?alt=media&token=d8d668a2-26f0-4103-a3ae-99e6d3c31103",
    deploy_name_1: "Vercel",
    // git hub repo
    git_icon: "https://www.svgrepo.com/show/217753/github.svg",
    git_url: "https://github.com/OzkrMebasser/oscar-reactjs-portfolio",
    git_name: "Git repository",
    www_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Finternet-www-svgrepo-com.svg?alt=media&token=49e3d743-fa07-4bdc-879e-0e99c87df52e",
    www_site: "https://moreno-oscar-dev.vercel.app/projects",

    //Stack I used Section
    /*Icons alt names*/
    tech_1_name: "HTML-5",
    tech_2_name: "CSS-3",
    tech_3_name: "JavaScript",
    tech_4_name: "React Js",
    tech_5_name: "Boostrap",
    tech_6_name: "i18next",

    deployed: true,
    type: "practice",

    /*Icons images*/

    tech_1_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fhtml-svgrepo-com.svg?alt=media&token=bf007597-213f-410e-b369-8035584a3ad7",
    tech_2_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fcss-svgrepo-com.svg?alt=media&token=05933c42-aa37-4123-a959-dd7ace7fb4b8",
    tech_3_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fjs-svgrepo-com.svg?alt=media&token=c6b39548-7d54-4dfc-8720-5a500786edda",
    tech_4_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freact-1-logo-svgrepo-com.svg?alt=media&token=f690f37d-9457-4a0b-8378-16a7d426114f",
    tech_5_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fbootstrap.svg.svg?alt=media&token=d2cd69d3-f464-4646-8108-5fb9be6c3392",
    tech_6_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fi18next.png?alt=media&token=84de9dec-afef-41a0-a233-7701bd1e5e27",
  },
  {
    id: 1,
    // project_name: `${myProjects.id_1_project_name}`,
    project_name: `PRYECTO UNO`,
    src: "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2F1.v2.oscarmorenoportfolio.png?alt=media&token=e255f12d-c04b-4682-8b32-14fdec4a99cd",
    alt: "Oscar Moreno Portfolio",
    desc: `O FINAL DEL MÓDULO DE DESARROLLO FRONT-END CON REACT EN *ACADEMLO. DESARROLLÉ UN MOCKUP DE COMERCIO ELECTRÓNICO. EN ESTE PROYECTO, UTILICÉ REACT, REACT-ROUTER Y CONTEXT PARA EL ESTADO GLOBAL, DEL CARRITO, FAVORITOS, ETC"`,
    href: "https://moreno-oscar-dev.vercel.app/projects",
    //Deployment section

    //Vercel
    deploy_icon_1:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fvercel-icon-svgrepo-com.svg?alt=media&token=d8d668a2-26f0-4103-a3ae-99e6d3c31103",
    deploy_name_1: "Vercel",
    // git hub repo
    git_icon: "https://www.svgrepo.com/show/217753/github.svg",
    git_url: "https://github.com/OzkrMebasser/oscar-reactjs-portfolio",
    git_name: "Git repository",
    www_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Finternet-www-svgrepo-com.svg?alt=media&token=49e3d743-fa07-4bdc-879e-0e99c87df52e",
    www_site: "https://moreno-oscar-dev.vercel.app/projects",

    //Stack I used Section
    /*Icons alt names*/
    tech_1_name: "HTML-5",
    tech_2_name: "CSS-3",
    tech_3_name: "JavaScript",
    tech_4_name: "React Js",
    tech_5_name: "Boostrap",
    tech_6_name: "i18next",

    deployed: true,
    type: "academic",

    /*Icons images*/

    tech_1_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fhtml-svgrepo-com.svg?alt=media&token=bf007597-213f-410e-b369-8035584a3ad7",
    tech_2_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fcss-svgrepo-com.svg?alt=media&token=05933c42-aa37-4123-a959-dd7ace7fb4b8",
    tech_3_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fjs-svgrepo-com.svg?alt=media&token=c6b39548-7d54-4dfc-8720-5a500786edda",
    tech_4_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Freact-1-logo-svgrepo-com.svg?alt=media&token=f690f37d-9457-4a0b-8378-16a7d426114f",
    tech_5_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fbootstrap.svg.svg?alt=media&token=d2cd69d3-f464-4646-8108-5fb9be6c3392",
    tech_6_icon:
      "https://firebasestorage.googleapis.com/v0/b/oscar-moreno-dev.appspot.com/o/oscar-portfolio-imgs%2FProjects%2FTech-Icons%2Fi18next.png?alt=media&token=84de9dec-afef-41a0-a233-7701bd1e5e27",
  },
];

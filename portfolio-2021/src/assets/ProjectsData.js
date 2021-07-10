import reacterImage from "./images/reacter.png";

const ProjectsData = [
  {
    name: "Reacter",
    image: reacterImage,
    description:
      "Social media app similar to Twitter. Built with React, GraphQL, MongoDB, Node, and Express (MERNG stack)",
    frontendRepo: "https://github.com/sheridp2/react-social-media-app",
    backendRepo: "https://github.com/sheridp2/react-social-media-app-backend",
    url: "https://react-social-media-app.vercel.app/",
    company: "Personal",
    technolgies: [
      { skillName: "React", fontAwesomeClassname: "logos:react" },
      {
        skillName: "GraphQL",
        fontAwesomeClassname: "",
      },
      {
        skillName: "MongoDB",
        fontAwesomeClassname: "vscode-icons:file-type-mongo",
      },
      {
        skillName: "NodeJS",
        fontAwesomeClassname: "logos:nodejs-icon",
      },
      {
        skillName: "GraphQL",
        fontAwesomeClassname: "vscode-icons:file-type-graphql",
      },
    ],
    featured: true,
  },
  {
    name: "Guesswork (4 player Triva)",
    image: "https://picsum.photos/seed/picsum/300/200",
    description:
      "a Trivia app built with React, Redux, and the Open Trivia API. Up to 4 players, 3 difficulties, and minimal API calls show questions quickly and keep the game fast paced",
    frontendRepo: "https://github.com/sheridp2/triviapp",
    backendRepo: "N/A",
    url: "https://guesswork.herokuapp.com/",
    company: "Personal",
    technolgies: [
      { skillName: "React", fontAwesomeClassname: "logos:react" },
      ,
      { skillName: "Redux", fontAwesomeClassname: "" },
    ],
    featured: false,
  },
  {
    name: "Dashboard Insights - Accessibility Dashboard",
    image: "https://picsum.photos/seed/picsum/300/200",
    description: "Dashboard Insights Description",
    frontendRepo: "N/A",
    backendRepo: "N/A",
    url: "http://dashboardaccessibility.azurewebsites.net/",
    company: "ISoftStone",
    technolgies: [
      { skillName: "Accessibility", fontAwesomeClassname: "" },
      ,
      { skillName: "React", fontAwesomeClassname: "logos:react" },
      ,
      {
        skillName: "NodeJS",
        fontAwesomeClassname: "logos:nodejs-icon",
      },
      {
        skillName: "Express",
        fontAwesomeClassname: "",
      },
    ],
    featured: true,
  },
];

export default ProjectsData;

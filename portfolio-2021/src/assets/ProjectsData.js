import reacterImage from "./images/reacter.png";
import dashboardInsightsImage from "./images/dashboard-insights.png";
import guessWorkImage from "./images/guesswork.png";
import ai4accessibilityImage from "./images/ai4accessibility.png";
import nbaAssistImage from "./images/nbaAssist.png";
import TI101 from "./images/img-2.png";
import spotImage from "./images/img-3.png";
import zipToSaleImage from "./images/ziptosaleImage.png";
import flukeHomepage from "./images/img-5.png";
import cocktail from "./images/cocktails.png";
import recnet from "./images/recnet.png";
import memories from "./images/memories.png";

const ProjectsData = [
  {
    name: "Fluke - Thermal Imaging 101",
    image: TI101,
    description: "Fluke guide to different aspects of thermal imaging",
    frontendRepo: "",
    backendRepo: "N/A",
    url: "http://a.fluke.com/IG-GL-TI-THERMALIMAGING101-LP-1-A",
    company: "Fluke",
    technolgies: [
      { skillName: "HTML5" },

      {
        skillName: "CSS3",
      },
      {
        skillName: "Bootstrap",
      },
    ],
    featured: true,
  },
  {
    name: "Dashboard Insights - Accessibility Dashboard",
    image: dashboardInsightsImage,
    description: "Dashboard Insights Description",
    frontendRepo: "N/A",
    backendRepo: "N/A",
    url: "http://dashboardaccessibility.azurewebsites.net/",
    company: "ISoftStone",
    technolgies: [
      { skillName: "Accessibility", fontAwesomeClassname: "" },

      { skillName: "React", fontAwesomeClassname: "logos:react" },

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

  {
    name: "Fluke - US and Global websites",
    image: flukeHomepage,
    description:
      "Upkeep, maintenance, and NPI launches of Fluke's US and 63 global websites ",
    frontendRepo: "",
    backendRepo: "N/A",
    url: "https://www.fluke.com/en-us",
    company: "Fluke",
    technolgies: [
      { skillName: "HTML5" },

      {
        skillName: "CSS3",
      },
      {
        skillName: "Javascript",
      },
      {
        skillName: "Drupal5 CMS",
      },
    ],
    featured: true,
  },

  {
    name: "Reacter - Social Media App",
    image: reacterImage,
    description:
      "Social media app similar to Twitter. Includes Login/Register, Commenting, and Liking ",
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
        skillName: "Express",
        fontAwesomeClassname: "",
      },
    ],
    featured: true,
  },

  {
    name: "Fluke - Spot The Differences",
    image: spotImage,
    description: "Fluke thermal imager application guide and contact form",
    frontendRepo: "",
    backendRepo: "N/A",
    url: "http://a.fluke.com/IG-GL-TI-2018-TIAPPLICATIONSPECIFICLP-1-A?lcid=2eb25055-cd99-e811-80c9-00155dfd7263&lrpf=306C4BD2-C170-DE11-95B8-02BF0A064B97&plt=200000000&cra=100000000&scl=6206&redir=http://download.fluke.com/ti-thank-you/thank-you-new-camera.html",
    company: "Fluke",
    technolgies: [
      { skillName: "HTML5" },

      {
        skillName: "CSS3",
      },
      {
        skillName: "Bootstrap",
      },
    ],
    featured: true,
  },

  {
    name: "AI for Accesibility - AI Captioning App",
    image: ai4accessibilityImage,
    description: "Dashboard Insights Description",
    frontendRepo: "N/A",
    backendRepo: "N/A",
    url: "https://ai4accessibility.azurewebsites.net/",
    company: "ISoftStone",
    technolgies: [
      { skillName: "Accessibility", fontAwesomeClassname: "" },

      { skillName: "React", fontAwesomeClassname: "logos:react" },

      {
        skillName: "NodeJS",
        fontAwesomeClassname: "logos:nodejs-icon",
      },
      {
        skillName: "Express",
        fontAwesomeClassname: "",
      },
      {
        skillName: "Azure",
        fontAwesomeClassname: "",
      },
    ],
    featured: true,
  },
  {
    name: "Memories - React Social Media Image App",
    image: memories,
    description:
      "Store and share memories and images and also like and comment other peoples",
    frontendRepo: "https://github.com/sheridp2/React-node-memories",
    backendRepo: "N/A",
    url: "https://react-node-memories.vercel.app/",
    company: "Personal",
    technolgies: [
      { skillName: "React" },
      { skillName: "Redux" },

      {
        skillName: "Express",
      },
      {
        skillName: "NodeJS",
      },
      {
        skillName: "MaterialUI",
      },
    ],
    featured: true,
  },
  {
    name: "Rec.net Clone",
    image: recnet,
    description: "Clone Rec.net for practice",
    frontendRepo: "https://github.com/sheridp2/rec.net-clone",
    backendRepo: "N/A",
    url: "https://rec-net-clone.vercel.app/",
    company: "Personal",
    technolgies: [
      { skillName: "React" },

      {
        skillName: "CSS3",
      },
      {
        skillName: "HTML",
      },
      {
        skillName: "BootStrap",
      },
    ],
    featured: false,
  },
  {
    name: "Cocktail Finder",
    image: cocktail,
    description: "App to help you find cocktail recepies",
    frontendRepo:
      "https://github.com/sheridp2/react-projects/tree/main/cocktail-finder",
    backendRepo: "N/A",
    url: "https://cocktail-finder.vercel.app/",
    company: "Personal",
    technolgies: [
      { skillName: "React" },

      {
        skillName: "CSS3",
      },
      {
        skillName: "HTML",
      },
    ],
    featured: false,
  },
  {
    name: "NBA Assist - Player Card/Stat App",
    image: nbaAssistImage,
    description: "NBA player stat/trading card app",
    frontendRepo: "https://github.com/sheridp2/nba-assist",
    backendRepo: "N/A",
    url: "https://nba-assist.vercel.app/",
    company: "Personal",
    technolgies: [
      { skillName: "React", fontAwesomeClassname: "logos:react" },

      {
        skillName: "NodeJS",
        fontAwesomeClassname: "logos:nodejs-icon",
      },
      {
        skillName: "Express",
        fontAwesomeClassname: "",
      },
    ],
    featured: false,
  },

  {
    name: "Guesswork - 4 player Triva",
    image: guessWorkImage,
    description:
      "Trivia app. Up to 4 players, 3 difficulties. Question pulled from multiple categories",
    frontendRepo: "https://github.com/sheridp2/triviapp",
    backendRepo: "N/A",
    url: "https://guesswork.herokuapp.com/",
    company: "Personal",
    technolgies: [
      { skillName: "React", fontAwesomeClassname: "logos:react" },

      { skillName: "Redux", fontAwesomeClassname: "" },
    ],
    featured: false,
  },
  {
    name: "Fluke - Zip to Sales Tool",
    image: zipToSaleImage,
    description: "Fluke internal tool for finding sales reps based on zipcode",
    frontendRepo: "",
    backendRepo: "N/A",
    url: "https://content.fluke.com/test/ziptosales/ziptosales.html",
    company: "Fluke",
    technolgies: [
      { skillName: "HTML5" },

      {
        skillName: "CSS3",
      },
      {
        skillName: "Javascript",
      },
      {
        skillName: "Bootstrap",
      },
    ],
    featured: true,
  },
];

export default ProjectsData;

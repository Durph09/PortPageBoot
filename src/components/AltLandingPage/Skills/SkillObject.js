 
 
 import {
   faGithub,
   faReact,
   faNodeJs,
   faBootstrap,
   faPython,
   faJs,
   faPhp,
   faFigma,
   faHtml5,
   faCss3, 
 } from "@fortawesome/free-brands-svg-icons";
 import { faCloud, faDatabase } from "@fortawesome/free-solid-svg-icons";
 
 export const skillsObject = [
    {
        icon: faFigma,
        id: "Figma",
        skillLevel: 50,
        color: "green",
    },
    {
        icon: faGithub,
        id: "Git Hub",
        skillLevel: 50,
        color: "yellow",
    },
    {
        icon: faHtml5,
        id: "HTML 5",
        skillLevel: 80,
        color: "red",
    },
    {
        icon: faCss3,
        id: "Css 3",
        skillLevel: 60,
        color: "blue",
    },
    {
        icon: faJs, // You need to import this from Font Awesome
        id: "JavaScript",
        skillLevel: 60,
        color: "orange",
    },
    {
        icon: faReact, // You need to import this from Font Awesome
        id: "React",
        skillLevel: 70,
        color: "cyan",
    },
    {
        icon: faNodeJs, // You need to import this from Font Awesome or define it
        id: "Express.js",
        skillLevel: 40,
        color: "purple",
    },
     {
         icon: faDatabase, // You need to import this from Font Awesome
         id: "SQL",
         skillLevel: 70,
         color: "magenta",
     },
    {
        icon: faPython, // You need to import this from Font Awesome
        id: "Python",
        skillLevel: 40,
        color: "yellow",
    },
    {
        icon: faPhp, // You need to import this from Font Awesome
        id: "PHP",
        skillLevel: 60,
        color: "lime",
    },
 {
     icon: faCloud, // You need to import this from Font Awesome or define a suitable icon for RESTful API
     id: "RESTful API",
     skillLevel: 60,
     color: "teal",
 }
 ]
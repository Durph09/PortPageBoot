
import { useRef } from "react";
import TFTHome from "../images/TFTHome.png";
import TFTFAQ from "../images/TFTFAQ.png";
import TFTCart from "../images/TFTCart.png"
import PortLanding from "../images/PortLanding.png";
import PortContact from "../images/PortContact.png";
import FloatBox2 from "./FloatBox2";
import PortProjects from "../images/PortProjects.png"




  const ProjectList =() =>{ 
    
    const projects = [
      {
        id: "TFT",
        src: TFTFAQ,
        alt: "Top Form Tea",
        selected: () => window.open("https://example.com", "_blank"),
        ref: useRef(),
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
        dx: -1,
        dy: 2,
        images: [TFTHome, TFTFAQ, TFTCart],
        text: "Top Form Tea is a fully functional e-commerce site built from scratch. Primarily developed with React, it features a custom-built cart with all state managed client-side.", 
        codeLink: 'https://github.com/Durph09/TopFormTea1',
        siteLink: 'https://durph09.github.io/TopFormTea1/',
      },
    
      {
        id: "Port",
        src: PortLanding,
        alt: "Portfolio Landing Page",
        selected: () => window.open("https://example.com", "_blank"),
        ref: useRef(),
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
        dx: -2,
        dy: -2,
        images: [PortLanding, PortContact, PortProjects],
        text: 'This portolio page is a place where I experiment with new tech and libraries. The site is hosted on Firebase and constructed primarily with React and many other libraries / Frameworks.', 
        codeLink: 'https://github.com/Durph09/PortPageBoot',
        siteLink: 'https://conormahaney.com/',

      },
    ];
    
    
    
    
    
    
  
  return (
    
    <FloatBox2 projects ={projects} />
  );
  
  };

  export default ProjectList;
  
  
  
  
  




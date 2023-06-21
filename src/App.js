import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { useState } from "react";
import Image from "react-bootstrap/Image";


import ContactMeBS from "./components/AltLandingPage/ContanctMe/ContactMeBS";
import thumbPic from "./components/images/thumbPic.jpg";
import Skills from "./components/AltLandingPage/Skills/Skills";
import AboutMe from "./components/AltLandingPage/aboutMePage/AboutMe";
import StarsBg from "./components/AltLandingPage/Shared/StarsBg";
import "./components/AltLandingPage/Shared/LandingFrame.css";
import Services from "./components/AltLandingPage/Services/Services";
import FloatingProjects from "./components/AltLandingPage/Portfolio/FloatingProjects";
import Tech from "./components/AltLandingPage/Shared/Tech";
import "./App.css";
import CoolStuff from "./components/AltLandingPage/CoolStuff/CoolStuff";


const App = () => {


 
  const [key, setKey] = useState('first');
  
  const handleSelect = (eventKey) => {
    setKey(eventKey);
    console.log(`key is set to ${key}`)
  };


  return (
<div>
    <div className="main">

  <Tab.Container defaultActiveKey="first" activeKey={key} onSelect={handleSelect}>
    
    
   
      <Container className="navbar1">
       <Image roundedCircle thumbnail src={thumbPic} className="image-thumb1" />
        
        
          <Nav className=" navLinks" variant="pills" fill>
               
          
            <Nav.Item>
              <Nav.Link className="link-light fs-4 fw-semibold"  eventKey="first">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="link-light fs-4 fw-semibold" eventKey="aboutMe">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="link-light fs-4 fw-semibold" eventKey="skills">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="link-light fs-4 fw-semibold" eventKey="services">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="link-light fs-4 fw-semibold" eventKey="coolStuff">Cool Stuff</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="link-light fs-4 fw-semibold" eventKey="portfolio">Portfolio</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="link-light fs-4 fw-semibold" eventKey="contactMe">Contact Me</Nav.Link>
            </Nav.Item>
          </Nav>
          
          
        
      </Container>
 
      <StarsBg />

      
         <Tab.Content className="w-100 this-is-tab-content">
            <Tab.Pane className=" w-100 first-tab" eventKey="first"><h1>Hi, I'm Conor, Front End Developer</h1><Tech/></Tab.Pane>
            <Tab.Pane eventKey="portfolio"><FloatingProjects /></Tab.Pane>
            <Tab.Pane eventKey="contactMe"><ContactMeBS /></Tab.Pane>
            <Tab.Pane  className="h-100 w-100" eventKey="skills"><Skills /></Tab.Pane>
            <Tab.Pane  className="h-100 w-100" eventKey="aboutMe"><AboutMe /></Tab.Pane>
            <Tab.Pane  className="h-100 w-100" eventKey="services"><Services setKey={setKey} /></Tab.Pane>
            <Tab.Pane  className="h-100 w-100" eventKey="coolStuff"><CoolStuff /></Tab.Pane>

          </Tab.Content>
       
       
     
      </Tab.Container>
      
    </div>
    
    
    </div>
  );
};

export default App;

import Tech from "./Tech";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import FloatingProjects from "../Portfolio/FloatingProjects";
import ContactMeBS from "../ContanctMe/ContactMeBS";
import Image from "react-bootstrap/Image";
import thumbPic from "../images/thumbPic.jpg";
import Skills from "../Skills/Skills";
import AboutMe from "../aboutMePage/AboutMe";
import StarsBg from "../../StarsBg";
import "./LandingFrame.css";
import Services from "../Services/Services";
import { useState } from "react";
import Container from "react-bootstrap/Container";


const LandingFrame = () => {
 
  const [key, setKey] = useState('first');
  
  const handleSelect = (eventKey) => {
    setKey(eventKey);
    console.log(`key is set to ${key}`)
  };


  return (

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
          </Nav>
          
          
        
      </Container>
 
      
<StarsBg />
      
 
       

       
         <Tab.Content className="w-100 this-is-tab-content">
            <Tab.Pane className="h-100 w-100" eventKey="first"><h1>Hi, I'm Conor and I like building cool stuff</h1><Tech/></Tab.Pane>
            <Tab.Pane eventKey="portfolio"><FloatingProjects /></Tab.Pane>
            <Tab.Pane eventKey="contactMe"><ContactMeBS /></Tab.Pane>
            <Tab.Pane  className="h-100 w-100" eventKey="skills"><Skills /></Tab.Pane>
            <Tab.Pane  className="h-100 w-100" eventKey="aboutMe"><AboutMe /></Tab.Pane>
            <Tab.Pane  className="h-100 w-100" eventKey="services"><Services setKey={setKey} /></Tab.Pane>
            <Tab.Pane  className="h-100 w-100" eventKey="coolStuff"><Skills /></Tab.Pane>

          </Tab.Content>
       
       
     
      </Tab.Container>
    </div>
  );
};

export default LandingFrame;

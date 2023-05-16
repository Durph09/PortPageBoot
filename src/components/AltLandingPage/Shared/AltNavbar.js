import Navbar from "react-boostrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import ProjectSection3 from "../homePage/project-section/ProjectSection3";
import ContactMeBS from "../homePage/contact-section/ContactMeBS";
import Image from "react-bootstrap/Image";
import thumbPic from "../images/thumbPic.jpg";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Tech
import StarsBg from "./StarsBg";
import "./LandingFrame.css";
import Services from "./Services";
import { useState } from "react";


const AltNavbar = () => {
    const [key, setKey] = useState('first');
  
  const handleSelect = (eventKey) => {
    setKey(eventKey);
    console.log(`key is set to ${key}`)
  };

    return(
        <Tab.Container defaultActiveKey="first" activeKey={key} onSelect={handleSelect}>
        {/* <Row className="align-items-center h-100 top-0 start-0 w-100 text-warning"> */}
  
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Image roundedCircle thumbnail src={thumbPic} className="image-thumb" />
          
            <h1>
              Hi, </h1> 
              <h1>I'm Conor</h1>
            <h1>Web Dev</h1>
  
            
          
            <Nav variant="pills"   
            className="  flex-md-column"
            >
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
            </Navbar>
         {/* </Col> */}
  <div className="content-pane">
          {/* <Col  xs={12} md={10} className="displaySection m-0 p-0 align-self-start " style={{height: "90%"}}> */}
           <Tab.Content className="w-100 this-is-tab-content">
              <Tab.Pane className="h-100 w-100" eventKey="first"><Tech/></Tab.Pane>
              <Tab.Pane eventKey="portfolio"><ProjectSection3 /></Tab.Pane>
              <Tab.Pane eventKey="contactMe"><ContactMeBS /></Tab.Pane>
              <Tab.Pane  className="h-100 w-100" eventKey="skills"><Skills /></Tab.Pane>
              <Tab.Pane  className="h-100 w-100" eventKey="aboutMe"><AboutMe /></Tab.Pane>
              <Tab.Pane  className="h-100 w-100" eventKey="services"><Services setKey={setKey} /></Tab.Pane>
              <Tab.Pane  className="h-100 w-100" eventKey="coolStuff"><Skills /></Tab.Pane>
  
            </Tab.Content>
            </div>
        
        
        </Tab.Container>
        
      
     
    )
    }

    export default AltNavbar 
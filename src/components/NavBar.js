import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,

} from "@fortawesome/free-brands-svg-icons"
import { useRef, useEffect } from "react";



const socials = [
    {
      icon: faEnvelope,
      url: "mailto: Crmahaneyweb@gmial.com",
    },
    {
      icon: faGithub,
      url: "https://github.com/Durph09",
    },
    {
      icon: faLinkedin,
      url: "www.linkedin.com/in/conor-mahaney-3a74b4204",
    },
    
  ];

  
   

export default function NavBar() { 
    const headerRef = useRef(null); 
    
    useEffect(() => { 
      let prevScrollPos = window.scrollY; 
    
      const handleScroll = () => { 
        const currentScrollPos = window.scrollY; 
        const headerElement = headerRef.current; 
        if (!headerElement) { 
          return; 
        } 
        if (prevScrollPos > currentScrollPos) { 
          headerElement.style.transform = "translateY(0)"; 
        } else { 
          headerElement.style.transform = "translateY(-200px)"; 
        } 
        prevScrollPos = currentScrollPos; 
      } 
      window.addEventListener('scroll', handleScroll) 
    
      return () => { 
        window.removeEventListener('scroll', handleScroll) 
      } 
    }, []); 
    
    const handleClick = (anchor) => () => { 
      const id = `${anchor}-section`; 
      const element = document.getElementById(id); 
      if (element) {
        const navbarHeight = headerRef.current.clientHeight;
        const elementPosition = element.offsetTop - navbarHeight;
        element.scrollIntoView({
          behavior: "smooth",
          top: elementPosition,
          block: "start"
        });
    };
  }; 
  return (


    
    
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" ref={headerRef} 
    style={{
      position:"fixed", 
      top:"0", 
      left:"0",
      right:"0", 
      translateY:"0", 
      transitionProperty:"transform", 
      transitionDuration:".3s", 
      transitionTimingFunction:"ease-in-out"}} 
    >
    
       
          {socials.map(({ icon, url }) => ( 
                <Navbar.Brand className="mx-2"
                  key={url} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                > 
                  <FontAwesomeIcon icon={icon} size="2x" key={url} /> 
                </Navbar.Brand> 
              ))}
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#projects" onClick={handleClick("projects")}>Projects</Nav.Link>
            <Nav.Link href="#contact" onClick={handleClick("contact")}>Contact Me</Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
      
    </Navbar>
      
    
  );
}

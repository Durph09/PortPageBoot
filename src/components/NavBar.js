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
import { NavbarBrand } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";


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
        element.scrollIntoView({ 
          behavior: "smooth", 
          block: "start", 
        }); 
      } 
    }; 
  return (


    
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
       
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
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    
  );
}

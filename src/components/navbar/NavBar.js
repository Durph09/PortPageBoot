import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
    url: "https://www.linkedin.com/in/conor-mahaney-3a74b4204",
  },
];

export default function NavBar() {
 
  return (
    <Container >
    <Navbar bg="warning"className="rounded-pill p-2">
      <Container>
        {socials.map(({ icon, url }) => (
          <Navbar.Brand
            className=""
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon} size="3x" key={url} inverse border/>
          </Navbar.Brand>
        ))}
       
      </Container>
    </Navbar>
    </Container>
  );
}

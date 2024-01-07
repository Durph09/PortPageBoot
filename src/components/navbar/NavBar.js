
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../../App.css";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: Crmahaneyweb@gmial.com",
    label: "Email Me",
  },
  {
    icon: faGithub,
    url: "https://github.com/Durph09",
    label: "My Github",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/conor-mahaney-3a74b4204",
    label: "Linkedin",
  },
];

const handleClick = (id) => () => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      className="d-flex justify-content-between overflow-hidden"
      fixed="top"
    >
      <div className="d-flex px-3">
        {socials.map(({ icon, url }) => (
          <Navbar.Brand
            className=" navBrand  secondText"
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={icon}
              size="2x"
              key={url}
              className="w-50 secondText"
            />
          </Navbar.Brand>
        ))}
      </div>

      <div className="ms-auto">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="secondText"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-light">
          <Nav>
            <button className="navButton" onClick={handleClick("aboutMe")}>
              About Me
            </button>
            <button className="navButton" onClick={handleClick("projects")}>
              Portfolio
            </button>
            <button className="navButton" onClick={handleClick("contactMe")}>
              Contact Me
            </button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

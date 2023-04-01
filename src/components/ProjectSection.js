import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";
import portfolioProj from "./images/portfolioProj.png";

import Row from "react-bootstrap/Row";
import { Fade, Slide } from "react-awesome-reveal";
import { useMediaQuery } from "@mui/material";

const projects = [
  {
    title: "Top Form Tea Ecommerce",
    description:
      "An ecommerce site built in React and React-Bootstrap",
    src: "",
    codeLink: "https://github.com/Durph09/TopFormTea1",
    pageLink: "https://durph09.github.io/TopFormTea1/",
  },
  {
    title: "Portfolio Page",
    description:
      "Built using React, React-Bootstrap, Formik, Yup, and several other libraries",
    src: portfolioProj,
    codeLink: "https://github.com/Durph09/TopFormTea1",
    pageLink: "https://durph09.github.io/TopFormTea1/",
  },
];



const ProjectSection = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  return (
    <Container
      fluid
      className=" 
      vh-100 
      text-light
      "
      
    >
      <Container>
        <h1>
        <Fade delay={1e3} cascade damping={0.3e-1}>
        . . . Featured Projects
            
          </Fade>
</h1>
        <Row className="gap-2 d-flex justify-content-evenly">
          {projects.map((project, index) => (
            <Col xs={10} md={5} key={project.title} className="my-2">
      {isSmallScreen ? (
        
          <ProjectCard
            title={project.title}
            description={project.description}
            src={project.src}
            pageLink={project.pageLink}
            codeLink={project.codeLink}
          />
        
      ) : (
        <Slide direction={index % 2 === 0 ? 'right' : 'left'}>
          <ProjectCard
            title={project.title}
            description={project.description}
            src={project.src}
            pageLink={project.pageLink}
            codeLink={project.codeLink}
          />
        </Slide>
      )}
    </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default ProjectSection;

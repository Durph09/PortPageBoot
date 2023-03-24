import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";
import portfolioProj from "./images/portfolioProj.png";
import TopFormTeaHome from "./images/TopFormTeaHome.png";
import Row from "react-bootstrap/Row";

const projects = [
  {
    title: "Top Form Tea Ecommerce",
    description:
      "An ecommerce site built in React, React-Bootstrap, and several other libraries",
    src: TopFormTeaHome,
    codeLink: "https://github.com/Durph09/TopFormTea1",
    pageLink: "https://durph09.github.io/TopFormTea1/",
  },
  {
    title: "Portfolio Page",
    description: "Built using React, React-Bootstrap, Formik, Yup, and several other libraries",
    src: portfolioProj,
    codeLink: "https://github.com/Durph09/TopFormTea1",
    pageLink: "https://durph09.github.io/TopFormTea1/",
  },
];

const ProjectSection = () => {
  return (
    <Container
      fluid
      className=" 
      vh-100 
      bg-gradient 
      text-light bg-success
      "
    >
    <Container>
      <h1 id="projects-section">Featured Projects</h1>

      <Row className="gap-2 d-flex justify-content-evenly">
        {projects.map((project) => (
          <Col xs={10} md={5} key={project.title} className="my-2">
            <ProjectCard
              title={project.title}
              description={project.description}
              src={project.src}
              pageLink={project.pageLink}
              codeLink={project.codeLink}
            />
          </Col>
        ))}
      </Row></Container>
    </Container>
  );
};

export default ProjectSection;

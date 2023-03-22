import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import thumbnail from "./images/thumbPic.jpg";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";
import portfolioProj from "./images/portfolioProj.png";
import TopFormTeaHome from "./images/TopFormTeaHome.png";
import Row from "react-bootstrap/Row";

const projects = [
  {
    title: "Top Form Tea Ecommerce",
    description:
      "An ecommerce site build mainly in react with several other libraries as well",
    src: TopFormTeaHome,
    codeLink: "https://github.com/Durph09/TopFormTea1",
    pageLink: "https://durph09.github.io/TopFormTea1/",
  },
  {
    title: "Portfolio Page",
    description: "Build using react and the Chakra with several css animations",
    src: portfolioProj,
    codeLink: "https://github.com/Durph09/TopFormTea1",
    pageLink: "https://durph09.github.io/TopFormTea1/",
  },
];

const ProjectSection = () => {
  return (
    <Container
      fluid
      className="min-vw-100 min-vh-100 mw-100 mh-100 
      bg-gradient 
      text-light bg-success"
    >
      <Container className="mb-2 d-flex flex-row">
        <h1>Featured Projects</h1>
      </Container>
      <Row>
        {" "}
        {projects.map((project) => (
          <Col sm={12} md={6} key={project.title}>
            {" "}
            <ProjectCard
              title={project.title}
              description={project.description}
              src={project.src}
              pageLink={project.pageLink}
              codeLink={project.codeLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectSection;

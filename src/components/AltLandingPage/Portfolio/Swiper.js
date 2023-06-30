import { ProjectsList } from "./ProjectsList";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useState, useRef, useEffect } from "react";
import "./FloatingProjects.css";
import ListGroup from "react-bootstrap/ListGroup";
import { register } from "swiper/element/bundle";
import "swiper/css";
import { Fade } from "react-awesome-reveal";

register();
const FloatingProjects = (ProjectList) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProdject] = useState(null);

  return (
    <div
      id="projects"
      className=" d-flex-col vh-100 vw-100 swiperMain position-relative overflow-hidden align-items-center justify-content-evenly"
    >
      <h1 className="text-warning mb-4 py-3 mx-1">
        <Fade delay={1e3} cascade damping={0.3e-1}>
          Portfolio Projects
        </Fade>
      </h1>

      <swiper-container
        class="mySwiper"
        pagination="true"
        grab-cursor="true"
        centered-slides="true"
        spacebetween
        slides-per-view="auto"
        loop="true"
      >
        {ProjectsList.map((project) => (
          <swiper-slide
            key={project.id}
            onClick={() => {
              setSelectedProdject(project);
              setShowModal(true);
            }}
          >
            <span className="overlay-text">{project.id}</span>

            <img
              src={project.src}
              alt={project.alt}
              className="project-image"
            />
          </swiper-slide>
        ))}

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject?.alt}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedProject && selectedProject.images && (
              <>
                <Carousel>
                  {selectedProject.images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt={`${selectedProject.alt} ${index + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <p className="mt-3">{selectedProject.text}</p>
                <a
                  href={selectedProject.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See the site➜
                </a>{" "}
                <br />
                <a
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See the code➜
                </a>
              </>
            )}
          </Modal.Body>
        </Modal>
      </swiper-container>
    </div>
  );
};

export default FloatingProjects;

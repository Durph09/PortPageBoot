import {ProjectsList} from "./ProjectsList";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from "react";
import "./FloatingProjects.css";


const FloatingProjects= (ProjectList) => {
 const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProdject] = useState(null);
    return (

        <div className="project-container ">
       {ProjectsList.map((project) => (
        <div
        className="projects m-3"
          key={project.id}
          as="Button"
          onClick={()=> {
            setSelectedProdject(project);
            setShowModal(true);
          }}
        >
        <OverlayTrigger
  trigger={['hover', 'focus']}
  overlay={(props) => (
    <Tooltip id={`tooltip-${project.id}`} {...props}>
      <strong>{project.id}</strong>
    </Tooltip>
  )}
>
          <img src={project.src} alt={project.alt} className="project-image" /></OverlayTrigger>
        </div>
        
      ))}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>{selectedProject?.alt}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  {selectedProject && selectedProject.images &&  (
      <>
        <Carousel>
          {selectedProject.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image} alt={`${selectedProject.alt} ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
        <p className="mt-3">{selectedProject.text}</p>
        <a href={selectedProject.siteLink} target='_blank' rel='noopener noreferrer'>See the site➜</a> <br/>
        <a href={selectedProject.codeLink} target='_blank' rel='noopener noreferrer'>See the code➜</a>
      </>
    )}
  </Modal.Body>
</Modal>
      


      </div>

    )
}

export default FloatingProjects;
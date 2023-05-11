import { useEffect, useRef, useState } from "react";
import "./FloatBox2.css";
import StarsBg from "../../StarsBg";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const FloatBox2 = ({ projects }) => {
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(isPaused);
  const parentBoxRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProdject] = useState(null);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const parentBox = parentBoxRef.current;
    const transitionDelay = 30; // Adjust this value to control the delay

    const move = () => {
      setTimeout(() => {
        if (!isPausedRef.current) {
          projects.forEach((project, index) => {
            const childBox = project.ref.current;

            const maxMoveX = parentBox.clientWidth - childBox.clientWidth;
            const maxMoveY = parentBox.clientHeight - childBox.clientHeight;

            project.x += project.dx;
            project.y += project.dy;

            if (project.x < 0 || project.x > maxMoveX) project.dx = -project.dx;
            if (project.y < 0 || project.y > maxMoveY) project.dy = -project.dy;

            childBox.style.transform = `translate(${project.x}px, ${project.y}px)`;
          });
        }

        requestAnimationFrame(move);
      }, transitionDelay);
    };

    move();
  }, [projects]);


  return (
    <div
      ref={parentBoxRef}
      className="parentBox border-bottom border-warning"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <StarsBg />
      {projects.map((project) => (
        <div
          key={project.id}
          className="childBox"
          ref={project.ref}
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
          <img src={project.src} alt={project.alt} className="image" /></OverlayTrigger>
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
  );
};

export default FloatBox2;

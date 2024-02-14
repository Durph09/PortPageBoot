import { ProjectsList } from "./ProjectsList";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

import { useState, useEffect } from "react";
import "./FloatingProjects.css";

import { register } from "swiper/element/bundle";
import "swiper/css";


register();
const Swiper = (ProjectList) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProdject] = useState(null);

  // useEffect(() => {
  //   // now we need to assign all parameters to Swiper element// swiper parameters
  //   const swiperParams = {
  //     init: false,
  //     class: "mySwiper w-100",
  //     pagination: true,
     
  //     centeredSlides: false,
      
  //     spacebetween: true,
  //     loop: true,
  //     speed: 400,
  //     breakpoints: {
  //       480: {
  //         slidesPerView: 2,
  //         spaceBetween: 30,
  //         speed: 600,
  //       },
  //       // when window width is >= 640px
  //       768: {
  //         slidesPerView: 3,
  //         spaceBetween: 40,
  //         speed: 600
  //       },
  //       992: {
  //         slidesPerView: 3,
  //         spaceBetween: 60,
  //       },
  //     },
  //     on: {
  //       init() {
  //         // ...
  //       },
  //     },
  //   };

  //   let swiperEl = document.querySelector("swiper-container");
  //   if (swiperEl) {
  //     Object.assign(swiperEl, swiperParams);

  //     // and now initialize it
  //     swiperEl.initialize();
   
  //   }
  // }, []);

  return (
    <div
      id="projects"
      className=" d-flex-col vh-100 vw-100 swiperMain position-relative  align-items-center justify-content-evenly"
    >
      <h2 className="text-warning mb-4 py-3 mx-1">Portfolio Projects</h2>

      <swiper-container   pagination="true" pagination-clickable="true" navigation="true" speed="800" slides-per-view="auto"  >
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
                </a>
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

export default Swiper;

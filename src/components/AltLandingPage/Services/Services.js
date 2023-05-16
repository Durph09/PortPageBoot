import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel  from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ServiceCardModal from "./ServiceCardModal";


import Servicecards from "./Servicecards";
import { ServicesObject } from "./ServicesObject";

const Services = ({setKey}) => {
    const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

    return (
        <Row>
        {ServicesObject.map(service => (
            <Col md={4} sm={12} key={service.id}>
            <div as="button"  onClick={() => {
                setSelectedService(service);
                setShowModal(true);
            }}>
            <Servicecards  
            image1={service.image1} 
            image2={service.image2} 
            image3={service.image3}
            image1Alt={service.image1Alt} 
            image2Alt={service.image2Alt} 
            image3Alt={service.image3Alt} 
            id={service.id} 
            bodyText={service.bodyText}   
            buttonText={service.buttonText}
            handleClick={service.handleClick} 
              
/></div>
            </Col>
        ))}
        {selectedService && (

            <ServiceCardModal showModal={showModal} setShowModal={setShowModal} selectedService={selectedService} setKey={setKey}/>)}

        </Row>
    );
};

export default Services;
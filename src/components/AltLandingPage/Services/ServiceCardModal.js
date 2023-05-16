import React from 'react';
import { Modal, Card, Carousel, Button } from 'react-bootstrap';

const ServiceCardModal = ({ showModal, setShowModal, selectedService, setKey }) => {
    if (!selectedService) {
        return null;
    }

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{selectedService.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card className="m-3">
                    <Carousel className=''>
                        <Carousel.Item><img className="w-100" src={selectedService.image1} alt={selectedService.image1Alt}/></Carousel.Item>
                        <Carousel.Item><img className="w-100" src={selectedService.image2} alt={selectedService.image2Alt}/></Carousel.Item>
                        <Carousel.Item><img className="w-100" src={selectedService.image3} alt={selectedService.image3Alt}/></Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title className='fw-bold text-dark'>{selectedService.id}</Card.Title>
                        {selectedService.bodyText}
                        <Button onClick={() => {setKey('contactMe'); console.log("setKey initialized"); setShowModal(false) }}>{selectedService.buttonText}</Button> 
                    </Card.Body>
                </Card>
            </Modal.Body>
        </Modal>
    );
};

export default ServiceCardModal;

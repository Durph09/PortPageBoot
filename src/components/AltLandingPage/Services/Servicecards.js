import Carousel from 'react-bootstrap/Carousel';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ServiceCard.css"


const Servicecards = ({id, image1, image1Alt, image2, image2Alt, image3, image3Alt, bodyText, buttonText, handleClick}) => {

    return (
        <Card className="m-3 serviceCard">
            <Carousel className=''>
                <Carousel.Item><img className="w-100" src={image1} alt={image1Alt}/></Carousel.Item>
                <Carousel.Item><img className="w-100" src={image2} alt={image2Alt}/></Carousel.Item>
                <Carousel.Item><img className="w-100" src={image3} alt={image3Alt}/></Carousel.Item>
            </Carousel>
            <Card.Body>
                <Card.Title className='fw-bold text-dark'>{id}</Card.Title>
                {/* <Card.Text>{bodyText}</Card.Text>
                <Button onClick={handleClick}>{buttonText}</Button> */}
            </Card.Body>
        </Card>

    )
}

export default Servicecards;
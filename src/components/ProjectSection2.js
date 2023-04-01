import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useMediaQuery } from "@mui/material";
import StarsBg from "./StarsBg";
import { tftList, spaceList1, spaceList2, spaceList3, spaceList4,
spaceList5 } from "./ProjectList";
import Carousel from "react-bootstrap/Carousel"
import Card from "react-bootstrap/Card"



const ProjectSection2 = () => {
 
  return (
    <div className=" vh-100 text-warning" style={{overflow:"hidden"}}>
    <StarsBg/>
    <h1>Featured Projects</h1>
    
    <Row className="d-flex justify-content-center align-items-center ">
    
    
    <Col md={8} xs={11} className="gap-2">
    <Card  className=" text-dark border-0 h-100">
    <Carousel>
        {tftList.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={item.src} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      
      <Card.Body>
        <Card.Title>Top Form Tea Inc.</Card.Title>
        <Card.Text>
        An ecommerce site built in React and React-Bootstrap
        </Card.Text>
        <Card.Link href="https://github.com/Durph09/TopFormTea1" target="_blank">See the page ➜ </Card.Link>
        <Card.Link href="https://durph09.github.io/TopFormTea1/ "target="_blank">See the Code ➜</Card.Link>
      </Card.Body>
    </Card>
      
      
      </Col>
      
      </Row>

      

      

      
      
    </div>
  );
};

export default ProjectSection2;

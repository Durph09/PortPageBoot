
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"
import thumbnail from "./images/thumbPic.jpg"
import Col from "react-bootstrap/Col";


const LandingSection = ()=> {
  return (
    <Container fluid className="vw-100 vh-100  bg-gradient d-flex justify-content-center align-items-center text-light" style={{backgroundColor: "rgb(42,67,101)"}} >
    <Col>
    <Image roundedCircle fluid src={thumbnail}  style={{ maxWidth: "200px"}} alt="pic of Conor Mahaney" />
    <h4> Hello, I'm Conor</h4>
    <h1>A frontend developer specialesed in React</h1>
      </Col>
        
    
    </Container>
  );
};

export default LandingSection;
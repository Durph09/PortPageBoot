import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import thumbnail from "./images/thumbPic.jpg";
import Col from "react-bootstrap/Col";
import { Fade, Slide, Roll, JackInTheBox } from "react-awesome-reveal";

const LandingSection = () => {
  return (
    <Container
      fluid
      className="vw-100 vh-100  bg-gradient d-flex justify-content-center align-items-center text-light text-center p-0"
      style={{ backgroundColor: "rgb(42,67,101)" }}
    >
      <Col>
        <Slide direction="left">
          <Image
            roundedCircle
            fluid
            src={thumbnail}
            style={{ maxWidth: "200px" }}
            alt="pic of Conor Mahaney"
          />
        </Slide>
        
          <h4> Hello, I'm Conor</h4>
        
        <h1>
          {" "}
          <Fade delay={1e3} cascade damping={0.3e-1}>
            A frontend developer specialesed in React
          </Fade>
        </h1>
      </Col>
    </Container>
  );
};

export default LandingSection;

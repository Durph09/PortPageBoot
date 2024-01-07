import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "../../../App.css";

import thumbPic from "../../images/thumbPic.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AboutMe = () => {
  return (
    <Row
      className=" d-flex vw-100 vh-100  align-items-center justify-content-center position-relative "
      style={{ zIndex: 2 }}
      id="aboutMe"
    >
      
      <Col sm={12} md={6} className="d-flex ">
            <Image src={thumbPic} roundedCircle className="thumbPic m-auto " />
        </Col>
       
       <Col sm={12} md={6} className="d-flex text-center">
          <div className="textBG m-auto">
          <Container className="py-2">
            <h2 className="text-warning fs-1 ">
              Professional Ethos: <strong>Learn & Build</strong>
            </h2>
          </Container>
          <Container className="py-2">
            <p className="fs-2 primaryText font-weight-bold ">
              So much to learn and so much to build. I've specialized in
              understanding the MERN stack and using it to find that magical
              place where UI/UX, functionality, and performance meet.
            </p>

            <i>
              <p className="primaryText fw-bolder fs-5 text-center">
                If i'm not learning, I'm building
              </p>
            </i>
          </Container>
          </div>
      </Col>
    </Row>
  );
};

export default AboutMe;

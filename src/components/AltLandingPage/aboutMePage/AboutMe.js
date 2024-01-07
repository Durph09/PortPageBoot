import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "../../../App.css";

import thumbPic from "../../images/thumbPic.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AboutMe = () => {
  return (
    <div
      className=" d-flex text-center vw-100  align-items-center justify-content-center position-relative "
      style={{ zIndex: 2 }}
      id="aboutMe"
    >
      
      <Row className="h-75 d-flex align-items-center">
        <Col sm={5} xs={12} className="">
          <Container>
            <Image src={thumbPic} roundedCircle className=" thumbPic " />
          </Container>
        </Col>

        <Col sm={6} xs={12}>
          <div className="textBG">
          <Container className="py-2 text-start ">
            <h2 className="text-warning fs-1 ">
              Professional Ethos: <strong>Learn & Build</strong>
            </h2>
          </Container>
          <Container className="py-2 text-start">
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
    </div>
  );
};

export default AboutMe;

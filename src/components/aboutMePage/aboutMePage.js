import Col from "react-bootstrap/Col";
import thumbPic from "../images/thumbPic.jpg";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const AboutMePage = () => {
  return (
    <div className="vh-100" style={{ overflow: "hidden" }}>
      
      <Row
        className="align-items-center h-100 position-absolute top-0 start-0 w-25 text-warning"
        style={{ backgroundColor: "rgba(128, 128, 128, 0.5)" }}
      >
        <Col md={12} className="m-3 " style={{ zIndex: 0 }}>
        <Image roundedCircle thumbnail src={thumbPic} className="w-50" />
          <h1>
            Hi, <br /> I'm Conor
          </h1>
          <h1>Web Dev</h1>
          <Button variant="warning">More about me</Button>
          
        </Col>
      </Row>
      <div
        fluid
        className="position-absolute w-100 m-0 p-0"
        style={{
          height: "10%",
          bottom: 0,
          left: 0,

          backgroundColor: "rgba(128, 128, 128, 0.5)",
        }}
      ></div>
    </div>
  );
};

export default AboutMePage;
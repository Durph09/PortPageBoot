import Col from "react-bootstrap/Col";
import Tech from "./Tech";
import Row from "react-bootstrap/Row";

const LandingSection2 = () => {
  return (
    <div className="vh-100" style={{ overflow: "hidden" }}>
      <Tech />
      <Row
        className="align-items-center h-100 position-absolute top-0 start-0 w-40 text-warning"
        style={{ backgroundColor: "rgba(128, 128, 128, 0.5)" }}
      >
        <Col md={12} className="m-3 " style={{ zIndex: 0 }}>
          <h1>
            Hi, <br /> I'm Conor
          </h1>
          <h1>Web Dev</h1>
          <h6>Specializing in React</h6>
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

export default LandingSection2;

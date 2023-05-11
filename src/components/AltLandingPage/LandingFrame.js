import Col from "react-bootstrap/Col";
import Tech from "../homePage/landing-section/Tech";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const LandingFrame = () => {
//   const navigate = useNavigate();


//   const handleClick = (id) => () => {
    
//     const element = document.getElementById(id);
//     if (element) {
      
//       const elementPosition = element.offsetTop 
//       element.scrollIntoView({
//         behavior: "smooth",
//         top: elementPosition,
//         block: "start",
//       });
//     }
//   };

  return (
    <div className="vh-100" style={{ overflow: "hidden" }}>
      {/* <Tech /> */}
      <Row
        className="align-items-center h-100 position-absolute top-0 start-0 w-100 text-warning bg-dark"
        
      >
        <Col md={2} className="m-0 h-100 d-flex align-items-center justify-content-center flex-column position-absolute" style={{ zIndex: 0,backgroundColor: "rgba(128, 128, 128, 0.5)" }}>
          <h1>
            Hi, <br /> I'm Conor
          </h1>
          <h1>Web Dev</h1>
          <div className=" d-flex flex-column gap-3 w-75">
           <Button variant="warning">More about me</Button>
          <Button  variant="warning">Feature Projects</Button>
          <Button variant="warning" >Lets build</Button></div> 
        </Col>
        <Col className="displaySection h-100 m-0 p-0 "><Tech /></Col>
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

export default LandingFrame;

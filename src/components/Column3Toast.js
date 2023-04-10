import Toast from "react-bootstrap/Toast";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import devlogo from "./images/devlogo copy.png";
import "./Column3Toast.css";
import StarsBg from "./StarsBg";

function Column3Toast({headline1, headline2, headline3, bText1, bText2, bText3}) {
  const [showSummary, setSummary] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const toggleShowSummary = () => setSummary(!showSummary);
  const toggleShowTech = () => setShowTech(!showTech);
  const toggleShowFeatures = () => setShowFeatures(!showFeatures);

  return (
    <Row>
    <StarsBg />
      <Col md={4} className="mb-2">
        <Button variant= "warning" onClick={toggleShowSummary} className="mb-2 ">
          Summary of Site
        </Button>
        <Toast show={showSummary} onClose={toggleShowSummary}>
          <Toast.Header>
            <img
              src={devlogo}
              className="rounded me-2 toastImage"
              alt=""
            />
            <strong className="me-auto">{headline1}</strong>
            
          </Toast.Header>
          <Toast.Body className="text-dark">{bText1}
          </Toast.Body>
        </Toast>
      </Col>
      <Col md={4} className="mb-2">
        <Button variant= "warning" onClick={toggleShowTech} className="mb-2">
          Tech Stack
        </Button>
        <Toast show={showTech} onClose={toggleShowTech}>
          <Toast.Header>
            <img
              src={devlogo}
              className="rounded me-2 toastImage"
              alt=""
            />
            <strong className="me-auto">{headline2}</strong>
           
          </Toast.Header>
          <Toast.Body className="text-dark">{bText2}</Toast.Body>
        </Toast>
      </Col>
      <Col md={4} className="mb-2">
        <Button variant= "warning" onClick={toggleShowFeatures} className="mb-2">
          Site Features
        </Button>
        <Toast show={showFeatures} onClose={toggleShowFeatures}>
          <Toast.Header>
            <img
              src={devlogo}
              className="rounded me-2 toastImage"
              alt=""
            />
            <strong className="me-auto">{headline3}</strong>
            
          </Toast.Header>
          <Toast.Body className="text-dark">{bText3}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default Column3Toast;

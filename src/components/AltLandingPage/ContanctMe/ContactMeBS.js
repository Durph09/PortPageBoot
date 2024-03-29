import { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { TextInputBS, MyselectBS } from "./FormFeildBS";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SuccessModal from "./SuccessModal";
import { useState } from "react";
import StarsBg from "../Shared/StarsBg";
import { Fade, Slide } from "react-awesome-reveal";
import "./contactMe.css";

const ContactMeBS = () => {
  const [firstName, setFirstName] = useState("");

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const form = useRef();

  const sendEmail = (e, values) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b4h53ed",
        "template_kt1awy3",
        e.target,
        process.env.REACT_APP_EMAILJS_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(firstName);

          handleShowModal(firstName);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const schema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    comment: Yup.string()
      .min(25, "Must be at least 25 characters")
      .required("Required"),
  });

  return (
    <Container
      id="contactMe"
      fluid
      className="text-light text-warning m-0 p-0 contactBG"
    >
      <Container className=" text-warning py-5 z-3">
        <h1 className="py-4 my-4">
          <Fade delay={1e3} cascade damping={0.3e-1}>
            Lets Build Something
          </Fade>
        </h1>

        <Formik
          validationSchema={schema}
          onSubmit={(values) => {
            setFirstName(values.firstName);
            console.log(firstName);
            sendEmail(values);
          }}
          initialValues={{
            firstName: "",
            email: "",
            type: "hireMe",
            comment: "",
          }}
        >
          <Slide>
            <Form ref={form} onSubmit={sendEmail} id="form" name="form">
              <Row className="gap-2 d-flex justify-content-evenly">
                <Col md={6} xs={11} className="contactForm">
                  <TextInputBS
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Name"
                  />

                  <TextInputBS
                    label="email"
                    name="email"
                    type="email"
                    placeholder="email"
                  />
                  <MyselectBS label="Type of enquiry" name="type">
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">
                      Open source consultancy session
                    </option>
                    <option value="other">Other</option>
                  </MyselectBS>

                  <TextInputBS
                    label="comment"
                    name="comment"
                    type="text-area"
                    placeholder="comment"
                  />

                  <Button
                    size="lg"
                    type="submit"
                    variant="outline-light"
                    className="my-3"
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Slide>
        </Formik>

        <SuccessModal
          firstName={firstName}
          show={showModal}
          onHide={handleCloseModal}
        />
      </Container>
    </Container>
  );
};

export default ContactMeBS;

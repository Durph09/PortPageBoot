
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { Formik, Form} from "formik";
import { TextInputBS, MyselectBS } from "./FormFeildBS";
import  Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const formik = Formik
const ContactMeBS = () => {
  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_b4h53ed",
        "template_kt1awy3",
        form.current,
        "3hZ35UFoggevD4GCU"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
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
      fluid
      className="vw-100 vh-100 text-light text-start"
      style={{ backgroundColor: "#512da8" }}>
   
      <h1>Contact me</h1>
<Formik
    validationSchema={schema}
    onSubmit={(values) => sendEmail(values)}
    initialValues= {{
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",}}
      >


     <Form ref={form}>
     <Row>
          <Col md={6} xs={11}>
          <TextInputBS
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Name"
            />

            <TextInputBS
            label ="email"
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

            <Button type="submit" variant="outline-light">submit</Button>
            </Col>
          </Row></Form>
          </Formik> 
</Container>
           
   
   
  );
};

export default ContactMeBS;


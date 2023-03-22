
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { TextInput, Myselect } from "./FormFeild";

const formik = Formik
const ContactMe = () => {
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
    <>
   
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
          
          <TextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Name"
            />

            <TextInput
            label ="email"
            name="email"
            type="email"
            placeholder="email"
            />
            <Myselect label="Type of enquiry" name="type">
            <option value="hireMe">Freelance project proposal</option>
              <option value="openSource">
                Open source consultancy session
              </option>
              <option value="other">Other</option>
            </Myselect>

            <TextInput
            label="comment"
            name="comment"
            type="text-area"
            placeholder="comment" 
/>

            <button type="submit">submit</button>
          </Form>
          </Formik> 
</>
           
   
   
  );
};

export default ContactMe;

{/* <Container
      fluid
      className="vw-100 vh-100 text-light text-start"
      style={{ backgroundColor: "#512da8" }}
    ><Form className="ms-1" ref={form} onSubmit={handleSubmit}>
        <Col xs={10} md={6}>
          <Form.Group className="mb-3 ">
            <Form.Label>Name</Form.Label>
            <Field name="firstName" type='text'/>
              
            <Form.Control.Feedback>{errors.firstName}</Form.Control.Feedback>
          </Form.Group>






          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="bg-transparent"
              name="email"
              value={values.email}
              onChange={handleChange}
              isInvalid={!!errors.email && touched.email}
              
            />
            <Form.Control.Feedback>{errors.email}</Form.Control.Feedback>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          
          
          
          
          
          <Form.Group className="mb-3" >
            <Form.Label>Type of enquiry</Form.Label>
            <Form.Select
              aria-label="Type of enquiry"
              className="bg-transparent text-light"
              name="type"
              value={values.type}
              onChange={handleChange}
              
              
            >
              <option value="hireMe">Freelance project proposal</option>
              <option value="openSource">
                Open source consultancy session
              </option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>

          
          
          
          
          <Form.Group className="mb-3" >
            <Form.Label>Your message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="bg-transparent"
              id="comment"
              name="comment"
              onChange={handleChange}
              isInvalid={!!errors.comment && touched.comment}
              
            />
            <Form.Control.Feedback>{errors.comment}</Form.Control.Feedback>
          </Form.Group>

          
          
          
          
          <Button type="submit">
            Submit
          </Button>
        </Col>
      </Form>
      </Container>
    */}
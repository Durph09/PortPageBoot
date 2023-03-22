import { Formik, useField } from "formik";
import Form from "react-bootstrap/Form";

import * as Yup from "yup";

export const TextInputBS = ({ label, ...props }) => {
    const [field, meta] = useField(props);
  
    return (
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          {...field}
          {...props}
          isInvalid={meta.touched && meta.error}
        />
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      </Form.Group>
    );
  };

export const MyselectBS = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <Form.Group>
            <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
            <Form.Select {...field} {...props} />
            {meta.touched && meta.erra ? (
                <div className ="error">{meta.error}</div>
            ) : null}
        </Form.Group>
    );
};
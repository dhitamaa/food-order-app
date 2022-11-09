import { useState } from "react";
import { Form } from "react-bootstrap";

const InputForm = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, errMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <Form.Group className="mb-2" controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          {...inputProps}
          onChange={onChange}
          required
          onBlur={handleFocus}
          focused={String(focused)}
        />
        <span className="error-msg me-5">{errMessage}</span>
      </Form.Group>
    </>
  );
};

export default InputForm;

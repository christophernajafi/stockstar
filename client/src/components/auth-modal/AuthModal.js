import React, { useState } from "react";

// eslint-disable-next-line
import { Modal, Button, Form } from "react-bootstrap";

const AuthModal = props => {
  // eslint-disable-next-line
  const { show, onHide, handleClose } = props;

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const onChange = event => {
    setState({ [event.target.name]: event.target.value });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="listName">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="listDescription">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button
          block
          size="lg"
          // disabled={!(email && password)}
          type="submit"
          onClick={onHide}
        >
          Log In
        </Button>

        {/* <Button variant="primary" type="submit" onClick={onHide}>
          Log In
        </Button> */}

        {/* <Button variant="secondary" type="submit" onClick={onHide}>
          Cancel
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default AuthModal;

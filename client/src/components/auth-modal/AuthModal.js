import React from "react";

// eslint-disable-next-line
import { Modal, Button, Form } from "react-bootstrap";

const AuthModal = props => {
  // eslint-disable-next-line
  const { show, onHide, handleClose } = props;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Create List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="listName">
          <Form.Label>List Name</Form.Label>
          <Form.Control type="text" placeholder="Enter list name" />
        </Form.Group>
        <Form.Group controlId="listDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter a description" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={onHide}>
          Save
        </Button>
        <Button variant="secondary" type="submit" onClick={onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthModal;

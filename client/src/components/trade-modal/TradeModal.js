import React, { useState } from "react";
// eslint-disable-next-line
import { Modal, Button, Form } from "react-bootstrap";

const TradeModal = props => {
  // eslint-disable-next-line
  const { show, onHide, handleClose } = props;

  const [formState, setFormState] = useState({
    type: "",
    quantity: null,
    stockSymbol: "",
    price: null
  });

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // eslint-disable-next-line
    props.history.push("/portfolio");
    console.log("formState: ", formState);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Trade</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="stockSymbol">
          <Form.Label>Buy</Form.Label>
          <Form.Control
            name="stockSymbol"
            type="text"
            placeholder="Enter ticker symbol"
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            name="quantity"
            type="text"
            placeholder="Enter quantity"
          />
        </Form.Group>
        {/* <Form.Group controlId="stockSymbol">
          <Form.Label>Stock Symbol</Form.Label>
          <Form.Control
            name="stockSymbol"
            type="text"
            placeholder="Enter stock symbol"
          />
        </Form.Group> */}
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" type="text" placeholder="Enter price" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={onHide}>
          Buy
        </Button>
        <Button variant="secondary" type="submit" onClick={onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TradeModal;

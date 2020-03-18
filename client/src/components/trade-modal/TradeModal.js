import React, { useState } from "react";
// eslint-disable-next-line
import { Modal, Button, Form } from "react-bootstrap";

/*
  This component is not currently being used.
  I may use it in a future version of the application.
  It would replace the TradeForm component for small screen sizes,
  so that the user will not have to scroll down to make a trade.
  Instead they will be able to click on a button that opens the trade modal.
*/

const TradeModal = props => {
  // eslint-disable-next-line
  const { show, onHide, handleClose } = props;

  const [formState, setFormState] = useState({
    quantity: null,
    stockSymbol: ""
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
        <Modal.Title>Cash Balance: $</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="stockSymbol">
          <Form.Label>Ticker Symbol</Form.Label>
          <Form.Control
            name="stockSymbol"
            type="text"
            placeholder="Enter ticker symbol"
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Number of Shares</Form.Label>
          <Form.Control
            name="quantity"
            type="text"
            placeholder="Enter quantity"
          />
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

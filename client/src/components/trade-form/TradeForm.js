import React, { Fragment, useState } from "react";
import { Button, Form, Container } from "react-bootstrap";

import "./trade-form.css";

const TradeForm = props => {
  const [formState, setFormState] = useState({
    ticker: "",
    quantity: ""
  });

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // props.history.push("/portfolio");
    console.log("formState: ", formState);
  };

  // const { classes, userCashBalance, error } = this.props;

  const isValidQuantity =
    Number(formState.quantity) > 0 && !String(formState.quantity).includes(".");

  const isEmptyTicker = formState.ticker === "";

  return (
    <Fragment>
      <div className="trade-box">
        <Container>
          Cash Balance: $
          <br />
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="ticker">
              <Form.Label>Ticker Symbol</Form.Label>
              <Form.Control
                name="ticker"
                type="text"
                placeholder="Enter ticker symbol"
                onChange={handleChange}
                value={formState.ticker}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="quantity">
              <Form.Label>Number of Shares</Form.Label>
              <Form.Control
                name="quantity"
                value={formState.quantity}
                type="text"
                placeholder="Enter quantity"
                onChange={handleChange}
              />
            </Form.Group>
            {/* <button className="btn btn-primary">Buy</button> */}
            <Button type="submit">Buy</Button>
          </Form>
        </Container>
      </div>
    </Fragment>
  );
};

export default TradeForm;

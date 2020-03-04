import React, { Fragment, useState, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import axios from "axios";

import AuthContext from "../../context/AuthContext";
import "./trade-form.css";

const TradeForm = props => {
  const [formState, setFormState] = useState({
    ticker: "",
    quantity: "",
    transactionType: "BUY",
    error: null,
    cashBalance: null
  });

  useEffect(() => {
    getCashBalance();
  }, []);

  const { ticker, quantity, transactionType, error, cashBalance } = formState;

  const userId = 1;

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await axios.post(`api/users/${userId}/transactions`, {
        ticker,
        quantity,
        transactionType
      });
    } catch (error) {
      setFormState({
        ...formState,
        error: error.response.data
      });
    }
  };

  const getCashBalance = async userId => {
    // const { data } = await axios.get(`/api/users/${userId}`);
    const { data } = await axios.get(`/api/users/1`);
    console.log(data);
    const balance = Number(data.user.user.balance);
    console.log("b", balance);

    setFormState({
      ...formState,
      cashBalance: balance
    });
    console.log("state", formState);
    console.log("cash: ", cashBalance);
  };

  const isValidQuantity =
    Number(formState.quantity) > 0 && !String(formState.quantity).includes(".");

  const isEmptyTicker = formState.ticker === "";

  return (
    <Fragment>
      <Container>
        Cash Balance: $
        {cashBalance &&
          cashBalance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}
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
          <Button type="submit" disabled={!(quantity && ticker)}>
            Buy
          </Button>
        </Form>
        <p>{error}</p>
      </Container>
    </Fragment>
  );
};

export default TradeForm;

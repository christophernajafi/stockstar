import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";

import AuthContext from "../../context/AuthContext";
import "./trade-form.css";

/*
  This component is a function component version of TradeForm.js
  It is not currently being used.
*/

// Child component of Portfolio
const TradeForm = props => {
  const authContext = useContext(AuthContext);

  const [tradeFormState, setTradeFormState] = useState({
    ticker: "",
    quantity: 1
  });

  const { ticker, quantity } = tradeFormState;

  const handleSubmit = async event => {
    event.preventDefault();
    setTradeFormState({ ...tradeFormState, quantity: 1, ticker: "" });
    // adding a transaction handled in parent component
    await props.onSubmit(ticker, Number(quantity), "Buy");
  };

  const { userCashBalance, error } = props;
  const validQuantity = Number(quantity) > 0 && !String(quantity).includes(".");
  const emptyTicker = ticker === "";

  return (
    <div className="trade-box">
      <h5 className="text-center">
        Cash Balance: $
        {userCashBalance.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}
      </h5>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="ticker">
          <Form.Label>Ticker Symbol</Form.Label>
          <Form.Control
            name="ticker"
            type="text"
            placeholder="Enter ticker symbol"
            onChange={event =>
              setTradeFormState({
                ...tradeFormState,
                ticker: event.target.value
              })
            }
            value={ticker}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="quantity">
          <Form.Label>Number of Shares</Form.Label>
          <Form.Control
            name="quantity"
            value={quantity}
            type="text"
            placeholder="Enter quantity"
            onChange={event =>
              setTradeFormState({
                ...tradeFormState,
                quantity: event.target.value
              })
            }
          />
        </Form.Group>
        <div className="text-center">
          <Button type="submit" disabled={!validQuantity || emptyTicker}>
            Buy
          </Button>
        </div>
        {error && (
          <p className="text-center trade-error text-danger">
            {" "}
            {error.response.data}{" "}
          </p>
        )}
      </Form>
    </div>
  );
};

export default TradeForm;

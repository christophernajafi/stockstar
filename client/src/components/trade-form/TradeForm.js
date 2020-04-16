import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import AuthContext from "../../context/AuthContext";
import "./trade-form.css";

// Child component of Portfolio
class TradeForm extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      ticker: "",
      quantity: 1,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ quantity: 1, ticker: "" });
    // adding a transaction handled in parent component
    await this.props.onSubmit(
      this.state.ticker,
      Number(this.state.quantity),
      "Buy"
    );
  };

  render() {
    const { userCashBalance, error } = this.props;
    const validQuantity =
      Number(this.state.quantity) > 0 &&
      !String(this.state.quantity).includes(".");
    const emptyTicker = this.state.ticker === "";

    return (
      <div className="trade-box">
        <h5 className="text-center">
          Cash Balance: $
          {userCashBalance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h5>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="ticker">
            <Form.Label>Ticker Symbol</Form.Label>
            <Form.Control
              name="ticker"
              type="text"
              placeholder="Enter ticker symbol"
              onChange={(event) =>
                this.setState({
                  ...this.state,
                  ticker: event.target.value.toUpperCase(),
                })
              }
              value={this.state.ticker}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="quantity">
            <Form.Label>Number of Shares</Form.Label>
            <Form.Control
              name="quantity"
              value={this.state.quantity}
              type="text"
              placeholder="Enter quantity"
              onChange={(event) =>
                this.setState({
                  ...this.state,
                  quantity: event.target.value,
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
  }
}

export default TradeForm;

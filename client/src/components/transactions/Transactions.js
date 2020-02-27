import React, { Fragment } from "react";

const DUMMY_DATA = [
  {
    type: "BUY",
    ticker: "AAPL",
    shares: 100,
    price: 100.0
  },
  {
    type: "BUY",
    ticker: "AAPL",
    shares: 100,
    price: 100.0
  },
  {
    type: "BUY",
    ticker: "AAPL",
    shares: 100,
    price: 100.0
  },
  {
    type: "BUY",
    ticker: "AAPL",
    shares: 100,
    price: 100.0
  }
];

const Transactions = props => {
  return (
    <Fragment>
      <h1>Transactions</h1>
      {DUMMY_DATA.length && DUMMY_DATA.map()}
    </Fragment>
  );
};

export default Transactions;

import React, { Fragment, useEffect } from "react";

import TransactionsItem from "../transactions-item/TransactionsItem";

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

// stock, type, transaction date, shares, price

const transactions = DUMMY_DATA;

const Transactions = props => {
  const { transactions } = props;

  useEffect(() => {
    console.log(props.transactions);
  });

  return (
    <Fragment>
      <h1>Transactions</h1>
      {/* {transactions.length > 0 && transactions.map()} */}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    // searchResults: state.search.searchResults
    transactions: state.transactions.transactions
  };
};

export default Transactions;

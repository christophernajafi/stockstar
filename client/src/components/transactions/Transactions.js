import React, { Fragment, useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import axios from "axios";

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

const Transactions = props => {
  const [transactions, setTransactions] = useState([]);

  const userId = "1";

  const getTransactions = async userId => {
    try {
      // const { data } = await axios.get(`api/users/${userId}/transactions`);
      const { data } = await axios.get(`api/users/1/transactions`);

      console.log("transactions: ", data);

      console.log("state: ", transactions);

      setTransactions(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    // <Fragment>
    //   <h1>/h1>
    //   {/* {transactions.length > 0 && transactions.map()} */}
    // </Fragment>

    <Container className="portfolio-container">
      <h1>Transactions</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Type</th>
            <th>Transaction Date</th>
            <th>Shares</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 &&
            transactions.map(item => {
              console.log(item);
              return <TransactionsItem key={item.id} data={item} />;
            })}
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    // searchResults: state.search.searchResults
    transactions: state.transactions.transactions
  };
};

export default Transactions;

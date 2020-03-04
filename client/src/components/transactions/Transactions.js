import React, { Fragment, useState, useEffect, useContext } from "react";
import { Button, Container, Table } from "react-bootstrap";
import axios from "axios";

import AuthContext from "../../context/AuthContext";
import TransactionsItem from "../transactions-item/TransactionsItem";
import "./transactions.css";

// stock, type, transaction date, shares, price

const Transactions = props => {
  const [transactions, setTransactions] = useState([]);

  const authContext = useContext(AuthContext);
  const { userId, authorize } = authContext;

  console.log(typeof userId);

  console.log(userId);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async userId => {
    try {
      // const { data } = await axios.get(
      //   `api/users/${userId.toString()}/transactions`
      // );
      const { data } = await axios.get(`api/users/1/transactions`);

      console.log("transactions: ", data);

      setTransactions(data);

      console.log("state: ", transactions);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="transactions-container">
      <h2 className="text-center">Transactions</h2>

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

export default Transactions;

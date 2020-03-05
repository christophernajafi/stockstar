import React, { useState, useEffect, useContext } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";

import AuthContext from "../../context/AuthContext";
import TransactionsItem from "../transactions-item/TransactionsItem";
import "./transactions.css";

const Transactions = props => {
  const authContext = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);

  const { userId } = authContext;

  useEffect(() => {
    getTransactions(userId);
  }, [userId]);

  const getTransactions = async userId => {
    try {
      const { data } = await axios.get(`api/users/${userId}/transactions`);

      setTransactions(data);
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
              // console.log(item);
              return <TransactionsItem key={item.id} data={item} />;
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Transactions;

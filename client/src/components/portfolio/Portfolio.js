import React, { Fragment, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import TradeModal from "../trade-modal/TradeModal";
import PortfolioItem from "../portfolio-item/PortfolioItem";

const DUMMY_DATA = [
  {
    ticker: "AAPL",
    shares: 100,
    price: 100.0
  },
  {
    ticker: "AAPL",
    shares: 100,
    price: 100.0
  },
  {
    ticker: "AAPL",
    shares: 100,
    price: 100.0
  },
  {
    ticker: "AAPL",
    shares: 100,
    price: 100.0
  }
];

const portfolio = DUMMY_DATA;

const Portfolio = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <Container>
      <h1>Portfolio ($ 9,000.00)</h1>
      {/* {portfolio.length > 0 && portfolio.map()} */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Shares</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AAPL</td>
            <td>100</td>
            <td>$3,000.00</td>
          </tr>
          <tr>
            <td>AAPL</td>
            <td>100</td>
            <td>$3,000.00</td>
          </tr>
          <tr>
            <td>AAPL</td>
            <td>100</td>
            <td>$3,000.00</td>
          </tr>
          <tr>
            <td>AAPL</td>
            <td>100</td>
            <td>$3,000.00</td>
          </tr>

          {/* <tr>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
        {/* <tfoot>
          <tr>
            <td></td>
            <td>Total</td>
            <td>$180</td>
          </tr>
        </tfoot> */}
      </Table>

      <h3>Cash - $5,000.00</h3>

      <Button onClick={handleShow}>Buy Stock</Button>

      <TradeModal show={show} onHide={handleClose} />
    </Container>
  );
};

export default Portfolio;

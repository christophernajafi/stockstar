import React, { Fragment } from "react";
import { Button, Container, Table } from "react-bootstrap";
import {
  setIntervalAsync,
  clearIntervalAsync
} from "set-interval-async/dynamic";

import PortfolioItem from "../portfolio-item/PortfolioItem";

const DUMMY_DATA = [
  {
    id: "1",
    ticker: "AAPL",
    shares: 100,
    price: 100.0
  },
  {
    id: "2",
    ticker: "AAPL",
    shares: 100,
    price: 100.0
  },
  {
    id: "3",
    ticker: "AAPL",
    shares: 100,
    price: 100.0
  },
  {
    id: "4",
    ticker: "AAPL",
    shares: 100,
    price: 100.0
  }
];

const portfolio = DUMMY_DATA;

const Portfolio = props => {
  return (
    <Container className="portfolio-container">
      <h1>Portfolio Value: $</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Shares</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.length > 0 &&
            portfolio.map(item => {
              // console.log(item);
              return <PortfolioItem key={item.id} data={item} />;
            })}

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
    </Container>
  );
};

export default Portfolio;

{
  /* <h3>Value - $9,000.00</h3> */
}
{
  /* <h3>Cash - $5,000.00</h3> */
}

{
  /* <Button onClick={handleShow}>Buy Stock</Button> */
}

{
  /* <TradeModal show={show} onHide={handleClose} /> */
}

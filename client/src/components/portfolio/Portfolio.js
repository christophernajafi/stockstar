import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";

import TradeModal from "../trade-modal/TradeModal";

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
    <Fragment>
      <h1>Portfolio</h1>
      {/* {portfolio.length > 0 && portfolio.map()} */}

      <Button onClick={handleShow}>Trade</Button>

      <TradeModal show={show} onHide={handleClose} />
    </Fragment>
  );
};

export default Portfolio;

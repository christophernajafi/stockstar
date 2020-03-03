import React, { Fragment, useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";

import TradeModal from "../trade-modal/TradeModal";
import PortfolioItem from "../portfolio-item/PortfolioItem";
import "./portfolio.css";
import PortfolioBox from "../portfolio-box/PortfolioBox";
import TradeForm from "../trade-form/TradeForm";

const Portfolio = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log("Hello from Portfolio!");
  }, []);

  return (
    <Fragment>
      <div className="portfolio-frame">
        <div className="portfolio-box">
          <PortfolioBox />
        </div>
        <div className="trade-box">
          <TradeForm />
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;

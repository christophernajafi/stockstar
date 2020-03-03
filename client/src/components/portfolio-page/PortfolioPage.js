import React, { Fragment, useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";

import "./portfolio-page.css";
import Portfolio from "../portfolio/Portfolio";
import TradeForm from "../trade-form/TradeForm";
// import TradeModal from "../trade-modal/TradeModal";

const PortfolioPage = props => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  useEffect(() => {
    console.log("Hello from Portfolio!");
  }, []);

  return (
    <Fragment>
      <div className="portfolio-frame">
        <div className="portfolio-box">
          <Portfolio />
        </div>
        <div className="trade-box">
          <TradeForm />
        </div>
      </div>
    </Fragment>
  );
};

export default PortfolioPage;

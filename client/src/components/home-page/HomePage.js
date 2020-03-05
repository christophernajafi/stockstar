import React from "react";

import "./home-page.css";

const HomePage = props => {
  return (
    <div className="home-page">
      <div className="badge-container">
        <div className="badge">
          <i className="fas fa-hand-holding-usd fa-5x"></i>
          <h3>Buy Stocks</h3>
        </div>
        <br />
        <div className="badge">
          <i className="fas fa-money-check-alt fa-5x"></i>
          <h3>View Portfolio</h3>
        </div>
        <br />
        <div className="badge">
          <i className="fas fa-file-invoice fa-5x"></i>
          <h3>View Transactions</h3>
        </div>
      </div>
      <br />
    </div>
  );
};

export default HomePage;

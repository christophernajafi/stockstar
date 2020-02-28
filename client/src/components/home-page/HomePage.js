import React, { Fragment, useState } from "react";
// import { connect } from "react-redux";

import "./home-page.css";

const HomePage = props => {
  return (
    <div className="home-page">
      <div className="greeting">
        <h1>StockStar</h1>
      </div>
      <div className="badge-container">
        <div className="badge">
          <i class="fas fa-hand-holding-usd fa-5x"></i>
          <h3>Purchase Stocks</h3>
        </div>
        <br />
        <div className="badge">
          <i class="fas fa-money-check-alt fa-5x"></i>
          <h3>View Your Portfolio</h3>
        </div>
        <br />
        <div className="badge">
          <i class="fas fa-file-invoice fa-5x"></i>
          <h3>View Your Transactions</h3>
        </div>
      </div>
      <br />
      <div className="greeting">
        <h2>Sign-In or Register to Get Started</h2>
      </div>
    </div>
  );
};

export default HomePage;
// export default connect(mapStateToProps)(HomePage);

import React, { Fragment } from "react";

import "./not-found-page.css";

const NotFoundPage = () => {
  return (
    <div className="nfp">
      <div className="container">
        <div className="jumbotron text-center">
          <p className="font-weight-bold">
            <h3>Sorry, this page isn't available.</h3>
          </p>
          <p>
            The link you followed may be broken, or the page may have been
            removed. <a href="/">Go back to StockStar.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

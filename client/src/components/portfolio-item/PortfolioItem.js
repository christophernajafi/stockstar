import React, { Fragment } from "react";

const PortfolioItem = props => {
  const { stockSymbol, numShares, price } = props;

  return (
    <Fragment>
      <td>{stockSymbol}</td>
      <td>{numShares}</td>
      <td>{numShares * price}</td>
    </Fragment>
  );
};

export default PortfolioItem;

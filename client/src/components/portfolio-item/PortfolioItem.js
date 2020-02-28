import React, { Fragment } from "react";

import { formatDollar } from "../../utils";

const PortfolioItem = props => {
  const { ticker, shares, price } = props.data;

  // console.log(props.data);

  return (
    <Fragment>
      <tr>
        <td>{ticker}</td>
        <td>{shares}</td>
        <td>{formatDollar(shares * price)}</td>
      </tr>
    </Fragment>
  );
};

export default PortfolioItem;

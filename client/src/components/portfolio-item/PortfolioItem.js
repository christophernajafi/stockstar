import React, { Fragment } from "react";

import { formatDollar } from "../../utils";

const PortfolioItem = props => {
  const { ticker, shares, price, color } = props;

  console.log(props);

  const green = ".text-success";
  const red = ".text-danger";
  const grey = ".text-secondary";

  let style = grey;

  color === "red" ? (style = red) : (style = green);

  // {
  // <span className=`${style}`></span>
  // }

  return (
    <Fragment>
      <tr>
        <td>
          <span className={`${style}`}>{ticker}</span>
        </td>
        <td>{shares}</td>
        <td>
          <span className={`${style}`}>{formatDollar(shares * price)}</span>
        </td>
      </tr>
    </Fragment>
  );
};

export default PortfolioItem;

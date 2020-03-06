import React, { Fragment } from "react";

import { formatDollar } from "../../utils";

const PortfolioItem = props => {
  const { ticker, quantity, color, currentValue } = props.data;

  const green = "text-success";
  const red = "text-danger";
  const grey = "text-secondary";

  let style = grey;

  if (color === "red") {
    style = red;
  } else if (color === "green") {
    style = green;
  }

  return (
    <Fragment>
      <tr>
        <td>
          <span className={`${style}`}>{ticker}</span>
        </td>
        <td>{quantity}</td>
        <td>
          <span className={`${style}`}>{formatDollar(currentValue)}</span>
        </td>
      </tr>
    </Fragment>
  );
};

export default PortfolioItem;

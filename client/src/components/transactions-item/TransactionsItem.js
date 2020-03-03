import React, { Fragment } from "react";

import { formatDollar } from "../../utils";

const TransactionsItem = props => {
  const { ticker, quantity, transactionType, price, createdAt } = props.data;
  return (
    <Fragment>
      <tr>
        <td>{ticker}</td>
        <td>{transactionType}</td>
        <td>{createdAt}</td>
        <td>{quantity}</td>
        <td>{formatDollar(price)}</td>
      </tr>
    </Fragment>
  );
};

export default TransactionsItem;

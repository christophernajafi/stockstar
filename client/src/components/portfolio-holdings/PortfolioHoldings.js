import React from "react";
import { Container, Table } from "react-bootstrap";

import PortfolioItem from "../portfolio-item/PortfolioItem";

// Child component of Portfolio
const PortfolioHoldings = props => {
  const { totalValue, userHoldings } = props;

  return (
    <Container className="portfolio-container">
      <h5 className="text-center">
        Portfolio Value: $
        {totalValue.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}
      </h5>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Shares</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          {userHoldings &&
            userHoldings
              // sort holdings alpha order
              .sort(function(a, b) {
                if (a.ticker < b.ticker) {
                  return -1;
                } else return 1;
              })
              .map(eachHolding => {
                return (
                  <PortfolioItem key={eachHolding.id} data={eachHolding} />
                );
              })}
        </tbody>
      </Table>
    </Container>
  );
};

export default PortfolioHoldings;

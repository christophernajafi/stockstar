import React, { Fragment } from "react";
import { Container, Jumbotron } from "react-bootstrap";

const About = () => {
  return (
    <Fragment>
      <Container>
        <Jumbotron>
          <p>
            StockStar is web-based stock portfolio app that enables a user to
            buy and sell stocks, keep track of their holdings in a portfolio,
            and see transaction history.
          </p>
          <p>
            <h3>Technology Stack</h3>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Sequelize</li>
              <li>Passport</li>
              <li>IEX API</li>
            </ul>
          </p>
          <p>
            If you would like to see my other projects, please visit{" "}
            <a
              href="https://www.chrisnajafi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ChrisNajafi.com
            </a>
            .
          </p>
        </Jumbotron>
      </Container>
    </Fragment>
  );
};

export default About;

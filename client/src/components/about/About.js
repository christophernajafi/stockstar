import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

import "./about.css";

const About = () => {
  return (
    <Container>
      <Jumbotron>
        <p>
          StockStar is web-based stock portfolio app that enables a user to buy
          and sell stocks, keep track of their holdings in a portfolio, and see
          transaction history.
        </p>
        <div>
          <h3>Technology Stack</h3>
          <ul className="about-ul">
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
        </div>
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
  );
};

export default About;

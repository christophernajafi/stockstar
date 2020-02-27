import React, { Fragment } from "react";
import { Container, Jumbotron } from "react-bootstrap";

const About = () => {
  return (
    <Fragment>
      <Container>
        <Jumbotron>
          <p>StockStar is web-based stock portfolio app.</p>
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

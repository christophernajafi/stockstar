import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import FrontPage from "../front-page/FrontPage";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Transaction from "../transactions/Transactions";
import NotFoundPage from "../not-found-page/NotFoundPage";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/transactions" component={Transaction} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;

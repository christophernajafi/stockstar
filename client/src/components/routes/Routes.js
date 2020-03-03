import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import HomePage from "../home-page/HomePage";
import About from "../about/About";
import SignIn from "../sign-in/SignIn";
import Register from "../register/Register";
import PortfolioPage from "../portfolio-page/PortfolioPage";
import Transaction from "../transactions/Transactions";
import NotFoundPage from "../not-found-page/NotFoundPage";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/portfolio" component={PortfolioPage} />
      <Route exact path="/transactions" component={Transaction} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;

import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../home-page/HomePage";
import About from "../about/About";
import SignIn from "../sign-in/SignIn";
import Register from "../register/Register";
import Portfolio from "../portfolio/Portfolio";
import Transaction from "../transactions/Transactions";
import NotFoundPage from "../not-found-page/NotFoundPage";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/transactions" component={Transaction} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;

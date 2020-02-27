import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NotFoundPage from "../not-found-page/NotFoundPage";

const Routes = props => {
  return (
    <Switch>
      {/* <Route exact path="/" component={FrontPage} />
      <Route exact path="/portfolio" component={FrontPage} />
      <Route exact path="/transactions" component={FrontPage} /> */}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

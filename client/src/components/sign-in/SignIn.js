import React, { Fragment, useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

import "./sign-in.css";

const SignIn = () => {
  return (
    <Fragment>
      <div className="Login">
        <form
        // onSubmit={this.onSubmit}
        >
          <FormGroup controlId="email" size="lg">
            <FormControl
              autoFocus
              type="email"
              placeholder="Email"
              // onChange={this.onChange}
              required
              name="email"
              // defaultValue={email}
            />
          </FormGroup>
          <FormGroup controlId="password" size="lg">
            <FormControl
              placeholder="Password"
              // onChange={this.onChange}
              type="password"
              required
              name="password"
              // defaultValue={password}
            />
          </FormGroup>
          <Button
            block
            size="lg"
            // disabled={!(email && password)}
            type="submit"
          >
            Sign In
          </Button>

          <p className="my-1 text-center">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default SignIn;

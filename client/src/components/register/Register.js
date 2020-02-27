import React, { Fragment, useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import "./register.css";

const Register = () => {
  return (
    <Fragment>
      <div className="Signup">
        <form
        // onSubmit={this.onSubmit}
        >
          <FormGroup controlId="name" size="lg">
            <FormControl
              autoFocus
              type="text"
              // value={email}
              // onChange={this.onChange}
              placeholder="Name"
              required
              name="name"
              // defaultValue={name}
            />
          </FormGroup>
          <FormGroup controlId="email" size="lg">
            <FormControl
              autoFocus
              type="email"
              // value={email}
              // onChange={this.onChange}
              placeholder="Email"
              required
              name="email"
              // defaultValue={email}
            />
          </FormGroup>
          <FormGroup controlId="password" size="lg">
            <FormControl
              // value={password}
              // onChange={this.onChange}
              type="password"
              placeholder="Password"
              required
              name="password"
              // defaultValue={password}
            />
          </FormGroup>
          <FormGroup controlId="confirmPassword" size="lg">
            <FormControl
              // value={password}
              // onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
              required
              name="confirmPassword"
              // defaultValue={confirmPassword}
            />
          </FormGroup>
          <Button
            block
            size="lg"
            // disabled={!(name && email && password && confirmPassword)}
            type="submit"
          >
            Register
          </Button>
          <p className="my-1 text-center">
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;

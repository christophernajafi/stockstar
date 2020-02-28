import React, { Fragment, useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import "./register.css";

const Register = props => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { firstName, lastName, email, password, confirmPassword } = formState;

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // eslint-disable-next-line
    props.history.push("/portfolio");
    console.log("formState: ", formState);
  };

  return (
    <Fragment>
      <div className="register">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="firstName" size="lg">
            <FormControl
              autoFocus
              type="text"
              // value={firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              name="firstName"
              defaultValue={firstName}
            />
          </FormGroup>
          <FormGroup controlId="lastName" size="lg">
            <FormControl
              autoFocus
              type="text"
              // value={lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              name="lastName"
              defaultValue={lastName}
            />
          </FormGroup>
          <FormGroup controlId="email" size="lg">
            <FormControl
              autoFocus
              type="email"
              // value={email}
              onChange={handleChange}
              placeholder="Email"
              required
              name="email"
              defaultValue={email}
            />
          </FormGroup>
          <FormGroup controlId="password" size="lg">
            <FormControl
              // value={password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              required
              name="password"
              defaultValue={password}
            />
          </FormGroup>
          <FormGroup controlId="confirmPassword" size="lg">
            <FormControl
              // value={password}
              onChange={handleChange}
              type="password"
              placeholder="Confirm Password"
              required
              name="confirmPassword"
              defaultValue={confirmPassword}
            />
          </FormGroup>
          <Button
            block
            size="lg"
            disabled={
              !(firstName && lastName && email && password && confirmPassword)
            }
            type="submit"
          >
            Register
          </Button>
          <p className="my-1 text-center">
            Already have an account? <Link to="/sign-in">Sign In</Link>
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;

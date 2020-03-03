import React, { Fragment, useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

import { login, loginSuccess } from "../../store/reducers/authReducer";
import "./sign-in.css";

const SignIn = props => {
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formState;

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(formState);
    // eslint-disable-next-line
    props.history.push("/portfolio");
    console.log("formState: ", formState);
  };

  return (
    <Fragment>
      <div className="sign-in">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" size="lg">
            <FormControl
              autoFocus
              type="email"
              placeholder="Email"
              onChange={handleChange}
              required
              name="email"
              defaultValue={email}
            />
          </FormGroup>
          <FormGroup controlId="password" size="lg">
            <FormControl
              placeholder="Password"
              onChange={handleChange}
              type="password"
              required
              name="password"
              defaultValue={password}
            />
          </FormGroup>
          <Button block size="lg" disabled={!(email && password)} type="submit">
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

const mapDispatchToProps = dispatch => {
  return {
    loginSuccess: () => dispatch(loginSuccess)
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
// export default SignIn;

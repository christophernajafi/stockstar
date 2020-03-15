import React, { useState, useContext } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
// import PropTypes from "prop-types";

import AuthContext from "../../context/AuthContext";
import "./sign-in.css";

const SignIn = props => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    error: null
  });

  const { email, password, error } = formState;

  const authContext = useContext(AuthContext);
  const { authorize } = authContext;

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await axios.post("api/users/login/", {
        email,
        password
      });
      await authorize();
      props.history.push("/portfolio");
    } catch (error) {
      setFormState({
        ...formState,
        error: error.response.data
      });
    }
  };

  return (
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
            value={email}
          />
        </FormGroup>
        <FormGroup controlId="password" size="lg">
          <FormControl
            placeholder="Password"
            onChange={handleChange}
            type="password"
            required
            name="password"
            value={password}
          />
        </FormGroup>
        <Button block size="lg" disabled={!(email && password)} type="submit">
          Sign In
        </Button>

        <p className="my-1 text-center">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        {error && (
          <p className="text-center sign-in-error text-danger"> {error} </p>
        )}
      </form>
    </div>
  );
};

export default SignIn;

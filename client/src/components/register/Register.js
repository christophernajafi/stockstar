import React, { useState, useContext } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import AuthContext from "../../context/AuthContext";
import "./register.css";

const Register = props => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: null
  });

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    error
  } = formState;

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

    if (password !== confirmPassword) {
      setFormState({
        ...formState,
        error: "Password and confirmed password do not match."
      });
    } else if (password.length < 6) {
      setFormState({
        ...formState,
        error: "Password must be at least six characters long."
      });
    } else {
      try {
        await axios.post("api/users/", {
          firstName,
          lastName,
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
    }

    console.log("formState: ", formState);
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="firstName" size="lg">
          <FormControl
            autoFocus
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
        </FormGroup>
        <FormGroup controlId="lastName" size="lg">
          <FormControl
            autoFocus
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </FormGroup>
        <FormGroup controlId="email" size="lg">
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            required
            name="email"
          />
        </FormGroup>
        <FormGroup controlId="password" size="lg">
          <FormControl
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            required
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" size="lg">
          <FormControl
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
            required
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
        {error && (
          <p className="text-center register-error text-danger"> {error} </p>
        )}
      </form>
    </div>
  );
};

export default Register;

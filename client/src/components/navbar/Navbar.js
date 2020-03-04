import React, { Fragment, useContext, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import AuthContext from "../../context/AuthContext";
import "./navbar.css";

const NavbarComponent = props => {
  const authContext = useContext(AuthContext);
  const { isAuth, logout, authorize } = authContext;

  // console.log("auth: ", isAuth);

  useEffect(() => {
    authorize();
  }, [authorize]);

  const allLinks = (
    <Fragment>
      <Nav.Link href="/about">About</Nav.Link>
    </Fragment>
  );

  const unAuthLinks = (
    <Fragment>
      <Nav.Link href="/sign-in">Sign-In</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href="/transactions">Transactions</Nav.Link>
      <Nav.Link href="/" onClick={logout}>
        Log Out
      </Nav.Link>
    </Fragment>
  );

  return (
    <Navbar expand="lg" sticky="top" className="navbar">
      <Navbar.Brand href="/">StockStar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          {allLinks}
          {!isAuth && unAuthLinks}
          {isAuth && authLinks}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

// bg="light"
// style={{ color: "black", fontWeight: "bold" }}

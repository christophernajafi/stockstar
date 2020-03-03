import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { logout } from "../../store/reducers/authReducer";
import "./navbar.css";

const NavbarComponent = props => {
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

  const { isAuth } = props;

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

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAut
  };
};

export default connect(mapStateToProps)(NavbarComponent);
// export default NavbarComponent;

// bg="light"
// style={{ color: "black", fontWeight: "bold" }}

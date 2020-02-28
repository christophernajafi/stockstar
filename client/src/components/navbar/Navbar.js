import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

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
      <Nav.Link href="/">Log Out</Nav.Link>
    </Fragment>
  );

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">StockStar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          {allLinks}
          {unAuthLinks}
          {authLinks}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

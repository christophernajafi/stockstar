import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavbarComponent = props => {
  const allLinks = (
    <Fragment>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
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
    <Navbar>
      {allLinks}
      {authLinks}
    </Navbar>
  );
};

export default NavbarComponent;

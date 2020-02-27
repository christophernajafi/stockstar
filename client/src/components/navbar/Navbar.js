import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavbarComponent = props => {
  return (
    <Navbar>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href="/transactions">Transaction</Nav.Link>
    </Navbar>
  );
};

export default NavbarComponent;

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaFacebook } from "react-icons/fa";

function Navigation() {
  return (
    <Navbar bg="blue" variant="light" expand="lg" id="nav">
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ marginLeft: "auto" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/shop">Shop</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <a href="https://www.facebook.com/AllynsWildFlourShoppe/?ref=page_internal">
            <FaFacebook className="icons"></FaFacebook>
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;

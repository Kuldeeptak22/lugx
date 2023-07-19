import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-primary py-2 px-sm-5 rounded-bottom-5 navbar fixed-top"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav collapseNav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className="mx-4 my-sm-1 text-white nav-link navLink"
            >
              Home
            </NavLink>
            <NavLink
              to="/ourShop"
              className="mx-4 my-sm-1 text-white nav-link navLink"
            >
              Our Shop
            </NavLink>
            <NavLink
              to="/productDetails"
              className="mx-4 my-1 text-white nav-link navLink"
            >
              Product Details
            </NavLink>
            <NavLink
              to="/contactus"
              className="mx-4 my-sm-1 text-white nav-link navLink"
            >
              Contact Us
            </NavLink>
            <NavLink
              className="bg-danger rounded-5 px-4 my-sm-1 text-white nav-link"
              to="/signin"
            >
              SIGN IN
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;

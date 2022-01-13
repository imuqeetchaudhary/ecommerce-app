import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container fluid="md">
          <Navbar.Brand href="#home">A to Z Dressing 👕🩳🧣</Navbar.Brand>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;

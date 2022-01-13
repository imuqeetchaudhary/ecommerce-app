import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container fluid="md">
          <Navbar.Brand href="#home">A to Z Dressing 👕🩳🧣</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;

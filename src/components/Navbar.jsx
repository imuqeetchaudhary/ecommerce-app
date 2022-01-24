import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = ({ isLoggedIn }) => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container fluid="md">
          <Navbar.Brand href="/">A to Z Dressing 👕🩳🧣</Navbar.Brand>
          <Nav className="nav-links">
            {!localStorage.getItem("token") ? (
              <>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
              </>
            ) : (
              <>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/products/create">Create Product</Link>
                <Link to="/products/update">Update Product</Link>
                <Link to="/cart">Cart</Link>
                <Link
                  to="/login"
                  onClick={() => localStorage.removeItem("token")}
                >
                  Logout
                </Link>{" "}
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;

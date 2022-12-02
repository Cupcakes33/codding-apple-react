import React from "react";
import { Nav, Navbar, Container } from "../BootstrapModule";
import { useNavigate } from "react-router-dom";

const ShopNavbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ padding: "10px 30px" }}
    >
      <Container>
        <Navbar.Brand href="/">React Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/0");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/About");
              }}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ShopNavbar;

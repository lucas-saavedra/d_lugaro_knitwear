import React from "react";

// CSS
import "./Navbar.css";

// Components
import Nav from "react-bootstrap/Nav";
import Dot from "../Icons/Dot/Dot";

const Navbar = () => {
  return (
    <Nav className="navContainer">
      <Nav.Item className="navItem">Sweaters</Nav.Item>
      <Dot />
      <Nav.Item className="navItem">Cardigans</Nav.Item>
      <Dot />
      <Nav.Item className="navItem">Dresses</Nav.Item>
      <Dot />
      <Nav.Item className="navItem">Skirts</Nav.Item>
      <Dot />
      <Nav.Item className="navItem">Scarves</Nav.Item>
    </Nav>
  );
};

export default Navbar;

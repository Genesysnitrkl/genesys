import React from "react";
import "../Navbar/navbar.css";
import logo from "../../images/genesys-logo.png";

import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top md:ml-5"
            alt="DaeDarus logo"
          />{" "}
        </Navbar.Brand>

        <Navbar.Brand className="nav-name" href="/">
          <span
            style={{ fontSize: "36px", fontFamily: "poppins" }}
            className="grad-text"
          >
            Genesys
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          className="toggler"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav-links">
          <Nav className="ml-auto" style={{ fontFamily: "Poppins" }}>
            <Nav.Link className="nav-toggles" href="/organizers">
              Team
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
import "../Navbar/navbar.css";
import logo from "../../images/genesys-logo-black.png";

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
            <Nav.Link className="nav-toggles" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-toggles" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="nav-toggles" href="/members">
              Members
            </Nav.Link>
            <Nav.Link
              target="__blank"
              rel="noreferrer noopener"
              className="nav-toggles"
              href="https://genesysnitrkl.wordpress.com/blog/"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              className="nav-toggles"
              href="/events"
            >
              Events
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

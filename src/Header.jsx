import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll'; // Import Link from 'react-scroll'

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand href="#">Your Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* Use Link component from 'react-scroll' for smooth scrolling */}
            <Link to="home" smooth={true} duration={500} className="nav-link">
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="nav-link">
              About
            </Link>
            <Link to="portfolio" smooth={true} duration={500} className="nav-link">
              Portfolio
            </Link>
            <Link to="contact" smooth={true} duration={500} className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;

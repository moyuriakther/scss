import React from 'react';
import './_Menu.scss';
import { Navbar, Nav} from 'react-bootstrap';
import logo from '../../src/sr-logo.png';

const Menu = () => {
  return (
    <div>
        <Navbar id="menu-bg" collapseOnSelect expand="lg"  variant="dark">
          <Navbar.Brand href="#home"><img id="logo" src={logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#blog">Blogs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
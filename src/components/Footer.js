import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Template extends React.PureComponent {
  render() {
    return (
      <Navbar bg="dark" expand="lg" className="navbar-dark fixed-bottom">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#link">News</Nav.Link>
            <Nav.Link href="#link">Bla bla :)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <span style={{ color: '#FFFFFF', fontSize: '14px' }}>© COPYRIGHT STANGELAND GLASSFIBER PRODUKTER AS</span> */}
      </Navbar>
    );
  }
}

export default Template;

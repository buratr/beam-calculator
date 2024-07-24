import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../images/logo.svg';
import NO from '../images/NO.png';
import US from '../images/US.png';

class NavBar extends React.PureComponent {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <img src={logo} alt="logo" style={{ height: '50px', marginTop: '10px' }} />
        <Navbar.Brand href="#home">SGP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div>
            <img src={NO} alt="no" style={{ height: '25px', marginRight: '10px' }} />
            <img src={US} alt="en" style={{ height: '25px', marginRight: '10px' }} />
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;

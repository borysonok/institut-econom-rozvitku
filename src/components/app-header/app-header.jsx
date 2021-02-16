import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { LinkContainer } from 'react-router-bootstrap';

import './app-header.css';

export default class AppHeader extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/"><Navbar.Brand>LOGO</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/main"><Nav.Link>Main</Nav.Link></LinkContainer>
            <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <LinkContainer to='/training/on-site'><NavDropdown.Item>On-Site Training</NavDropdown.Item></LinkContainer>
              <LinkContainer to='/training/distant'><NavDropdown.Item>Distant Training</NavDropdown.Item></LinkContainer>
              <LinkContainer to='/training/online'><NavDropdown.Item>Online Training</NavDropdown.Item></LinkContainer>
            </NavDropdown>
            <LinkContainer to='/legal-service'><Nav.Link>Legal Service</Nav.Link></LinkContainer>
            <LinkContainer to="/schedule"><Nav.Link>Schedule</Nav.Link></LinkContainer>
            <LinkContainer to='/reviews'><Nav.Link>Reviews</Nav.Link></LinkContainer>
            <LinkContainer to='/contacts'><Nav.Link>Contacts</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

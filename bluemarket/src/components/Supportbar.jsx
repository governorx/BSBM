// Imports
import React, { Component } from 'react'; // Import neccesary for all components
// react-bootstrap was imported to make it easier to make flexible GUI components see https://react-bootstrap.github.io
import { Navbar, Nav } from 'react-bootstrap';
export default class Topbar extends Component {
  render() {
    // Returns a nav bar design originated from https://react-bootstrap.github.io/components/navbar/.
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="mr-auto">
                    <Nav.Link href="#link">Contact</Nav.Link>
                    <Nav.Link href="#link">Policy</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                </Nav>
        </Navbar>
    );
}
}
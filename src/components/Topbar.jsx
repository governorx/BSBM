/*
 * Topbar.jsx -- Custom Navbar component for the Blue Market App.
 * TODO: add other pages and link to this page
 * Components are comprabale to java classes, they can be passed arguments, 
 * and contain extra javascript functions (ex a function that actually does 
 * the search when you click the botton). This class does not need arguments to render.
 *  - it is best practice to have a component in a file with the same name.
 *  - components must start with capital letters to differentiate from jsx tags.
 */

// Imports
import React, { Component } from 'react'; // Import neccesary for all components
// react-bootstrap was imported to make it easier to make flexible GUI components see https://react-bootstrap.github.io
import { Navbar, Nav, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';
export default class Topbar extends Component {
    /*
    * Search function to be called when the button is pressed. Will interface 
    * with the database and grab data from the search bar.
    */
    search() {
        // TODO: Implement search
        alert("SEARCH NOT IMPLEMENTED");
    }
    handleSearchKeyChange(e) {
        this.setState({ search_key: e.target.value });
    }
    render() {
        // Returns a nav bar design originated from https://react-bootstrap.github.io/components/navbar/.
        return (
            <Navbar fixed="top" bg="light" expand="lg">
                <Navbar.Brand href="#home">Blue Market</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Post</Nav.Link>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Postings</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Searches</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">drafts</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Account Settings</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search Blue Market" className="mr-sm-2" />
                        {/* Below is an example of how functions are called in jsx, this.search signifies that we are
                        using the search function written above, and binding search to this
                        is an syntax requirement for javascript to know when to call the function.
                         */}
                        <Button variant="outline-success" onClick={this.search.bind(this)}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
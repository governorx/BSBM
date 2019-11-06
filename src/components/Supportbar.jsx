// Imports
import React, { Component } from 'react'; // Import neccesary for all components
// react-bootstrap was imported to make it easier to make flexible GUI components see https://react-bootstrap.github.io
import { Navbar, Nav, Button } from 'react-bootstrap';
import Amplify, {Auth} from 'aws-amplify';
export default class Topbar extends Component {
    toContact(){
        this.props.changePage("contact");
    }
    toPolicy(){
        this.props.changePage("policy");
    }
    toAbout(){
        this.props.changePage("about");
    }
    render() {
        // Returns a nav bar design originated from https://react-bootstrap.github.io/components/navbar/.
        return (
            <Navbar bg="light">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="mr-auto">
                    <Nav.Link onClick={this.toContact.bind(this)}>Contact</Nav.Link>
                    <Nav.Link onClick={this.toPolicy.bind(this)}>Policy</Nav.Link>
                    <Nav.Link onClick={this.toAbout.bind(this)}>About</Nav.Link>
                </Nav>
                <Button variant="outline-info" onClick={Auth.signOut.bind(this)}>Logout</Button>
            </Navbar>
        );
    }
}
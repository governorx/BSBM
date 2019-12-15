// Imports
import React, { Component } from 'react'; // Import neccesary for all components
// react-bootstrap was imported to make it easier to make flexible GUI components see https://react-bootstrap.github.io
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
export default class Topbar extends Component {
    toContact() {
        this.props.changePage("contact");
    }
    toFAQs(){
        this.props.changePage("FAQs");
    }
    toPolicy() {
        this.props.changePage("policy");
    }
    toTermsOfUse(){
        this.props.changePage("termsOfUse");
    }
    toAbout(){
        this.props.changePage("about");
    }
    Logout() {
        Auth.signOut()
    }
    render() {
        // Returns a nav bar design originated from https://react-bootstrap.github.io/components/navbar/.
        return (
            <Navbar bg="light">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="mr-auto">
                    <Nav.Link onClick={this.toFAQs.bind(this)}>FAQs</Nav.Link>
                    <Nav.Link onClick={this.toPolicy.bind(this)}>Policy</Nav.Link>
                    <Nav.Link onClick={this.toTermsOfUse.bind(this)}>Terms of Use</Nav.Link>
                    <Nav.Link onClick={this.toAbout.bind(this)}>About</Nav.Link>
                </Nav>
                <Button variant="outline-info" onClick={this.Logout.bind(this)}>Logout</Button>
            </Navbar>
        );
    }
}
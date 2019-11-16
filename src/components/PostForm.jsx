import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Auth, Storage } from 'aws-amplify';
// This form submits a user entered post into our db
export default class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "",
            title: "",
            textContent: "",
            email: ""
        }
        this.updateTitleState = this.updateTitleState.bind(this)
        this.updateCategoryState = this.updateCategoryState.bind(this)
        this.updateTextState = this.updateTextState.bind(this)
        this.updateEmailState = this.updateEmailState.bind(this)
        this.postValues = this.postValues.bind(this)
    }

    // Functions for syncing our data to our form input
    updateCategoryState(e) {
        this.setState({ category: e.target.value });
    }
    updateTitleState(e) {
        this.setState({ title: e.target.value });
    }
    updateTextState(e) {
        this.setState({ textContent: e.target.value });
    }
    updateEmailState(e) {
        this.setState({ email: e.target.value });
    }
    // Posts input to path using described format env/category/timestamp/username.txt
    postValues() {
        let post = this.state
        Auth.currentAuthenticatedUser().then(user=> {
        //for final version we will change test to prod
        Storage.put('test/' + this.state.category + '/' + Date.now() + '/' +user.username + '.txt', JSON.stringify(post))
             .then(result => console.log("PUT", result))
             .catch(err => console.log("PUTFAIL", err));
        })
    }
    // Renders form to get user input
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" value={this.state.email} onChange={this.updateEmailState} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control as="textarea" rows="1" value={this.state.title} onChange={this.updateTitleState} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>select category</Form.Label>
                        <Form.Control as="select" value={this.state.category} onChange={this.updateCategoryState}>
                            <option >None</option>
                            <option value="clearance">Clearance</option>
                            <option value="community">Community</option>
                            <option value="academics">Academics</option>
                            <option value="jobs">Jobs</option>
                            <option value="furniture">Furniture</option>
                            <option value="housing">Housing</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Post</Form.Label>
                        <Form.Control as="textarea" rows="3" value={this.state.textContent} onChange={this.updateTextState} />
                    </Form.Group>
                    <Button variant="primary" onClick={this.postValues}>Submit</Button>
                </Form>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'
import '../App.css';
import { Storage } from 'aws-amplify';
export default class Postcard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "",
            title: "",
            textContent: "",
            email: ""
        }
        this.makeRequest = this.makeRequest.bind(this);
        this.getText = this.getText.bind(this);
        this.getText().then(
            result => {
                this.setState(result)
            }
        ).catch(reject => console.log(reject));
    }

    //Gets the response from a request over the internet
    makeRequest = function (url) {
        var request = new XMLHttpRequest();
        return new Promise(function (resolve, reject) {
            request.onreadystatechange = function () {
                if (request.readyState !== 4) return;
                if (request.status >= 200 && request.status < 300) {
                    //succsess
                    resolve(request);
                } else {
                    //failure
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    });
                }
            }
            request.open('GET', url, true);
            request.send();
        })
    }

    // Uses storage to get an http pointer to our data online, then makerequest 
    // directly requets it, ultimately this function returns an object built 
    // from the strings stored online
    getText() {
        let makeRequest = this.makeRequest;
        let path = this.props.path;
        return new Promise(function (resolve, reject) {
            Storage.get(path)
                .then(
                    result => {
                        makeRequest(result).then(
                            result => {
                                resolve(JSON.parse(result.responseText));
                            }
                        )
                    }
                )
                .catch(reject => console.log(reject));
        })
    }

    // renders a card based of the data inside of the message
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>{this.state.title}</Card.Title>
                        <Card.Text>{this.state.textContent}</Card.Text>
                        <Button variant="primary" href={"mailto:" + this.state.email}> Connect! </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

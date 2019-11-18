import React, { Component } from 'react';
import { Documnet, Page } from 'react-pdf';
import privacypolicy from "../Documents/privacypolicy"
import '../App.css';
export default class Policy extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;
        return (
        <div>
            <Document file="privacypolicy" 
            onLoadSuccess={this.onDocumentLoadSuccess}
            >
                <Page pageNumber = {pageNumber}/>
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
        );
        }
}
import React, { Component } from 'react';
import { Documnet, Page } from 'react-pdf';
import termsofuse from "../Documents/termsofuse"
import '../App.css';
export default class TermsOfUse extends Component {
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
            <Document file="termsofuse" 
            onLoadSuccess={this.onDocumentLoadSuccess}
            >
                <Page pageNumber = {pageNumber}/>
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
        );
        }
}
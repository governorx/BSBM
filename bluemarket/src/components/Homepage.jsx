/* 
* Homepage.jsx -- Homepage for the Blue Market App
* Below are the necessary import statements for the
* components used in the code. Note ogedenhall.svg
* and App.css are not in the components folder, so
* '../' is used to change directories.
*/

import React, { Component } from 'react';
import logo from '../ogdenhall.svg';
import '../App.css';
export default class Homepage extends Component {

    render() {
            return (
                <div>
                    {/* Get ogden image from svg file */}
                    <img src={logo} className="App-logo" alt="logo" />
                    {/* Display and format homepage text */}
                    <div className="App-image-text">Welcome to Blue Market</div>
                </div>
            )
    }
}

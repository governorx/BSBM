/* 
* Homepage.jsx -- Homepage for the Blue Market App
* Below are the necessary import statements for the
* components used in the code. Note ogedenhall.svg
* and App.css are not in the components folder, so
* '../' is used to change directories.
*/

import React, { Component } from 'react';
import background from '../images/ogdenhall.svg';
import '../App.css';
export default class Homepage extends Component {

    render() {
        return (
            <div className="Background-container">
                {/* Get ogden image from svg file */}
                <img src={background} className="Background-orientation" alt="background" />
                {/* Display and format homepage text */}
                <div className="Background-text">Welcome to Blue Market</div>
            </div>
        )
    }
}

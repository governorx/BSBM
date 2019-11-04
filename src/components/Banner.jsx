/* 
* Banner.jsx -- Banner for the Blue Market App
* Below are the necessary import statements for the
* components used in the code. Note ogedenhall.svg
* and App.css are not in the components folder, so
* '../' is used to change directories.
*/

import React, { Component } from 'react';
import background from '../images/ogdenhall.svg';
import '../App.css';
export default class Banner extends Component {

    render() {
        return (
            <div className="Background">
                {/* Get ogden image from svg file */}
                <img src={background} className="image" alt="background" />
                {/* Display and format Banner text */}
                <div className="text">Welcome to Blue Market</div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import '../App.css';
export default class Categories extends Component {
    
    render() {
        return (
        <div>
            <img className="Category-image" src={this.props.src} alt={this.props.alt}/>
            <h1 className="Category-text">{this.props.alt}</h1>
        </div>)
    } 
}
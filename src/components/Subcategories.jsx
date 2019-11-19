import React, { Component } from 'react';
import '../App.css';
export default class Categories extends Component {
    navigate(){
        this.props.changePage(this.props.alt)
    }
    render() {
        return (
        <div className="Category-image" onClick={this.navigate.bind(this)}>
            <img  className="category-image-sub" src={this.props.src} alt={this.props.alt}/>
            <h1 className="Category-text">{this.props.title} </h1>
        </div>)
    } 
}
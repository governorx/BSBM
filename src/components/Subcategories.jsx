import React, { Component } from 'react';
import '../App.css';
export default class Categories extends Component {
    navigate(){
        this.props.changePage(this.props.alt)
    }
    render() {
        return (
        <div onClick={this.navigate.bind(this)}>
            <img className="Category-image" src={this.props.src} alt={this.props.alt}/>
            <h1 className="Category-text">{this.props.title}                 <i class="fa fa-refresh" aria-hidden="true"></i>
</h1>
        </div>)
    } 
}
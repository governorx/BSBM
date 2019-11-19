import React, { Component } from 'react';
import clearance from '../images/clearance.jpg';
import furniture from '../images/furniture.jpg';
import academics from '../images/academics.jpg';
import housing from '../images/housing.jpg';
import jobsearch from '../images/jobsearch.jpg';
import community from '../images/community.jpg';
import Subcategories from './Subcategories';
import '../App.css';
export default class Categories extends Component {

    holyshit(){
        alert("holyshit")
    }
    render() {
        return(
            <div class='Category-grid'>
                <div class='Category-row'>
                    <Subcategories src={jobsearch} alt="jobs" title="Job Search" changePage={this.props.changePage.bind(this)}/>
                    <Subcategories src={clearance} alt="clearance" title="Clearance" changePage={this.props.changePage.bind(this)}/>
                </div>
                <div class='Category-row'>
                    <Subcategories src={housing} alt="housing" title="Housing" changePage={this.props.changePage.bind(this)}/>
                    <Subcategories src={furniture} alt="furniture" title="Furniture" changePage={this.props.changePage.bind(this)}/>
                </div>
                <div class='Category-row'>
                    <Subcategories src={academics} alt="academics" title="Academics" changePage={this.props.changePage.bind(this)}/>
                    <Subcategories src={community} alt="community" title="Community" changePage={this.props.changePage.bind(this)}/>
                </div>
            </div>
        );
    }
}
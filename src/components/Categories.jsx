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


    render() {

        return (

            <div class='Category-grid'>
                <div class='Category-row'>
                    <Subcategories src={jobsearch} alt="Job Search" />
                    <Subcategories src={clearance} alt="Clearance" />
                </div>
                <div class='Category-row'>
                    <Subcategories src={housing} alt="Housing" />
                    <Subcategories src={furniture} alt="Furniture" />
                </div>
                <div class='Category-row'>
                    <Subcategories src={academics} alt="Academics" />
                    <Subcategories src={community} alt="Community" />
                </div>
            </div>
        );
    }
}
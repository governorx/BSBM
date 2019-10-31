import React, { Component } from 'react';
import clearance from '../images/clearance.png';
import furniture from '../images/furniture.png';
import academics from '../images/academics.jpg';
import housing from '../images/housing.png';
import jobsearch from '../images/jobsearch.png';
import community from '../images/community.jpg';
import '../App.css';
export default class Categories extends Component {


    render() {

        return (

            <div className="row">
                <div className="column">
                    <img className="category-box" src={clearance} alt="clearance"/>
                    <img className="category-box" src={community} alt="community"/>
                </div>
                <div className="column">
                    <img className="category-box" src={academics} alt="academics"/>
                    <img className="category-box" src={jobsearch} alt="jobsearch"/>
                </div>
                <div className="column">
                    <img className="category-box" src={furniture} alt="furniture"/>
                    <img className="category-box" src={housing} alt="housing"/>
                </div>
            </div>


        );
    }

}
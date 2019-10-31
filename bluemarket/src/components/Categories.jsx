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
           
           <div class="row">
                <div class="column">
                    <img class="category-box" src= {clearance}/>
                    <img class="category-box" src={community} />
                </div> 
                <div class="column">
                <img class="category-box" src={academics} /> 
                <img class="category-box" src={jobsearch} /> 
                </div>
                <div class="column">
                <img class="category-box" src={furniture} />
                <img class="category-box" src={housing} /> 
                </div>
                </div>


        );
    }

}
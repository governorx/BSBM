import React, { Component } from 'react';
import clearance from './clearance.png';
import furniture from './furniture.png';
import academics from './academics.jpg';
import housing from './housing.png';
import jobsearch from './jobsearch.png';
import '../App.css';
export default class Categories extends Component {


    render() {

        return (
           
           <div class="row">
                <div class="column">
                    <img class="category-box" src= {clearance}/>
                    <img class="category-box" src={furniture} />
                </div> 
                <div class="column">
                <img class="category-box" src={academics} /> 
                <img class="category-box" src={housing} /> 
                <img class="category-box" src={jobsearch} /> 
                </div>
                </div>


        );
    }

}
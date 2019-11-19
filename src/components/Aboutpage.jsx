import React, { Component } from 'react';
import Xavier from '../images/Xavier.JPG';
import Jeteya from '../images/Jeteya.JPG';
import Christian from '../images/Christian.JPG';
import Kendall from '../images/Kendall.JPG';
import Diallo from '../images/Diallo.jpeg';
import Tauren from '../images/Tauren.JPG';
export default class Aboutpage extends Component {

    render() {
        return (
<body>
            <h2>Meet the Team </h2>
            <p> Brainstomer's Blue Market  </p>
            

<div className="row">
        <div className="column2">
             <div className="card">
                            <img className="category-box" src={Xavier} alt=" Xavier"/>
                                <div className="container">
                                    <h2>Ernest X. Horton </h2>
                                    <p className="title">Project Manager</p>
                                    <p>Ernest Horton is a graduating senior Computer Science major from Pittsburg</p>
                                    <p>ernest.horton@my.hamptonu.edu</p>
                                    <p><button className="button" href={"mailto:ernest.horton@my.hamptonu.edu"}> Contact </button></p>
                                </div>
            </div>
        </div>

        <div className="column2">
            <div className="card">
                <img className="category-box" src={Jeteya} alt=" Jeteya"/>
                     <div className="container">
                        <h2>Jeteya N. Lawrence</h2>
                         <p className="title">Chief Operations Officer </p>
                        <p>Jeteya Lawrence is a graduating senior Computer Science major from Connecticut </p>
                        <p>jeteya.lawrence@my.hamptonu.edu</p>
                        <p><button className="button" href={"mailto:jeteya.lawrence@my.hamptonu.edu"}> Contact </button></p>
                     </div>
             </div>
        </div>
        <div className="column2">
            <div className="card">
                <img className="category-box"src={Christian} alt=" Christian"/>
                    <div className="container">
                        <h2>Christian J. Nichols </h2>
                        <p className="title">Chief Information Officer</p>
                        <p>Christian Nichols is a graduating senior Computer Science Major from Hampton, Va</p>
                        <p>christian.nichols@my.hamptonu.edu</p>
                        <p><button className="button" href={"mailto:christian.nichols@my.hamptonu.edu"}> Contact </button></p>
                    </div>
            </div>
         </div>
</div>

 <div className="row">
        <div className="column2">
             <div className="card">
                            <img className="category-box" src={Kendall} alt=" Kendall"/>
                                <div className="container">
                                    <h2>Kendall J. Douglass </h2>
                                    <p className="title">Chief Software Engineer</p>
                                    <p>Kendall Douglass is a graduating senior Cyber Security major from Upper Marlboro, MD</p>
                                    <p>kendall.douglass@my.hamptonu.edu</p>
                                    <p><button className="button" href={"mailto:kendall.douglass@my.hamptonu.edu"}> Contact </button></p>
                                </div>
            </div>
        </div>

        <div className="column2">
            <div className="card">
                <img className="category-box" src={Diallo} alt=" Diallo"/>
                     <div className="container">
                        <h2>Diallo K. Toure</h2>
                         <p className="title">Chief Information Security Officer </p>
                        <p>Diallo Toure is a graduating senior Computer Information Systems major from Upper Marlboro, MD </p>
                        <p>diallo.toure@my.hamptonu.edu</p>
                        <p><button className="button" href={"mailto:diallo.toure@my.hamptonu.edu"}> Contact </button></p>
                     </div>
             </div>
        </div>
        <div className="column2">
            <div className="card">
                <img className="category-box"src={Tauren} alt=" Tauren"/>
                    <div className="container">
                        <h2>Tauren L. Bass </h2>
                        <p className="title">Chief Technology Officer</p>
                        <p>Tauren Bass is a graduating senior Computer Science Major from Philadelphia, PA</p>
                        <p>tauren.bass@my.hamptonu.edu</p>
                        <p><button className="button" href={"mailto:tauren.bass@my.hamptonu.edu"}> Contact </button></p>
                    </div>
            </div>
         </div>
 </div>

 </body>

        )
    }
}
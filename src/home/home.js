import React, { Component } from 'react';
import './css/home.css'
import MenuCard from "./menuCard";
import ParalaxContainer from "./paralaxContainer";
import slide1 from './image/best1.jpg';
import slide2 from './image/booked.jpg';
import slide3 from './image/conf3.jpg';


class Home extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="welcome" className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slide1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className='welcome'>WELCOME TO AASTU CONFERENCE MANAGEMENT SYSTEM</h2>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slide2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className='welcome'>WELCOME TO AASTU CONFERENCE MANAGEMENT SYSTEM</h2>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slide3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className='welcome'>WELCOME TO AASTU CONFERENCE MANAGEMENT SYSTEM</h2>

                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <br /><br /><br /><br />
                <MenuCard />
                <ParalaxContainer />
                <div className="container p-3">
                    <div className="container p-3">
                        <div className="container p-3">
                            <div className="container p-3">
                                <div className="container p-3">
                                    <h2><b>AASTU CMS</b></h2>
                                    <p>
                                        AASTU cms is a web platform developed by senior software engineering students as a final project  which is aimed to assist the organization of conferences in the university. The main objective of the project to automate the conference organization and management process in a simple way. The project is intended to be a replacement to the current manual system wich is  very tiresome and inefficent way of managing conferences.
                                        The platform is will allow to host conferenses in AASTU and allow reasearchers and lectureres to showcase their works,lectures or researches to the community of aastu. The conference management system (CMS) provides administrative support to conference administrators by structuring and partially automating many of the workflows and management tasks that arise during the preparation of the conference. This system is commonly used for scientific publication and reviews. It helps the program chair, the conference organizers, the authors and reviewers in their respective activities.                                    </p>
                                    <br />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
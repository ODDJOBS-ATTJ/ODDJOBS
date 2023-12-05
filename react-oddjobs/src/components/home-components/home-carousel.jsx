import React from "react"
import "../../../../ODDJOBS/General/home/CSS+JS/home.css"
import { Helmet } from "react-helmet"
import Tutor from "../../../../ODDJOBS/General/home/Images/carousels/Tutor.jpg"
import CarWash from "../../../../ODDJOBS/General/home/Images/carousels/carwash2.jpeg"
import MusicProd from "../../../../ODDJOBS/General/home/Images/carousels/musicproduction2.jpg"

function HomeCarousel() {
    return(
        <>
            <section id="home">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-4 p-0">
                        <div className="red-box">
                        <div className="text-container">
                            <h5>
                            Need somethin' done? <br />{" "}
                            <span>Get it done here, at ODDJOBS !</span>
                            </h5>
                        </div>
                        <a href="/General/login.html" className="bookservice">
                            BOOK YOUR <span>SERVICE</span>
                        </a>
                        </div>
                    </div>
                    <div className="col-8 p-0">
                        <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                        >
                        <ol className="carousel-indicators">
                            <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={0}
                            className="active"
                            />
                            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img
                                className="d-block w-100"
                                src={ MusicProd }
                                alt="First slide"
                            />
                            </div>
                            <div className="carousel-item">
                            <img
                                className="d-block w-100"
                                src={Tutor}
                                alt="Second slide"
                            />
                            </div>
                            <div className="carousel-item">
                            <img
                                className="d-block w-100"
                                src={ CarWash }
                                alt="Third slide"
                            />
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeCarousel
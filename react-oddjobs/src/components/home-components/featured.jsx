import React from "react"
import { ReactDOM } from "react"
import { Link } from "react-router-dom"

import MassageTherapy from '../../../../ODDJOBS/General/home/Images/carousels/MassageTherapy.jpg'
import MusicProd from '../../../../ODDJOBS/General/home/Images/carousels/musicproduction.png'
import HouseKeeping from '../../../../ODDJOBS/General/home/Images/carousels/HouseKeeping.jpg'
import LineStanding from '../../../../ODDJOBS/General/home/Images/carousels/LineStanding.jpg'
import CarWash from '../../../../ODDJOBS/General/home/Images/carousels/CarWash.jpg'
import DiscordMod from '../../../../ODDJOBS/General/home/Images/carousels/discordmod.jpg'
import Tutor from '../../../../ODDJOBS/General/home/Images/carousels/Tutor.jpg'

function Featured() {
    return(
        <>
        <section className="card-container" id="ourservices">
            <div className="innerbox">
                <div className="section-heading">
                <h6>Our Services</h6>
                <h2>Here are some of our featured services</h2>
                </div>
            </div>
            <div className="cardsize">
                <div id="myCarousel" className="owl-carousel owl-theme">
                {/* Item */}
                <div className="item">
                    <div className="card">
                    <img
                        src={MassageTherapy}
                        className="card-img-top"
                        alt="Image 1"
                    />
                    <div className="price">₱750</div>
                    <div className="card-body">
                        <h5 className="card-title">Massage Therapy</h5>
                        <p className="card-text">
                        {" "}
                        Relax and rejuvenate with our professional massage therapy
                        services.{" "}
                        </p>
                        <a href="/General/login.html">BOOK NOW</a>
                    </div>
                    </div>
                </div>
                {/* Item End */}
                {/* Item */}
                <div className="item">
                    <div className="card">
                    <img
                        src={MusicProd}
                        className="card-img-top"
                        alt="Image 2"
                    />
                    <div className="price">₱1250</div>
                    <div className="card-body">
                        <h5 className="card-title">Music Production</h5>
                        <p className="card-text">
                        {" "}
                        Need beats for a song? Hire a professional music producer.{" "}
                        </p>
                        <a href="/General/login.html">BOOK NOW</a>
                    </div>
                    </div>
                </div>
                {/* Item End */}
                {/* Item */}
                <div className="item">
                    <div className="card">
                    <img
                        src={HouseKeeping}
                        className="card-img-top"
                        alt="Image 3"
                    />
                    <div className="price">₱1500</div>
                    <div className="card-body">
                        <h5 className="card-title">Housekeeping</h5>
                        <p className="card-text">
                        {" "}
                        Let our expert housekeeping staff handle and organize your home
                        with precision and care.{" "}
                        </p>
                        <a href="/General/login.html">BOOK NOW</a>
                    </div>
                    </div>
                </div>
                {/* Item End */}
                {/* Item */}
                <div className="item">
                    <div className="card">
                    <img
                        src={LineStanding}
                        className="card-img-top"
                        alt="Image 4"
                    />
                    <div className="price">₱500</div>
                    <div className="card-body">
                        <h5 className="card-title">Professional Line Stander</h5>
                        <p className="card-text">
                        {" "}
                        Hire our professional line standers to save time and avoid queues.{" "}
                        </p>
                        <a href="/General/login.html">BOOK NOW</a>
                    </div>
                    </div>
                </div>
                {/* Item End */}
                {/* Item */}
                <div className="item">
                    <div className="card">
                    <img
                        src={CarWash}
                        className="card-img-top"
                        alt="Image 5"
                    />
                    <div className="price">₱1000</div>
                    <div className="card-body">
                        <h5 className="card-title">Car wash</h5>
                        <p className="card-text">
                        {" "}
                        Don't have time for car washes? Have them personally wash your
                        car, in your own garage!{" "}
                        </p>
                        <a href="services.html">BOOK NOW</a>
                    </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                    <img
                        src={DiscordMod}
                        className="card-img-top"
                        alt="Image 6"
                    />
                    <div className="price">₱250</div>
                    <div className="card-body">
                        <h5 className="card-title">Discord Moderator</h5>
                        <p className="card-text">
                        {" "}
                        Quality server management with our professionally trained
                        moderators{" "}
                        </p>
                        <a href="/General/login.html">BOOK NOW</a>
                    </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                    <img
                        src={Tutor}
                        className="card-img-top"
                        alt="Image 7"
                    />
                    <div className="price">₱750</div>
                    <div className="card-body">
                        <h5 className="card-title">Tutor</h5>
                        <p className="card-text">
                        {" "}
                        Get personalized tutoring services to excel in your studies.{" "}
                        </p>
                        <a href="/General/login.html">BOOK NOW</a>
                    </div>
                    </div>
                </div>
                {/* Item End */}
                </div>
            </div>
        </section>
        </>
    )
}

export default Featured
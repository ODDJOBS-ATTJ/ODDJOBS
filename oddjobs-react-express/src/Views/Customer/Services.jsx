import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/services.css';
import SignedInHeader from './Signed-In-Header';
import magnifyingGlass from './IMAGE/Icons/magnifying-glass.png';
import samplePhoto from './IMAGE/icons/samplePhoto.png';

function Services() {
    return (
        <div>
            <SignedInHeader />
            <div className="services-container">
                <div className="services-container-row">
                    <div className="services-container-col">
                        <div className="searchbar">
                            <img src={magnifyingGlass} alt="Magnifying Glass" />
                            <input type="text" placeholder="Masseur, Pet Caretaker, and more Odd-Jobs" />
                        </div>
                    </div>
                </div>
                <div className="services-container-row">
                    <h1>CATEGORIES</h1>
                </div>
                <div className="services-container-row">
                    <div className="categories-card">
                        <Link to="/customer/services" className="categories">
                            <div className="category-img">
                                <img src={samplePhoto} alt="Category" />
                            </div>
                            <h1>featured</h1>
                        </Link>
                        <Link to="/customer/services-categories" className="categories">
                            <div className="category-img">
                                <img src={samplePhoto} alt="Category" />
                            </div>
                            <h1>home</h1>
                        </Link>
                        <Link to="/customer/services-categories" className="categories">
                            <div className="category-img">
                                <img src={samplePhoto} alt="Category" />
                            </div>
                            <h1>event</h1>
                        </Link><Link to="/customer/services-categories" className="categories">
                            <div className="category-img">
                                <img src={samplePhoto} alt="Category" />
                            </div>
                            <h1>health</h1>
                        </Link>
                        <Link to="/customer/services-categories" className="categories">
                            <div className="category-img">
                                <img src={samplePhoto} alt="Category" />
                            </div>
                            <h1>engineer</h1>
                        </Link>
                        <Link to="/customer/services-categories" className="categories">
                            <div className="category-img">
                                <img src={samplePhoto} alt="Category" />
                            </div>
                            <h1>misc</h1>
                        </Link>
                        {/* Add similar Link components for other categories */}
                    </div>
                </div>
                <div className="services-container-row">
                    <h1>FEATURED SERVICES</h1>
                </div>
                <div className="services-container-row">
                    <div className="featured-services-row">
                        <Link to="/Customer/services-details" className="featured-services-col">
                            <div className="featured-services-content">
                                <div className="image">
                                    <img src={samplePhoto} />
                                </div>
                                <div className="space" />
                                <div className="description">
                                    <h1>massage therapy</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis,
                                        convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula </p>
                                </div>
                            </div>
                        </Link>
                        <div className="featured-services-space"></div>
                        <Link to="/Customer/services-details" className="featured-services-col">
                            <div className="featured-services-content">
                                <div className="image">
                                    <img src={samplePhoto} />
                                </div>
                                <div className="space" />
                                <div className="description">
                                    <h1>PROFESSIONAL LINE STANDER</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis,
                                        convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="services-container-row">
                    <div className="featured-services-row">
                        <Link to="/Customer/services-details" className="featured-services-col">
                            <div className="featured-services-content">
                                <div className="image">
                                    <img src={samplePhoto} />
                                </div>
                                <div className="space" />
                                <div className="description">
                                    <h1>TUTOR</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis,
                                        convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <div className="featured-services-space"></div>
                        <Link to="/Customer/services-details" className="featured-services-col">
                            <div className="featured-services-content">
                                <div className="image">
                                    <img src={samplePhoto} />
                                </div>
                                <div className="space" />
                                <div className="description">
                                    <h1>HOUSEKEEPING</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis,
                                        convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;

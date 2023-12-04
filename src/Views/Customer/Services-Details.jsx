import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './CSS/services.css';
import './CSS/services-details.css';
import SignedInHeader from './Signed-In-Header';
import samplePhoto from './IMAGE/icons/samplePhoto.png';

function ServicesDetails() {
    const navigate = useNavigate();
    return (
        <div>
            <SignedInHeader />
            <section className="allbox">
                <Link className='back-button-services' onClick={() => navigate(-1)}>
                    &larr; Back
                </Link>
                <div className="topbox">
                    <div className="innerbox">
                        <div className="innerbox2">
                            <div className="banner">
                                <div className="image">
                                    <img src={samplePhoto} />
                                </div>
                            </div>
                            <div className="order-details">
                                <div className="order">
                                    <div className="title">
                                        <h1>ORDER</h1>
                                    </div>
                                    <div className="content-row">
                                        <label htmlFor="cars">Orders</label>
                                    </div>
                                    <div className="content-row">
                                        <input type="text" />
                                    </div>
                                    <div className="content-row">
                                        <label htmlFor="cars">Duration <span>(hour)</span></label>
                                    </div>
                                    <div className="content-row">
                                        <input type="text" />
                                    </div>
                                    <div className="content-row">
                                        <label htmlFor="payment">payment options</label>
                                    </div>
                                    <div className="content-row">
                                        <select id="payment" name="payment">
                                            <option value="volvo"> &nbsp;2204</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="booking-details">
                                <div className="booking">
                                    <div className="title">
                                        <h1>BOOKING DETAILS</h1>
                                    </div>
                                    <table>
                                        <tbody><tr>
                                            <th>BASE PRICE:</th>
                                            <td>₱500</td>
                                        </tr>
                                        </tbody></table>
                                    <table>
                                        <tbody><tr>
                                            <th>ORDER:</th>
                                            <td>1</td>
                                        </tr>
                                        </tbody></table>
                                    <table className="duration">
                                        <tbody><tr>
                                            <th>DURATION:</th>
                                            <td>5</td>
                                        </tr>
                                        </tbody></table>
                                    <table>
                                        <tbody><tr>
                                            <th>TOTAL PRICE:</th>
                                            <td>₱2500</td>
                                        </tr>
                                        </tbody></table>
                                    <div className="content-row">
                                        <button className="content-col">BOOK NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottombox">
                    <div className="innerbox">
                        <div className="description-container">
                            <div className="description">
                                <h1>MASSAGE THERAPY</h1>
                                <p>Indulge in blissful relaxation with our professional in-home massage service, tailored to
                                    your needs and
                                    delivered right to your doorstep.</p>
                                <div className="selector">
                                    <button className="active-selector">OVERVIEW</button>
                                    <button>SPECIFICS</button>
                                    <button>POLICIES</button>
                                </div>
                                <div className="overview-specifics-policies">
                                    <h1>What does this service provide?</h1>
                                    <ul>
                                        <li>Skilled therapists delivering therapeutic techniques</li>
                                        <li>Convenient in-home massages tailored to you</li>
                                        <li>Relaxation and stress reduction</li>
                                        <li>Relief from muscle tension and pain</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServicesDetails;
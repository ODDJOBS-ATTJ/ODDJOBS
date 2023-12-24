import React, { useState, useEffect } from 'react';
import { ReactDOM } from "react"
import { Link } from "react-router-dom"
import Styles from './CSS/services.module.css'
import './CSS/services-details.css'
import SignedInHeader from "./Signed-In-Header"
import Sample from './Image/icons/samplePhoto.png'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ServicesDetails() {
    const location = useLocation();
    const serviceID = new URLSearchParams(location.search).get('serviceID');
    const [service, setService] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('overview');

    const [order, setOrder] = useState(0);
    const [duration, setDuration] = useState(0);

    const incrementOrder = () => {
        if (order < 10) {
            setOrder(order + 1);
        }
    };

    const decrementOrder = () => {
        if (order > 0) {
            setOrder(order - 1);
        }
    };

    const incrementDuration = () => {
        if (duration < 10) {
            setDuration(duration + 1);
        }
    };

    const decrementDuration = () => {
        if (duration > 0) {
            setDuration(duration - 1);
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:3000/service/${serviceID}`)
            .then(response => {
                setService(response.data.data[0]);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(`Error fetching data: ${error}`);
            })
    }, [serviceID]);

    useEffect(() => {
        console.log("Service Name:", service.serviceName);
        console.log("shortDesc:", service.shortDesc);
    }, [service]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <SignedInHeader />
            <a href="#" onClick={() => window.history.back()} className="back-button"> ← Back</a>
            <div className="container">
                <section className="allbox">
                    <div className="topbox">
                        <style scoped dangerouslySetInnerHTML={{ __html: "\n@import \"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\";\n" }} />
                        <div className="innerbox">
                            <div className="innerbox2">
                                <div className="banner">
                                    <div className="image">
                                        <img src={Sample} />
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
                                            <button onClick={decrementOrder}>-</button>
                                            <div className="input">{order}</div>
                                            <button onClick={incrementOrder}>+</button>
                                        </div>
                                        <div className="content-row">
                                            {service.serviceType === 'quantity' && (
                                                <label htmlFor="cars">{service.serviceType.toUpperCase()}</label>
                                            )}
                                            {service.serviceType === 'duration' && (
                                                <label htmlFor="cars">{service.serviceType.toUpperCase()} <span>(hour)</span></label>
                                            )}
                                        </div>
                                        {service.serviceType !== 'unspecified' && (
                                            <div className="content-row">
                                                <button onClick={decrementDuration}>-</button>
                                                <div className="input">{duration}</div>
                                                <button onClick={incrementDuration}>+</button>
                                            </div>
                                        )}
                                        <div className="content-row">
                                            <label htmlFor="payment">payment options</label>
                                        </div>
                                        <div className="content-row">
                                            <select id="payment" name="payment">
                                                <option value="volvo">
                                                     &nbsp;2204
                                                </option>
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
                                                <td>₱{service.basePrice}</td>
                                            </tr>
                                            </tbody></table>
                                        <table>
                                            <tbody><tr>
                                                <th>ORDER:</th>
                                                <td>{order}</td>
                                            </tr>
                                            </tbody></table>
                                        <table className="duration">
                                            <tbody><tr>
                                                <th>{service.serviceType.toUpperCase()}:</th>
                                                <td>{duration}</td>
                                            </tr>
                                            </tbody></table>
                                        <table>
                                            <tbody><tr>
                                                <th>TOTAL PRICE:</th>
                                                <td>₱{order * duration * service.basePrice}</td>
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
                                    <h1>{service.serviceName}</h1>
                                    <p>{service.shortDesc}</p>
                                    <div className="selector">
                                        <button className={activeTab === 'overview' ? 'active-selector' : ''} onClick={() => setActiveTab('overview')}>OVERVIEW</button>
                                        <button className={activeTab === 'specifics' ? 'active-selector' : ''} onClick={() => setActiveTab('specifics')}>SPECIFICS</button>
                                        <button className={activeTab === 'policies' ? 'active-selector' : ''} onClick={() => setActiveTab('policies')}>POLICIES</button>
                                    </div>
                                    <div className="overview-specifics-policies">
                                        {activeTab === 'overview' && (
                                            <>
                                                <h1>What does this service provide?</h1>
                                                <ul>
                                                    <li>{service.overview}</li>
                                                </ul>
                                            </>
                                        )}
                                        {activeTab === 'specifics' && (
                                            <>
                                                <h1>Specifics</h1>
                                                <ul>
                                                    {service.specifics.split(',').map((specific, index) => (
                                                        <li key={index}>{specific}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                        {activeTab === 'policies' && (
                                            <>
                                                <h1>Policies</h1>
                                                <ul>
                                                    <li>Download
                                                        <a href={`http://localhost:3000/${service.policies}`} download> {service.policies}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ServicesDetails;
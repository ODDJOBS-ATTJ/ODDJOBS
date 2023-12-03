import React from 'react';
import './CSS/default.css';
import { Link } from 'react-router-dom';
import pfp from './IMAGE/juan.png'

function SignedInHeader() {
    return (
        <div className="header">
            <div className="inner_header">
                <Link to="../" className="logo_container">
                    <div className="logo_box">
                        <h1>ODD<span>JOBS</span></h1>
                    </div>
                </Link>
                <ul className="nav">
                    <li><Link to="/customer/services">SERVICES</Link></li>
                    <li><Link to="/customer/bookings">BOOKINGS</Link></li>
                    <li className="user-greeting"><Link to="/customer/user-profile">Hi, Juan</Link></li>
                    <li className="pfp" tabIndex={0}>
                        <div className="dropdown">
                            <img src={pfp} alt="User Profile" className="dropbtn" />
                            <div className="dropdown-content">
                                <Link to="/customer/user-profile">User Profile</Link>
                                <Link to="../">Switch to worker view</Link>
                                <Link to="/customer/billings" className="billings">Billings</Link>
                                <div className="line" />
                                <Link to="../" className="signout">Log Out</Link>
                                {/* ../../General/home.html */}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default SignedInHeader;

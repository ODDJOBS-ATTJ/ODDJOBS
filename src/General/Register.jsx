import React from 'react';
import './CSS/styles.css';
import SignedOutHeader from '../General/Signed-Out-Header';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    return (
        <div>
            <SignedOutHeader />
            <div className="container">
            <Link className="back-button" onClick={navigate(-1)}>
                &larr; Back
            </Link>
                {/* REGISTER FORM */}
                <div className="card-form">
                    <form>
                        <h1>SIGN UP</h1>
                        <div className="content">
                            {/* Names */}
                            <div className="input-field">
                                <input type="text" placeholder="First Name" autoComplete="nope" />
                            </div>
                            <div className="input-field">
                                <input type="text" placeholder="Last Name" autoComplete="nope" />
                            </div>
                            {/* Birthday, Address, Phone Number */}
                            <div className="input-field">
                                <input type="birthday" placeholder="Birthday" autoComplete="nope" />
                            </div>
                            <div className="input-field">
                                <input type="address" placeholder="Current Address" autoComplete="nope" />
                            </div>
                            <div className="input-field">
                                <input type="tel" placeholder="Contact No. (09xx xxx xxx)" autoComplete="nope" />
                            </div>
                            {/* Email and Password */}
                            <div className="input-field">
                                <input type="email" placeholder="Email" autoComplete="nope" />
                            </div>
                            <div className="input-field">
                                <input type="email" placeholder="Confirm Email" autoComplete="nope" />
                            </div>
                            <div className="input-field">
                                <input type="password" placeholder="Password" autoComplete="new-password" />
                            </div>
                            <div className="input-field">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    autoComplete="new-password" />
                            </div>
                            <Link to="/role-select"><button className="submit-button">CONTINUE</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;

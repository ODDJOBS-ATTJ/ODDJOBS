import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import generalStyles from './CSS/general-styles.module.css';
import SignedOutHeader from '../General/Signed-Out-Header';

function Register() {
    const navigate = useNavigate();
    return (
        <div>
            <SignedOutHeader />
            <div className={generalStyles.container}>
                <Link className={generalStyles['back-button']} onClick={() => navigate(-1)}>
                    &larr; Back
                </Link>
                {/* REGISTER FORM */}
                <div className={generalStyles['card-form']}>
                    <form>
                        <h1>SIGN UP</h1>
                        <div className={generalStyles.content}>
                            {/* Names */}
                            <div className={generalStyles['input-field']}>
                                <input type="text" placeholder="First Name" autoComplete="nope" />
                            </div>
                            <div className={generalStyles['input-field']}>
                                <input type="text" placeholder="Last Name" autoComplete="nope" />
                            </div>
                            {/* Birthday, Address, Phone Number */}
                            <div className={generalStyles['input-field']}>
                                <input type="birthday" placeholder="Birthday" autoComplete="nope" />
                            </div>
                            <div className={generalStyles['input-field']}>
                                <input type="address" placeholder="Current Address" autoComplete="nope" />
                            </div>
                            <div className={generalStyles['input-field']}>
                                <input type="tel" placeholder="Contact No. (09xx xxx xxx)" autoComplete="nope" />
                            </div>
                            {/* Email and Password */}
                            <div className={generalStyles['input-field']}>
                                <input type="email" placeholder="Email" autoComplete="nope" />
                            </div>
                            <div className={generalStyles['input-field']}>
                                <input type="email" placeholder="Confirm Email" autoComplete="nope" />
                            </div>
                            <div className={generalStyles['input-field']}>
                                <input type="password" placeholder="Password" autoComplete="new-password" />
                            </div>
                            <div className={generalStyles['input-field']}>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    autoComplete="new-password"
                                />
                            </div>
                            <Link to="/role-select">
                                <button className={generalStyles['submit-button']}>CONTINUE</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;

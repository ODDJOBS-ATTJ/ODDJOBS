import React from 'react';
import './CSS/styles.css';
import SignedOutHeader from '../../General/Signed-Out-Header';
import { Link } from 'react-router-dom';

function adminRegister(){
  return (
    <div>
        <SignedOutHeader />
        <Link className="back-button" to="../">
            &larr; Back</Link>
            <div className="container">
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
                        {/* Contact & Email */}
                        <div className="input-field">
                        <input type="tel" placeholder="Contact No. (09xx xxx xxx)" autoComplete="nope" />
                        </div>
                        <div className="input-field">
                        <input type="email" placeholder="Email" autoComplete="nope" />
                        </div>
                        {/* Password */}
                        <div className="input-field">
                        <input type="password" placeholder="Password" autoComplete="new-password" />
                        </div>
                        <div className="input-field">
                        <input type="password" placeholder="Confirm Password" autoComplete="new-password" />
                        </div>
                        <Link to="/admin/profile"><button className="submit-button">CONTINUE</button></Link>
                    </div>
                    </form>
                </div>
            </div>
    </div>  
  );
}

export default adminRegister;
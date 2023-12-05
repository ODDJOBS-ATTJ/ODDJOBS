import React from 'react';
import './CSS/styles.css';
import SignedOutHeader from '../../General/Signed-Out-Header';
import { Link } from 'react-router-dom';


function adminForgotPassword(){
  return (
    <div>
      <SignedOutHeader />
      <Link className="back-button" to="../">&larr; Back</Link>
      <div className="container">
      {/* FORGOT PASSWORD FORM */}
        <div className="card-form">
          <form>
            <h1>FORGOT PASSWORD?</h1>
            <div className="content">
              {/* Names */}
              <div className="input-field">
                <input type="email" placeholder="Email" autoComplete="nope" />
              </div>
              <button className="submit-button">SUBMIT</button>
              <div className="check-inbox">
                <div className="info-icon">i</div>
                <p>Please click the link in your inbox, you will receive it shortly</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default adminForgotPassword;
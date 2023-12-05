import React from 'react';
import './CSS/styles.css';
import SignedOutHeader from '../../General/Signed-Out-Header';
import { Link } from 'react-router-dom';

function adminLogin(){
  return (
    <div>
        <SignedOutHeader />
        <div className="card-form">
        <form>
            <h1>LOGIN</h1>
            <div className="content">
            <div className="input-field">
                <input type="email" placeholder="Email" autoComplete="nope" />
            </div>
            <div className="input-field">
                <input type="password" placeholder="Password" autoComplete="new-password" />
            </div>
            <Link to="/admin/profile">
              <button className="submit-button">Sign in</button>
            </Link>
            <div>Don't have an account? <Link to="/adminRegister" className="linkunderlined">Register here</Link> </div>               
            <Link to="/adminForgotPassword" className="linkunderlined">Forgot Your Password?</Link>
            </div>
        </form>
        </div>
    </div>  
  );
}

export default adminLogin;
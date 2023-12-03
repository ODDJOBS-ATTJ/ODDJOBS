import React from 'react';
import './CSS/styles.css';
import SignedOutHeader from '../General/Signed-Out-Header';
import { Link } from 'react-router-dom';

function Login() {
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
                            <input
                                type="password"
                                placeholder="Password"
                                autoComplete="new-password" />
                        </div>
                        <button className="submit-button">Sign in</button>
                        <div>
                            Don't have an account?{' '}
                            <Link to="/register" className="linkunderlined">
                                Register here
                            </Link>
                        </div>
                        <Link to="/forgot-password" className="linkunderlined">
                            Forgot Your Password?
                        </Link>
                    </div>
                </form>
            </div>
        </div>  
    );
}

export default Login;

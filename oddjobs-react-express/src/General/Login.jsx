import React from 'react';
import generalStyles from './CSS/general-styles.module.css';
import SignedOutHeader from '../General/Signed-Out-Header';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <SignedOutHeader />
            <div className={generalStyles.container}>
                <div className={generalStyles['card-form']}>
                    <form>
                        <h1>LOGIN</h1>
                        <div className={generalStyles.content}>
                            <div className={generalStyles['input-field']}>
                                <input type="email" placeholder="Email" autoComplete="nope" />
                            </div>
                            <div className={generalStyles['input-field']}>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="new-password"
                                />
                            </div>
                            <button className={generalStyles['submit-button']}>Sign in</button>
                            <div>
                                Don't have an account?{' '}
                                <Link to="/register" className={generalStyles.linkunderlined}>
                                    Register here
                                </Link>
                            </div>
                            <Link to="/forgot-password" className={generalStyles.linkunderlined}>
                                Forgot Your Password?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

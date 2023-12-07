import React, { useState } from 'react';
import axios from 'axios';
import generalStyles from './CSS/general-styles.module.css';
import SignedOutHeader from '../General/Signed-Out-Header';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:3000/accounts/login', {
                email,
                password,
            });
            
            // Handle the response accordingly, e.g., set user authentication status
            console.log(response.data);
            
            // Check if login was successful
            if (response.data.status === 200) {
                // Set user authentication status or token in local storage/cookies
                // For now, let's assume that response.data.userId contains the user ID
                // You may want to customize this based on your authentication mechanism
                localStorage.setItem('userId', response.data.userId);
    
                // Redirect to the protected route
                navigate('/customer/services');
            } else {
                // Handle login failure
                console.error('Login failed:', response.data.message);
            }
        } catch (error) {
            console.error('Login failed:', error.message);
            // Handle login failure
        }
    };

    return (
        <div>
            <SignedOutHeader />
            <div className={generalStyles.container}>
                <div className={generalStyles['card-form']}>
                    <form onSubmit={handleLogin}>
                        <h1>LOGIN</h1>
                        <div className={generalStyles.content}>
                            <div className={generalStyles['input-field']}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="nope"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={generalStyles['input-field']}>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className={generalStyles['submit-button']}>
                                Sign in
                            </button>
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

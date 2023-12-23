import React, { useState } from 'react';
import axios from 'axios';
import generalStyles from './CSS/general-styles.module.css';
import SignedOutHeader from '../General/Signed-Out-Header';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


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
    
            if (response.data.status === 200) {
                Cookies.set('userID', response.data.userID, { sameSite: 'strict' });
                navigate('/role-select');
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                alert(error.response.data.message);
            } else if (error.request) {
                // The request was made but no response was received
                alert('Request was made but no response was received');
            } else {
                // Something happened in setting up the request that triggered an Error
                alert('Error', error.message);
            }
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

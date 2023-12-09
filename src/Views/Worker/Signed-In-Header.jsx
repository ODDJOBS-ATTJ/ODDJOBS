import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/default.css'
import Male from './Image/male.png'
import { useAuth } from '../../server/useAuth.js';
import logout from '../../server/logout.js';
import Cookies from 'js-cookie';
import axios from 'axios';

function SignedInHeader(){
  const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(true); // Initial state based on authentication status
    
    useAuth();

    const userID = Cookies.get('userID');
    const [user, setUser] = useState([{}]);

    useEffect(() => {
        axios.get(`http://localhost:3000/accounts/${userID}`)
            .then(response => {
                setUser(response.data.data);
            })
            .catch(error => {
                console.error(`Error fetching user data: ${error}`);
            });
    }, []);
    console.log(user);
    

    const handleLogout = async () => {
        await logout(); // Call the logout function

        // Update the local state to reflect the authentication status
        setAuthenticated(false);

        // Redirect to the login page
        navigate('/login');
    };

    // Conditional rendering based on authentication status
    if (!authenticated) {
        return null; // Render nothing if not authenticated
    }
    return(
    <div className="header">
        <div className="inner_header">
            <Link className="logo_container" href="/General/home/home.html">
            <div className="logo_box">
            <h1>ODD<span>JOBS</span></h1>
            </div>
            </Link>
    <ul className="nav">
      <li><Link to="/worker/services">SERVICES</Link></li>
      <li><Link to="/worker/bookings">BOOKINGS</Link></li>
      <li className="user-greeting"><Link to="/worker/profile">Hi, {user[0].firstName}</Link></li>
      <li className="pfp" tabIndex={0}>
        <div className="dropdown">
          <img src={Male} alt="User Profile" className="dropbtn" />
          <div className="dropdown-content">
            <Link to="/worker/profile">User Profile</Link>
            <Link to="/worker/worker-profile">Worker Profile</Link>
            <Link to="/worker/billings">Billings</Link>
            <Link to="/role-select">Switch to Customer view</Link>
            <div className="line" />
            <Link onClick={handleLogout} className="signout">Log Out</Link>
          </div>
        </div>
      </li>
    </ul>
    </div>
    </div>
    );
}   

export default SignedInHeader;


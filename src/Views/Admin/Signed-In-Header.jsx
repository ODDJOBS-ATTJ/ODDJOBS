import React from 'react';
import './CSS/default.css'
import { Link } from 'react-router-dom';
import Ditto from './Icons/ditto.jpg';
import Cookies from 'js-cookie';
import axios from 'axios';

function SignedInHeader(){
  return (
  <div className="header">
    <div className="inner_header">
      <a className="logo_container" href="/General/home/home.html">
        <div className="logo_box">
          <h1>ODD<span>JOBS</span></h1>
        </div>
      </a>
      <ul className="nav">
        <li><Link to="/admin/logs">ADMIN LOG</Link></li>
        <li><Link to="/admin/applications">APPLICATION</Link></li>
        <li><Link to="/admin/service-management">SERVICE MANAGEMENT</Link></li>
        <li><Link to="/admin/user-management">USER MANAGEMENT</Link></li>
        <li className="user-greeting"><Link to="/admin/profile">Hi, Beneditto</Link></li>
        <li className="pfp" tabIndex={0}>
          <div className="dropdown">
            <img src={Ditto} alt="User Profile" className="dropbtn" />
            <div className="dropdown-content">
              <Link to="/admin/profile">User Profile</Link>
              <div className="line" />
              <Link to="/" className="signout">Log Out</Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>  
  );
}

export default SignedInHeader;
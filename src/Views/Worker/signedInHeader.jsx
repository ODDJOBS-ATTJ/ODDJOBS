import React from "react"
import { ReactDOM } from "react"
import { Link } from "react-router-dom"
import './CSS/default.css'
import Johnny from './Image/Johnny.jpg'

function SignedInHeader(){
    return(
    <div className="header">
        <div className="inner_header">
            <Link className="logo_container" href="/General/home/home.html">
            <div className="logo_box">
            <h1>ODD<span>JOBS</span></h1>
            </div>
            </Link>
    <ul className="nav">
      <li><Link to="/workerServices">SERVICES</Link></li>
      <li><Link to="/workerBookings">BOOKINGS</Link></li>
      <li className="user-greeting"><Link to="#">Hi, Johnny</Link></li>
      <li className="pfp" tabIndex={0}>
        <div className="dropdown">
          <img src={Johnny} alt="User Profile" className="dropbtn" />
          <div className="dropdown-content">
            <Link to="/userProfile">User Profile</Link>
            <Link to="/workerProfile">Worker Profile</Link>
            <Link to="/workerBillings">Billings</Link>
            <Link to="#">Switch to Customer view</Link>
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
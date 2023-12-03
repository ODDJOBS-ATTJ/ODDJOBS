import React from "react"
import { ReactDOM } from "react"

function Header() {
    return(
        <>
            <div className="header">
            <div className="inner_header">
                <a className="logo_container" href="../../General/home/home.html">
                <div className="logo_box">
                    <h1>
                    ODD<span>JOBS</span>
                    </h1>
                </div>
                </a>
                <ul className="nav">
                <li>
                    <a href="#home" className="active">
                    Home
                    </a>
                </li>
                <li>
                    <a href="#ourpurpose">Our Purpose</a>
                </li>
                <li>
                    <a href="#ourservices">Our Services</a>
                </li>
                <li>
                    <a href="#aboutus">About Us</a>
                </li>
                <li>
                    <a href="#workforus">Work For Us</a>
                </li>
                <li>
                    <a href="/General/login.html">SIGN IN</a>
                </li>
                </ul>
            </div>
            </div>
 
        </>
    )
}

export default Header
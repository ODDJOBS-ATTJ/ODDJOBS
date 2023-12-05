import React from "react"
import { ReactDOM } from "react"
import { Link } from "react-router-dom"
import './CSS/default.css'

function SignedOutHeader(){
    return(
    <div className="header">
        <div className="inner_header">
            <Link className="logo_container" to="#">
                <div className="logo_box">
                <h1>ODD<span>JOBS</span></h1>
                </div>
            </Link>
        <ul className="nav">
            <li><Link to="#">SIGN IN</Link></li>
        </ul>
        </div>
    </div>
    );
}   

export default SignedOutHeader;
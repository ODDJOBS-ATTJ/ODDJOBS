import React from 'react';
import './CSS/default.css';
import { Link } from 'react-router-dom';

function SignedOutHeader() {
    return (
        <div className="header">
            <div className="inner_header">
                <Link to="./General/home/home.html" className="logo_container">
                    <div className="logo_box">
                        <h1>
                            ODD<span>JOBS</span>
                        </h1>
                    </div>
                </Link>
                <ul className="nav">
                    <li>
                        <Link to="../">SIGN IN</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SignedOutHeader;

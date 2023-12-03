import React from 'react';
import './CSS/styles.css';
import SignedOutHeader from '../General/Signed-Out-Header';
import { Link } from 'react-router-dom';

function RoleSelect() {
    return (
        <div>
            <div classname="header">
                <div classname="inner_header">
                    <a classname="logo_container" href="/General/home/home.html">
                        <div classname="logo_box">
                            <h1>ODD<span>JOBS</span></h1>
                        </div>
                    </a>
                    <ul classname="nav">
                        <li><a href="/General/login.html">SIGN IN</a></li>
                    </ul>
                </div>
            </div>
            <div classname="container">
                <a href="#" onclick="history.back();" classname="back-button"> ← Back</a>
                <div classname="container-decision">
                    <button classname="decision-button" onclick="document.location.href='/VIEWS/Customer/user-profile.html';">
                        <h1>CUSTOMER</h1>
                        <a><img src="/VIEWS/Customer/Images/customer.png" /></a>
                        <div classname="description-decision-button">
                            <p>HIRE WORKERS TO DO CERTAIN ODDJOBS</p>
                        </div>
                    </button>
                    <button classname="decision-button" onclick="document.location.href='/VIEWS/Worker/worker-register.html';">
                        <h1>WORKERS</h1>
                        <a><img src="/VIEWS/Customer/Images/workers.png" /></a>
                        <div classname="description-decision-button">
                            <p>WORK AND GET PAID WITH ODDJOBS</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RoleSelect;

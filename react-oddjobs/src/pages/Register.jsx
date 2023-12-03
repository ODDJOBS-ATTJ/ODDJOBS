import React from "react"
import { ReactDOM } from "react"
import Header from "../components/home-components/header"

function Register() {
    return(
        <>
            <Header />
            <div className="container">
            <a href="#" onclick="history.back();" className="back-button">
                {" "}
                ← Back
            </a>
            {/* REGISTER FORM */}
            <div className="card-form">
                <form>
                <h1>SIGN UP</h1>
                <div className="content">
                    {/* Names */}
                    <div className="input-field">
                    <input type="text" placeholder="First Name" autoComplete="nope" />
                    </div>
                    <div className="input-field">
                    <input type="text" placeholder="Last Name" autoComplete="nope" />
                    </div>
                    {/* Birthday, Address, Phone Number */}
                    <div className="input-field">
                    <input type="birthday" placeholder="Birthday" autoComplete="nope" />
                    </div>
                    <div className="input-field">
                    <input
                        type="address"
                        placeholder="Current Address"
                        autoComplete="nope"
                    />
                    </div>
                    <div className="input-field">
                    <input
                        type="tel"
                        placeholder="Contact No. (09xx xxx xxx)"
                        autoComplete="nope"
                    />
                    </div>
                    {/* Email and Password */}
                    <div className="input-field">
                    <input type="email" placeholder="Email" autoComplete="nope" />
                    </div>
                    <div className="input-field">
                    <input type="email" placeholder="Confirm Email" autoComplete="nope" />
                    </div>
                    <div className="input-field">
                    <input
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                    />
                    </div>
                    <div className="input-field">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        autoComplete="new-password"
                    />
                    </div>
                    <button className="submit-button">CONTINUE</button>
                </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default Register
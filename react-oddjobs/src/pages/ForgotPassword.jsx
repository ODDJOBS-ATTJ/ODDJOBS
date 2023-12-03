import React from "react"
import Header from "../components/home-components/header"
import Login from "./Login"
import { Link } from "react-router-dom"

function ForgotPassword() {
    return(
        <>
         <Header />
         <div className="container">
            <Link to="/login" className="back-button">← Back</Link>
            {/* FORGOT PASSWORD FORM */}
            <div className="card-form">
                <form>
                <h1>FORGOT PASSWORD?</h1>
                <div className="content">
                    {/* Names */}
                    <div className="input-field">
                    <input type="email" placeholder="Email" autoComplete="nope" />
                    </div>
                    <button className="submit-button">SUBMIT</button>
                    <div className="check-inbox">
                    <div className="info-icon">i</div>
                    <p>
                        Please click the link in your inbox, you will receive it shortly
                    </p>
                    </div>
                </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default ForgotPassword
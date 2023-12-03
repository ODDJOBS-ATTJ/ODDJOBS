import React from "react"
import { ReactDOM } from "react"
import { Link } from "react-router-dom"

import "../../../ODDJOBS/General/home/CSS+JS/default.css"
import "../../../ODDJOBS/VIEWS/Customer/CSS+JS/styles.css"
import Header from "../components/home-components/header"

function Login() {
    return(
        <>
            <Header />
            <div className="card-form">
                <form>
                    <h1>LOGIN</h1>
                    <div className="content">
                    <div className="input-field">
                        <input type="email" placeholder="Email" autoComplete="nope" />
                    </div>
                    <div className="input-field">
                        <input
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        />
                    </div>
                    <button className="submit-button">Sign in</button>
                    <div>
                        Don't have an account?{" "}
                        <Link to="/register" className="linkunderlined">Register here</Link>
                    </div>
                    <Link to="/forgot" className="linkunderlined">Forgot Your Password?</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
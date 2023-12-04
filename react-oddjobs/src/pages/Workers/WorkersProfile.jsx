import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";

import "../../../../ODDJOBS/VIEWS/Customer/CSS+JS/default.css"
import "../../../../ODDJOBS/VIEWS/Customer/CSS+JS/workers-profile.css"

import Header from "../../components/home-components/header";

function WorkersProfile() {
    return(
        <>
        <Header />
                <div className="container">
            <a href="#" onclick="history.back();" className="back-button">
                {" "}
                ← Back
            </a>
            <a href="#" className="report-button">
                REPORT
            </a>
            <div className="workers-profile-container">
                <div className="card-container">
                <div className="profile-card-container">
                    <div className="profile-imgbox">
                    <img src="/VIEWS/Customer/Images/icons/rotten.jpg" />
                    </div>
                    <div className="profile-card">
                    <h1>Johnny Rotten</h1>
                    <h2>Sex Pistols Frontman</h2>
                    <div className="profile-description">
                        <p>
                        John Joseph Lydon, also known by his former stage name Johnny
                        Rotten, is an English-American singer and songwriter. He was the
                        lead vocalist of the punk rock band the Sex Pistols, which was
                        active from 1975 to 1978, and again for various revivals during
                        the 1990s and 2000s.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card-container">
                <div className="ratings-card">
                    <h1>RATINGS</h1>
                    <div className="ratings">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                            <img src="/VIEWS/Customer/Images/icons/randomPerson.png" />
                            </td>
                            <td>
                            <h1>STEVE JONES</h1>
                            <div className="stars">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                            <h3>I’m rating myself. Please!</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <img src="/VIEWS/Customer/Images/icons/randomPerson.png" />
                            </td>
                            <td>
                            <h1>PAUL COOK</h1>
                            <div className="stars">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                            <h3>I’m rating myself. Please!</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <img src="/VIEWS/Customer/Images/icons/randomPerson.png" />
                            </td>
                            <td>
                            <h1>SID VICIOUS</h1>
                            <div className="stars">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                            <h3>God save the queen!</h3>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="applied-jobs-card">
                    <h1>APPLIED JOBS</h1>
                    <div className="applied-jobs">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                            <img src="/VIEWS/Customer/Images/icons/suitcase.png" />
                            </td>
                            <td>
                            <h1>JOB 1</h1>
                            <h3>Random Job 1</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <img src="/VIEWS/Customer/Images/icons/suitcase.png" />
                            </td>
                            <td>
                            <h1>JOB 2</h1>
                            <h3>Random Job 2</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <img src="/VIEWS/Customer/Images/icons/jobs.jpg" />
                            </td>
                            <td>
                            <h1>STEVE JOBS</h1>
                            <h3>Co-founder of Apple</h3>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default WorkersProfile
import React from "react"
import { ReactDOM } from "react"

import Ditto from      '../IMAGE/team/ditto.jpg'
import Xavier from     '../IMAGE/team/Xavier.jpg'
import Lyan from       '../IMAGE/team/Lyan.jpg'
import Nath from       '../IMAGE/team/nathaniel.jpg'

function Team() {
    return(
        <>
            <section className="aboutus" id="aboutus">
                <div className="innerbox">
                    <div className="section-heading">
                        <h6>Our Team</h6>
                        <h2>The founding developers of ODDJOBS</h2>
                    </div>
                </div>
                <div className="all-cards">
                    {/* Ditto Tiu CARD */}
                    <div className="container">
                        <div className="card">
                            <div className="content">
                                <div className="imgBx"><img src={ Ditto } alt="Ditto Tiu" /></div>
                                <div className="contentBx">
                                    <h3>Beneditto Tiu<br /><span>Computer Science</span></h3>
                                </div>
                            </div>
                            <ul className="sci">
                                <li style={{ '--i': 1 }}>
                                    <a href="https://www.facebook.com/ditto.tiu/">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li style={{ '--i': 2 }}>
                                    <a href="https://www.instagram.com/tiuditto/">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Xavier Angel CARD */}
                    <div className="container">
                        <div className="card">
                            <div className="content">
                                <div className="imgBx"><img src={ Xavier } alt="Xavier Angel" /></div>
                                <div className="contentBx">
                                    <h3>Xavier Angel<br /><span>Computer Science</span></h3>
                                </div>
                            </div>
                            <ul className="sci">
                                <li style={{ '--i': 1 }}>
                                    <a href="https://www.facebook.com/ProfessorEggsy/">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li style={{ '--i': 2 }}>
                                    <a href="https://www.instagram.com/theprofessorxavier/">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Lyan Jover CARD */}
                    <div className="container">
                        <div className="card">
                            <div className="content">
                                <div className="imgBx"><img src={ Lyan } alt="Lyan Jover" /></div>
                                <div className="contentBx">
                                    <h3>Lyan Jover<br /><span>Information Technology</span></h3>
                                </div>
                            </div>
                            <ul className="sci">
                                <li style={{ '--i': 1 }}>
                                    <a href="https://www.facebook.com/LyanJover/">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li style={{ '--i': 2 }}>
                                    <a href="https://www.instagram.com/mr.lyanethan/">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Nathaniel Borces CARD */}
                    <div className="container">
                        <div className="card">
                            <div className="content">
                                <div className="imgBx"><img src={ Nath } alt="Nathaniel Borces" /></div>
                                <div className="contentBx">
                                    <h3>Nathaniel Borces<br /><span>Computer Science</span></h3>
                                </div>
                            </div>
                            <ul className="sci">
                                <li style={{ '--i': 1 }}>
                                    <a href="https://www.facebook.com/profile.php?id=61550701461832/">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Team
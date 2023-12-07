import React from "react"
import { ReactDOM } from "react"
import { Link } from "react-router-dom"
import Styles from './CSS/services.module.css'
import './CSS/applyforjob.css'
import SignedInHeader from "./Signed-In-Header"
import Sample from './Image/samplePhoto.png'
import SearchIcon from './Image/magnifying-glass.png'

function Services() {
    return (
        <>
            <SignedInHeader />
            <div className={Styles['container']}>
                <div className={Styles['services-container']}>
                    <div className={Styles['services-container-row']}>
                        <div className={Styles['services-container-col']}>
                            <div className={Styles['searchbar']}>
                                <img src={SearchIcon} alt="Search Icon" />
                                <input type="text" placeholder="Masseur, Pet Caretaker, and more Odd-Jobs" />
                            </div>
                        </div>
                    </div>
                    <div className={Styles['services-container-row']}>
                        <h1>CATEGORIES</h1>
                    </div>
                    <div className={Styles['services-container-row']}>
                        <div className={Styles['categories-card']}>
                            <Link to="/worker/services">
                                <button className={Styles["categories"]}>
                                    <div className={Styles["category-img"]}>
                                        <img src={Sample} />
                                    </div>
                                    <h1>featured</h1>
                                </button>
                            </Link>
                            <Link to="/worker/services/categories">
                                <button className={Styles["categories"]}>
                                    <div className={Styles["category-img"]}>
                                        <img src={Sample} />
                                    </div>
                                    <h1>home</h1>
                                </button>
                            </Link>
                            <Link to="/worker/services/categories">
                                <button className={Styles["categories"]}>
                                    <div className={Styles["category-img"]}>
                                        <img src={Sample} />
                                    </div>
                                    <h1>event</h1>
                                </button>
                            </Link>
                            <Link to="/worker/services/categories">
                                <button className={Styles["categories"]}>
                                    <div className={Styles["category-img"]}>
                                        <img src={Sample} />
                                    </div>
                                    <h1>health</h1>
                                </button>
                            </Link>
                            <Link to="/worker/services/categories">
                                <button className={Styles["categories"]}>
                                    <div className={Styles["category-img"]}>
                                        <img src={Sample} />
                                    </div>
                                    <h1>engineer</h1>
                                </button>
                            </Link>
                            <Link to="/worker/services/categories">
                                <button className={Styles["categories"]}>
                                    <div className={Styles["category-img"]}>
                                        <img src={Sample} />
                                    </div>
                                    <h1>misc</h1>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className={Styles['services-container-row']}>
                        <h1>FEATURED SERVICES</h1>
                    </div>
                    <div className={Styles['services-container-row']}>
                        <div className={Styles['featured-services-row']}>
                            <Link to="/worker/services/details" className={Styles["details-link"]}>
                                <button className={Styles["featured-services-col"]}>
                                    <div className={Styles["featured-services-content"]}>
                                        <div className={Styles["image"]}>
                                            <img src={Sample} />
                                        </div>
                                        <div className={Styles["space"]} />
                                        <div className={Styles["description"]}>
                                            <h1>massage therapy</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis,
                                                convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula </p>
                                            <div className="apply-container">
                                                <a href="applypopuphere.html">
                                                    <div className="apply">Apply for job</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </Link>
                            <div className={Styles["featured-services-space"]}>
                            </div>
                            <Link to="/worker/services/details" className={Styles["details-link"]}>
                                <button className={Styles["featured-services-col"]}>
                                    <div className={Styles["featured-services-content"]}>
                                        <div className={Styles["image"]}>
                                            <img src={Sample} />
                                        </div>
                                        <div className={Styles["space"]} />
                                        <div className={Styles["description"]}>
                                            <h1>massage therapy</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis,
                                                convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula </p>
                                            <div className="apply-container">
                                                <a href="applypopuphere.html">
                                                    <div className="apply">Apply for job</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className={Styles['services-container-row']}>
                        <div className={Styles['featured-services-row']}>
                            <Link to="/worker/services/details" className={Styles["details-link"]}>
                                <button className={Styles["featured-services-col"]}>
                                    <div className={Styles["featured-services-content"]}>
                                        <div className={Styles["image"]}>
                                            <img src={Sample} />
                                        </div>
                                        <div className={Styles["space"]} />
                                        <div className={Styles["description"]}>
                                            <h1>massage therapy</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis,
                                                convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula </p>
                                            <div className="apply-container">
                                                <a href="applypopuphere.html">
                                                    <div className="apply">Apply for job</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </Link>
                            <div className={Styles["featured-services-space"]}>
                            </div>
                            <Link to="/worker/services/details" className={Styles["details-link"]}>
                                <button className={Styles["featured-services-col"]}>
                                    <div className={Styles["featured-services-content"]}>
                                        <div className={Styles["image"]}>
                                            <img src={Sample} />
                                        </div>
                                        <div className={Styles["space"]} />
                                        <div className={Styles["description"]}>
                                            <h1>massage therapy</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis,
                                                convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula </p>
                                            <div className="apply-container">
                                                <a href="applypopuphere.html">
                                                    <div className="apply">Apply for job</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className={Styles['services-container-row']}>
                        <div className={Styles['endSpace']}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
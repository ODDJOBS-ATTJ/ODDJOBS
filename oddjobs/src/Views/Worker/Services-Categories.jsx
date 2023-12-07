import React from "react"
import { ReactDOM } from "react"
import { Link } from "react-router-dom"
import Styles from './CSS/services.module.css'
import './CSS/applyforjob.css'
import SignedInHeader from "./Signed-In-Header"
import Sample from './Image/samplePhoto.png'
import SearchIcon from './Image/magnifying-glass.png'

function ServicesCategories() {
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
                        <h1>HOME</h1>
                    </div>
                    <div className={Styles["services-container-row"]}>
                        <Link to='/worker/services/details'>
                            <button className={Styles["other-categories-row"]}>
                                <div className={Styles["other-categories-content"]}>
                                    <div className={Styles["image"]}>
                                        <img src={Sample} />
                                    </div>
                                    <div className={Styles["space"]} />
                                    <div className={Styles["description"]}>
                                        <h1>Laundry Service</h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Cras ex nisi, congue sit amet varius quis, convallis et
                                            nulla. Duis ac est diam. Maecenas diam nunc, vestibulum
                                            vitae ligula quis, consectetur accumsan ligula. In non
                                            condimentum ligula, vel posuere neque. Donec id maximus
                                            ipsum. Nulla quis metus non mi pulvinar aliquam. Duis sit
                                            amet lectus semper diam convallis aliquam vitae vitae
                                            tellus. Donec in commodo mauris.
                                        </p>
                                        <div className="apply-container-categories">
                                            <a href="applypopuphere.html">
                                                <div className="apply">Apply for job</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className={Styles["services-container-row"]}>
                        <Link to='/worker/services/details'>
                            <button className={Styles["other-categories-row"]}>
                                <div className={Styles["other-categories-content"]}>
                                    <div className={Styles["image"]}>
                                        <img src={Sample} />
                                    </div>
                                    <div className={Styles["space"]} />
                                    <div className={Styles["description"]}>
                                        <h1>Carpentry</h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Cras ex nisi, congue sit amet varius quis, convallis et
                                            nulla. Duis ac est diam. Maecenas diam nunc, vestibulum
                                            vitae ligula quis, consectetur accumsan ligula. In non
                                            condimentum ligula, vel posuere neque. Donec id maximus
                                            ipsum. Nulla quis metus non mi pulvinar aliquam. Duis sit
                                            amet lectus semper diam convallis aliquam vitae vitae
                                            tellus. Donec in commodo mauris.
                                            <div className="apply-container-categories">
                                                <a href="applypopuphere.html">
                                                    <div className="apply">Apply for job</div>
                                                </a>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className={Styles["services-container-row"]}>
                        <Link to='/worker/services/details'>
                            <button className={Styles["other-categories-row"]}>
                                <div className={Styles["other-categories-content"]}>
                                    <div className={Styles["image"]}>
                                        <img src={Sample} />
                                    </div>
                                    <div className={Styles["space"]} />
                                    <div className={Styles["description"]}>
                                        <h1>Fixing Sinks</h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Cras ex nisi, congue sit amet varius quis, convallis et
                                            nulla. Duis ac est diam. Maecenas diam nunc, vestibulum
                                            vitae ligula quis, consectetur accumsan ligula. In non
                                            condimentum ligula, vel posuere neque. Donec id maximus
                                            ipsum. Nulla quis metus non mi pulvinar aliquam. Duis sit
                                            amet lectus semper diam convallis aliquam vitae vitae
                                            tellus. Donec in commodo mauris.
                                            <div className="apply-container-categories">
                                                <a href="applypopuphere.html">
                                                    <div className="apply">Apply for job</div>
                                                </a>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className={Styles["services-container-row"]}>
                        <Link to='/worker/services/details'>
                            <button className={Styles["other-categories-row"]}>
                                <div className={Styles["other-categories-content"]}>
                                    <div className={Styles["image"]}>
                                        <img src={Sample} />
                                    </div>
                                    <div className={Styles["space"]} />
                                    <div className={Styles["description"]}>
                                        <h1>Room Cleaning</h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Cras ex nisi, congue sit amet varius quis, convallis et
                                            nulla. Duis ac est diam. Maecenas diam nunc, vestibulum
                                            vitae ligula quis, consectetur accumsan ligula. In non
                                            condimentum ligula, vel posuere neque. Donec id maximus
                                            ipsum. Nulla quis metus non mi pulvinar aliquam. Duis sit
                                            amet lectus semper diam convallis aliquam vitae vitae
                                            tellus. Donec in commodo mauris.
                                            <div className="apply-container-categories">
                                                <a href="applypopuphere.html">
                                                    <div className="apply">Apply for job</div>
                                                </a>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className={Styles['services-container-row']}>
                        <div className={Styles['endSpace']}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicesCategories;
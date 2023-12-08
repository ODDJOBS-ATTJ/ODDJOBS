import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CSS/services.module.css';
import SignedInHeader from './Signed-In-Header';
import magnifyingGlass from './IMAGE/Icons/magnifying-glass.png';
import samplePhoto from './IMAGE/icons/samplePhoto.png';

function Services() {
    return (
        <div>
            <SignedInHeader />
            <div className={styles['services-container']}>
                <div className={styles['services-container-row']}>
                    <div className={styles['services-container-col']}>
                        <div className={styles['searchbar']}>
                            <img src={magnifyingGlass} alt="Magnifying Glass" />
                            <input type="text" placeholder="Masseur, Pet Caretaker, and more Odd-Jobs" />
                        </div>
                    </div>
                </div>
                <div className={styles['services-container-row']}>
                    <h1>CATEGORIES</h1>
                </div>
                <div className={styles['services-container-row']}>
                    <div className={styles['categories-card']}>
                        <Link to="/customer/services" className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={samplePhoto} alt="Category" />
                            </div>
                            <h1>featured</h1>
                        </Link>
                        <Link to="/customer/services/categories" className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={samplePhoto} alt="Category" />
                            </div>
                            <h1>home</h1>
                        </Link>
                        <Link to="/customer/services/categories" className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={samplePhoto} alt="Category" />
                            </div>
                            <h1>event</h1>
                        </Link>
                        <Link to="/customer/services/categories" className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={samplePhoto} alt="Category" />
                            </div>
                            <h1>health</h1>
                        </Link>
                        <Link to="/customer/services/categories" className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={samplePhoto} alt="Category" />
                            </div>
                            <h1>engineer</h1>
                        </Link>
                        <Link to="/customer/services/categories" className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={samplePhoto} alt="Category" />
                            </div>
                            <h1>misc</h1>
                        </Link>
                        {/* Add similar Link components for other categories */}
                    </div>
                </div>
                <div className={styles['services-container-row']}>
                    <h1>FEATURED SERVICES</h1>
                </div>
                <div className={styles['services-container-row']}>
                    <div className={styles['featured-services-row']}>
                        <Link to="/Customer/services/details" className={styles['featured-services-col']}>
                            <div className={styles['featured-services-content']}>
                                <div className={styles['image']}>
                                    <img src={samplePhoto} alt="Featured Service" />
                                </div>
                                <div className={styles['space']} />
                                <div className={styles['description']}>
                                    <h1>massage therapy</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis,
                                        convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula </p>
                                </div>
                            </div>
                        </Link>
                        <div className={styles['featured-services-space']}></div>
                        <Link to="/Customer/services/details" className={styles['featured-services-col']}>
                            <div className={styles['featured-services-content']}>
                                <div className={styles['image']}>
                                    <img src={samplePhoto} alt="Featured Service" />
                                </div>
                                <div className={styles['space']} />
                                <div className={styles['description']}>
                                    <h1>PROFESSIONAL LINE STANDER</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis,
                                        convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles['services-container-row']}>
                    <div className={styles['featured-services-row']}>
                        <Link to="/Customer/services/details" className={styles['featured-services-col']}>
                            <div className={styles['featured-services-content']}>
                                <div className={styles['image']}>
                                    <img src={samplePhoto} alt="Featured Service" />
                                </div>
                                <div className={styles['space']} />
                                <div className={styles['description']}>
                                    <h1>TUTOR</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis,
                                        convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <div className={styles['featured-services-space']}></div>
                        <Link to="/Customer/services/details" className={styles['featured-services-col']}>
                            <div className={styles['featured-services-content']}>
                                <div className={styles['image']}>
                                    <img src={samplePhoto} alt="Featured Service" />
                                </div>
                                <div className={styles['space']} />
                                <div className={styles['description']}>
                                    <h1>HOUSEKEEPING</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis,
                                        convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;

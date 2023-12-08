import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './CSS/services.module.css';
import SignedInHeader from './Signed-In-Header';
import magnifyingGlass from './IMAGE/Icons/magnifying-glass.png';
import samplePhoto from './IMAGE/icons/samplePhoto.png';

function ServicesSearch() {
    const navigate = useNavigate();
    return (
        <div>
            <SignedInHeader />
            <div className={styles['services-container']}>
                <Link className={styles['back-button-services']} onClick={() => navigate(-1)}>
                    &larr; Back
                </Link>
                <div className={styles['services-container-row']}>
                    <div className={styles['services-container-col']}>
                        <div className={styles['searchbar']}>
                            <img src={magnifyingGlass} alt="Magnifying Glass" />
                            <input type="text" placeholder="Masseur, Pet Caretaker, and more Odd-Jobs" />
                        </div>
                    </div>
                </div>

                <div className={styles['services-container-row']}>
                    <h1>About 4 results</h1>
                </div>
                <div className={styles['services-container-row']}>
                    <Link to="/Customer/services/details" className={styles['other-categories-row']}>
                        <div className={styles['other-categories-content']}>
                            <div className={styles['image']}>
                                <img src={samplePhoto} alt="Service" />
                            </div>
                            <div className={styles['space']}></div>
                            <div className={styles['description']}>
                                <h1>LAUNDRY SERVICE</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis, convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula quis, consectetur accumsan ligula. In non condimentum ligula, vel posuere neque. Donec id maximus ipsum. Nulla quis metus non mi pulvinar aliquam. Duis sit amet lectus semper diam convallis aliquam vitae vitae tellus. Donec in commodo mauris.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles['services-container-row']}>
                    <Link to="/Customer/services/details" className={styles['other-categories-row']}>
                        <div className={styles['other-categories-content']}>
                            <div className={styles['image']}>
                                <img src={samplePhoto} alt="Service" />
                            </div>
                            <div className={styles['space']}></div>
                            <div className={styles['description']}>
                                <h1>CARPENTRY</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis, convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula quis, consectetur accumsan ligula. In non condimentum ligula, vel posuere neque. Donec id maximus ipsum. Nulla quis metus non mi pulvinar aliquam. Duis sit amet lectus semper diam convallis aliquam vitae vitae tellus. Donec in commodo mauris.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles['services-container-row']}>
                    <Link to="/Customer/services/details" className={styles['other-categories-row']}>
                        <div className={styles['other-categories-content']}>
                            <div className={styles['image']}>
                                <img src={samplePhoto} alt="Service" />
                            </div>
                            <div className={styles['space']}></div>
                            <div className={styles['description']}>
                                <h1>FIXING SINKS</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis, convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula quis, consectetur accumsan ligula. In non condimentum ligula, vel posuere neque. Donec id maximus ipsum. Nulla quis metus non mi pulvinar aliquam. Duis sit amet lectus semper diam convallis aliquam vitae vitae tellus. Donec in commodo mauris.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles['services-container-row']}>
                    <Link to="/Customer/services/details" className={styles['other-categories-row']}>
                        <div className={styles['other-categories-content']}>
                            <div className={styles['image']}>
                                <img src={samplePhoto} alt="Service" />
                            </div>
                            <div className={styles['space']}></div>
                            <div className={styles['description']}>
                                <h1>CLEANING ROOMS</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis, convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula quis, consectetur accumsan ligula. In non condimentum ligula, vel posuere neque. Donec id maximus ipsum. Nulla quis metus non mi pulvinar aliquam. Duis sit amet lectus semper diam convallis aliquam vitae vitae tellus. Donec in commodo mauris.</p>
                            </div>
                        </div>
                    </Link>
                </div>  
            </div>
        </div>
    );
}

export default ServicesSearch;

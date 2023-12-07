import React from "react";
import { Link } from "react-router-dom";
import SignedInHeader from "./Signed-In-Header";
import styles from './CSS/user-profile.module.css';
import '../Customer/CSS/user-profile-fab.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Johnny from './Image/Johnny.jpg';

function UserProfile() {
    return (
        <>
            <SignedInHeader />
            <div>
                <div className={styles.container}>
                    {/* USER CARD */}
                    <div className={styles['user-card']}>
                        <div className={styles['profile-pic']}>
                            <img src={Johnny} alt="Johnny Del Mondo" />
                        </div>
                        <div className={styles.labels}>
                            <h2>Johnny Del Mondo</h2>
                            <h3>Worker from Cebu City</h3>
                        </div>
                        <div className={styles["icons"]}>
                        <Link to="https://www.facebook.com/juandelacruz"><i className="fab fa-facebook-square" id="facebook" /></Link>
                        <Link to="https://www.instagram.com/juandelacruz"><i className="fab fa-instagram-square" id="instagram" /></Link>
                    </div>
                        <div className={styles['edit-button-box']}>
                            <Link to="/worker/profile/edit" className={styles['edit-button']}>
                                <p>EDIT PROFILE</p>
                            </Link>
                        </div>
                        <div className={styles['user-info']}>
                            <div className={styles['user-info-box']}>
                                <h3> Learn more about Johnny Del Mondo</h3>
                                <ul>
                                    <li>johnnydelliii33@gmail.com</li>
                                    <li>0912 345 6789</li>
                                    <li>01/01/2001</li>
                                    <li>9W27+R8R, Sitio Nasipit, Brgy, Cebu City</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;

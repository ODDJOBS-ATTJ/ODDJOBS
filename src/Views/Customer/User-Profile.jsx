import React, { useState, useEffect } from 'react';
import styles from './CSS/user-profile.module.css';
import './CSS/user-profile-fab.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import pfp from './IMAGE/juan.png';
import Cookies from 'js-cookie';
import axios from 'axios';

function UserProfile() {
    const userID = Cookies.get('userID');
    const [user, setUser] = useState([{}]);

    useEffect(() => {
        axios.get(`http://localhost:3000/accounts/${userID}`)
            .then(response => {
                setUser(response.data.data);
            })
            .catch(error => {
                console.error(`Error fetching user data: ${error}`);
            });
    }, []);
    console.log(user);

    
    return (
        <div>
        <SignedInHeader/>
            <div className={styles["container"]}>
            
                {/* USER CARD */}
                <div className={styles["user-card"]}>
                    <div className={styles["profile-pic"]}>
                        <img src={pfp} alt="Profile Picture" />
                    </div>
                    <div className={styles["labels"]}>
                        <h2>{user[0].firstName} {user[0].lastName}</h2>
                        <h3>Customer from {user[0].city} City</h3>
                    </div>
                    <div className={styles["icons"]}>
                        <Link to={user[0].fbLink}><i className="fab fa-facebook-square" id="facebook" /></Link>
                        <Link to={user[0].instaLink}><i className="fab fa-instagram-square" id="instagram" /></Link>
                    </div>
                    <div className={styles["edit-button-box"]}>
                        <Link to="/customer/profile/edit" className={styles["edit-button"]}><p>EDIT PROFILE</p></Link>
                    </div>
                    <div className={styles["user-info"]}>
                        <div className={styles["user-info-box"]}>
                            <h3> Learn more about {user[0].firstName} {user[0].lastName}</h3>
                            <ul>
                                <li>{user[0].email}</li>
                                <li>{user[0].phoneNumber}</li>
                                {/* <li>{user[0].birthday}</li> */}
                                <li>{user[0].barangay}, {user[0].city}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;

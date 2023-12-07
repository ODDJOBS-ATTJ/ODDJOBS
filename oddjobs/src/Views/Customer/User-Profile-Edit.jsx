import React from 'react';
import styles from './CSS/user-profile-edit.module.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import pfp from './IMAGE/juan.png';

function UserProfileEdit() {
    return (
        <div>
            <SignedInHeader />
            <div className={styles['container']}>
                {/* USER CARD */}
                <div className={styles['user-card']}>
                    <div className={styles['profile-pic']}>
                        <div className={styles['centerer']}>
                            <label htmlFor="fileInput1" className={styles['styled-input']} id={styles['label1']} onClick={() => document.getElementById('fileInput1').click()}>
                                Upload Photo
                            </label>
                            <input type="file" id="fileInput1" className={styles['file-input']} style={{ display: 'none' }} />
                            <img src={pfp} alt="User Profile" />
                        </div>
                    </div>
                    <div className={styles['edit-button-box']}>
                        <Link to="/customer/profile" className={styles['edit-button']}>
                            <p>SAVE PROFILE</p>
                        </Link>
                    </div>
                    <div className={styles['user-info']}>
                        <div className={styles['user-info-box']}>
                            <div className={styles['input-field-edit']}>
                                <h3>Edit your account details:</h3>
                                <input type="url" placeholder="Facebook Link" autoComplete="nope" />
                                <input type="url" placeholder="Instagram link" autoComplete="nope" />
                                <input type="email" placeholder="Email" autoComplete="nope" />
                                <input id="phone" type="tel" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone Number" autoComplete="nope" />
                                <input type="date" autoComplete="nope" />
                                <h4>Current Address:</h4>
                                <div className={styles['input-field-select']}>
                                    <select id="Region" size={1}>
                                        <option value="" selected="selected">Select Region</option>
                                    </select>
                                    <select id="City" size={1}>
                                        <option value="" selected="selected">Select City</option>
                                    </select>
                                </div>
                                <div className={styles['input-field-select-rowtwo']}>
                                    <select id="Barangay" size={1}>
                                        <option value="" selected="selected">Select Barangay</option>
                                    </select>
                                    <input type="tel" pattern="\d{4}" placeholder="Zip Code" maxLength={4} autoComplete="nope" className={styles['zipcode']} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfileEdit;

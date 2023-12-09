import React, { useState } from 'react';
import styles from './CSS/user-profile-edit.module.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import pfp from './IMAGE/juan.png';
import axios from 'axios';
import Cookies from 'js-cookie';

function UserProfileEdit() {
    const [region, setRegion] = useState("");
    const [city, setCity] = useState("");
    const [barangay, setBarangay] = useState("");
    const [fileName, setFileName] = useState("");

    const barangays = {
        "Visayas": {
            "Cebu": ["Talamban", "Banilad", "Lahug"],
            "Lapu-Lapu": ["Gun-Ob", "Pajo", "Maribago"]
        }
    };

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
        setCity(""); // Reset city when region changes
        setBarangay(""); // Reset barangay when region changes
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
        setBarangay(""); // Reset barangay when city changes
    };

    const handleBarangayChange = (event) => {
        setBarangay(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userID = Cookies.get('userID');

        const data = new FormData();
        data.append('email', event.target.elements.email.value);
        data.append('phoneNumber', event.target.elements.phone.value);
        data.append('birthday', event.target.elements.date.value);
        data.append('region', region);
        data.append('city', city);
        data.append('barangay', barangay);
        data.append('zipCode', event.target.elements.zipcode.value);
        data.append('fbLink', event.target.elements.fbLink.value);
        data.append('instaLink', event.target.elements.instaLink.value);
        data.append('pfp', event.target.elements.fileInput1.files[0]);

        try {
            const response = await axios.put(`http://localhost:3000/accounts/updateProfile/${userID}`, data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <SignedInHeader />
            <form onSubmit={handleSubmit}>
                <div className={styles['container']}>
                    <div className={styles['user-card']}>
                        <div className={styles['profile-pic']}>
                            <div className={styles['centerer']}>
                                <label htmlFor="fileInput1" className={styles['styled-input']} id={styles['label1']}>
                                    {fileName ? fileName : "Upload Photo"}
                                </label>
                                <input
                                    type="file"
                                    id="fileInput1"
                                    name="fileInput1"
                                    className={styles['file-input']}
                                    style={{ display: 'none' }}
                                    onChange={(e) => setFileName(e.target.files[0].name)}
                                />
                                <img src={pfp} alt="User Profile" />
                            </div>
                        </div>
                        <div className={styles['edit-button-box']}>
                            <button className={styles['edit-button']}>
                                <p>SAVE PROFILE</p>
                            </button>
                        </div>
                        <div className={styles['user-info']}>
                            <div className={styles['user-info-box']}>
                                <div className={styles['input-field-edit']}>
                                    <h3>Edit your account details:</h3>
                                    <input type="url" name="fbLink" placeholder="Facebook Link" autoComplete="nope" />
                                    <input type="url" name="instaLink" placeholder="Instagram link" autoComplete="nope" />
                                    <input type="email" name="email" placeholder="Email" autoComplete="nope" />
                                    <input id="phone" type="tel" name="phone" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone Number" autoComplete="nope" />
                                    <input type="date" name="date" autoComplete="nope" />
                                    <h4>Current Address:</h4>
                                    <div className={styles['input-field-select']}>
                                        <select id="Region" value={region} onChange={handleRegionChange}>
                                            <option value="">Select Region</option>
                                            {Object.keys(barangays).map((region) => (
                                                <option key={region} value={region}>{region}</option>
                                            ))}
                                        </select>
                                        <select id="City" value={city} onChange={handleCityChange}>
                                            <option value="">Select City</option>
                                            {region && Object.keys(barangays[region]).map((city) => (
                                                <option key={city} value={city}>{city}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className={styles['input-field-select-rowtwo']}>
                                        <select id="Barangay" value={barangay} onChange={handleBarangayChange}>
                                            <option value="">Select Barangay</option>
                                            {city && barangays[region][city].map((barangay) => (
                                                <option key={barangay} value={barangay}>{barangay}</option>
                                            ))}
                                        </select>
                                        <input type="tel" pattern="\d{4}" name="zipcode" placeholder="Zip Code" maxLength={4} autoComplete="nope" className={styles['zipcode']} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserProfileEdit;

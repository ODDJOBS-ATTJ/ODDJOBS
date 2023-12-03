import React from 'react';
import './CSS/styles.css';
import './CSS/user-profile.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import pfp from './IMAGE/juan.png'

function UserProfile() {
    return (
        <div>
            <SignedInHeader />
            <div className="container">
                {/* USER CARD */}
                <div className="user-card">
                    <div className="profile-pic">
                        <img src={pfp} alt="Profile Picture" />
                    </div>
                    <div className="labels">
                        <h2>Juan Dela Cruz</h2>
                        <h3>Customer from Cebu City</h3>
                    </div>
                    <div className="icons">
                        {/* <Link to="https://www.facebook.com/juandelacruz"><i className="fa-brands fa-square-facebook" id="facebook" /></Link> */}
                        {/* <Link to="https://www.instagram.com/juandelacruz"><i className="fa-brands fa-square-instagram" id="instagram" /></Link> */}
                    </div>
                    <div className="edit-button-box">
                        <Link to="/customer/user-profile-edit" className="edit-button"><p>EDIT PROFILE</p></Link>
                    </div>
                    <div className="user-info">
                        <div className="user-info-box">
                            <h3> Learn more about Juan Dela Cruz</h3>
                            <ul>
                                <li>juandelacruz@gmail.com</li>
                                <li>0912 345 6789</li>
                                <li>01/01/2001</li>
                                <li>9W27+R8R, Sitio Nasipit, Brgy, Cebu City</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
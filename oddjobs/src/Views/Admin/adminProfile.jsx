import React from 'react';
import Styles from './CSS/admin-profile.module.css';
import './CSS/fab.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import Ditto from './Icons/ditto.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function adminProfile(){
  return (
    <div>
        <SignedInHeader/>
        <div className={Styles['container']}>
        {/* USER CARD */}
        <div className={Styles['user-card']}>
            <div className={Styles['profile-pic']}>
            <img src={Ditto} />
            </div>
            <div className={Styles['labels']}>
            <h2>Beneditto Alfonso A. Tiu</h2>
            <h3>Customer from Lapu-Lapu City</h3>
            </div>
            <div className={Styles['icons']}>
            <Link to="https://www.facebook.com/juandelacruz"><i className="fab fa-facebook-square" id="facebook" /></Link>
            <Link to="https://www.instagram.com/juandelacruz"><i className="fab fa-instagram-square" id="instagram" /></Link>
            </div>
            <div className={Styles['spacer']}/>
            <div className={Styles['edit-button-box']}>
            <Link to="/admin/profile/edit" className={Styles['edit-button']}>
                <p>EDIT PROFILE</p>
            </Link>
            </div>
            <div className={Styles['user-info']}>
            <div className={Styles['user-info-box']}>
                <h3> Learn more about Beneditto Tiu</h3>
                <ul>
                <li>22100327@usc.edu.ph</li>
                <li>0939 910 4220</li>
                </ul></div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default adminProfile;
import React from "react"
import { ReactDOM } from "react"
import { Link } from "react-router-dom"
import SignedInHeader from "./signedInHeader"
import './CSS/user-profile.css'
import Johnny from './Image/Johnny.jpg'

function UserProfile(){
    return(
        <>
            <SignedInHeader/>
            <div>
                <div className="container">
                    {/* USER CARD */}
                    <div className="user-card">
                    <div className="profile-pic">
                        <img src={Johnny} />
                    </div>
                    <div className="labels">
                        <h2>Johnny Del Mondo</h2>
                        <h3>Worker from Cebu City</h3>
                    </div>
                    <div className="icons">
                        <a href="https://www.facebook.com/johnnydelmondo"><i className="fa-brands fa-square-facebook" id="facebook" /></a>
                        <a href="https://www.instagram.com/johnnydelmondo"><i className="fa-brands fa-square-instagram" id="instagram" /></a>
                    </div>
                    <div className="edit-button-box">
                        <Link to="/userProfile/edit" className="edit-button">
                        <p>EDIT PROFILE</p>
                        </Link>
                    </div>
                    <div className="user-info">
                        <div className="user-info-box">
                        <h3> Learn more about Johnny Del Mondo</h3>
                        <ul>
                            <li>johnnydelliii33@gmail.com</li>
                            <li>0912 345 6789</li>
                            <li>01/01/2001</li>
                            <li>9W27+R8R, Sitio Nasipit, Brgy, Cebu City</li>
                        </ul></div>
                    </div>
                    </div>
                </div>
                </div>
        </>
    );
}

export default UserProfile;
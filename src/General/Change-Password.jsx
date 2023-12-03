import React from 'react';
import './CSS/styles.css';
import SignedOutHeader from '../General/Signed-Out-Header';

function ChangePassword() {
    return (
        <div>
            <SignedOutHeader />
            <div className="container">
                <div className="card-form">
                    <form>
                        <h1>CHANGE YOUR PASSWORD</h1>
                        <div className="content">
                            <div className="input-field">
                                <input type="text" placeholder="New Password" autoComplete="nope" />
                            </div>
                            <div className="input-field">
                                <input type="text" placeholder="Confirm Password" autoComplete="nope" />
                            </div>
                            <button className="submit-button">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword;
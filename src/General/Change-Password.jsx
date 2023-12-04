import React from 'react';
import generalStyles from './CSS/general-styles.module.css';
import SignedOutHeader from '../General/Signed-Out-Header';

function ChangePassword() {
    return (
        <div>
            <SignedOutHeader />
            <div className={generalStyles.container}>
                <div className={generalStyles['card-form']}>
                    <form>
                        <h1>CHANGE YOUR PASSWORD</h1>
                        <div className={generalStyles.content}>
                            <div className={generalStyles['input-field']}>
                                <input type="text" placeholder="New Password" autoComplete="nope" />
                            </div>
                            <div className={generalStyles['input-field']}>
                                <input type="text" placeholder="Confirm Password" autoComplete="nope" />
                            </div>
                            <button className={generalStyles['submit-button']}>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword;

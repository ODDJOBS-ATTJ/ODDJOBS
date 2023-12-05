import React from 'react';
import generalStyles from './CSS/general-styles.module.css';
import SignedOutHeader from '../General/Signed-Out-Header';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const navigate = useNavigate();
    return (
        <div>
            <SignedOutHeader />
            <div className={generalStyles.container}>
                <Link className={generalStyles['back-button']} onClick={() => navigate(-1)}>
                    &larr; Back
                </Link>
                <div className={generalStyles['card-form']}>
                    <form>
                        <h1>FORGOT PASSWORD?</h1>
                        <div className={generalStyles.content}>
                            <div className={generalStyles['input-field']}>
                                <input type="email" placeholder="Email" autoComplete="nope" />
                            </div>
                            <button className={generalStyles['submit-button']}>SUBMIT</button>
                            <div className={generalStyles['check-inbox']}>
                                <div className={generalStyles['info-icon']}>i</div>
                                <p>Please click the link in your inbox, you will receive it shortly</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;

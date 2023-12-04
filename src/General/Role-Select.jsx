import React from "react"
import { Link } from "react-router-dom"
import generalStyles from './CSS/general-styles.module.css';
import SignedOutHeader from '../General/Signed-Out-Header';
import customer from "./IMAGE/customer.png"
import workers from "./IMAGE/workers.png"
import { useNavigate } from 'react-router-dom';

function RoleSelect() {
    const navigate = useNavigate();
    return(
        <>
        <SignedOutHeader />
        <div className={generalStyles.container}>
                <Link className={generalStyles['back-button']} onClick={() => navigate(-1)}>
                    &larr; Back
                </Link>

                <div className={generalStyles['container-decision']}>
                    <Link to="/customer/user-profile">
                        <button className={generalStyles['decision-button']}>
                            <h1>CUSTOMER</h1>
                            <img src={customer} alt="Customer" />
                            <div className={generalStyles['description-decision-button']}>
                                <p>HIRE WORKERS TO DO CERTAIN ODDJOBS</p>
                            </div>
                        </button>
                    </Link>
                    <Link to="/worker/user-profile">
                        <button className={generalStyles['decision-button']}>
                            <h1>WORKERS</h1>
                            <img src={workers} alt="Workers" />
                            <div className={generalStyles['description-decision-button']}>
                                <p>WORK AND GET PAID WITH ODDJOBS</p>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RoleSelect;

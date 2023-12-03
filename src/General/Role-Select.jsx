import React from 'react';
import './CSS/styles.css';
import SignedOutHeader from './Signed-Out-Header';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import customerIMG from './IMG/customer.png';
import workerIMG from './IMG/worker.png';

function RoleSelect() {
    const navigate = useNavigate();

    return (
        <>
            <SignedOutHeader />
            <div className="container">

                <Link className="back-button" onClick={() => navigate(-1)}>
                    &larr; Back
                </Link>

                <div className="container-decision">
                    <Link to="../">
                        <button className="decision-button">
                            <h1>CUSTOMER</h1>
                            <img src={customerIMG} alt="Customer" />
                            <div className="description-decision-button">
                                <p>HIRE WORKERS TO DO CERTAIN ODDJOBS</p>
                            </div>
                        </button>
                    </Link>
                    <Link to="../">
                        <button className="decision-button">
                            <h1>WORKERS</h1>
                            <img src={workerIMG} alt="Workers" />
                            <div className="description-decision-button">
                                <p>WORK AND GET PAID WITH ODDJOBS</p>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default RoleSelect;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import generalStyles from './CSS/general-styles.module.css';
import SignedOutHeader from '../General/Signed-Out-Header';
import customer from "./IMAGE/customer.png";
import workers from "./IMAGE/workers.png";
import admin from "./IMAGE/admin.png";
import { useNavigate } from 'react-router-dom';

function RoleSelect() {
    const navigate = useNavigate();
    const [adminPassword, setAdminPassword] = useState("");
    const correctAdminPassword = "we-go-econ-mugi"; // Replace with your actual admin password

    const handleAdminPasswordChange = (e) => {
        setAdminPassword(e.target.value);
    };

    const handleAdminSubmit = () => {
        if (adminPassword === correctAdminPassword) {
            navigate("/admin/user-profile");
        } else {
            alert("Incorrect admin password. Please try again."); // You can customize this alert message
        }
    };

    const handleAdminButtonClick = (e) => {
        e.preventDefault();
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevents the form from triggering a full page reload
            handleAdminSubmit();
        }
    };

    return (
        <div>
            <SignedOutHeader />
            <div className={generalStyles.container}>
                <Link className={generalStyles['back-button']} onClick={() => navigate(-1)}>
                    &larr; Back
                </Link>

                <div className={generalStyles['container-decision']}>
                    <div className={generalStyles["role-select-header"]}>
                        <h1>Where <span>professionalism</span> meets <span className={generalStyles["payment"]}>payment</span>.</h1>
                    </div>

                    {/* CUSTOMER */}
                    <div>
                        <button className={generalStyles['decision-button']} onClick={() => navigate("/customer/user-profile-edit")}>
                            <h1>CUSTOMER</h1>
                            <img src={customer} alt="Customer" />
                            <div className={generalStyles['description-decision-button']}>
                                <p>Hire workers to fulfill certain ODDJOBS!</p>
                            </div>
                        </button>

                        {/* WORKER */}
                        <button className={generalStyles['decision-button']} onClick={() => navigate("/worker/worker-register")}>
                            <h1>WORKERS</h1>
                            <img src={workers} alt="Workers" />
                            <div className={generalStyles['description-decision-button']}>
                                <p>Monetize your skills by working with ODDJOBS</p>
                            </div>
                        </button>

                        {/* ADMIN */}
                        <form onSubmit={handleAdminButtonClick}>
                            <button type="submit" className={generalStyles['decision-button']}>
                                <h1>ADMINS</h1>
                                <img src={admin} alt="Admin" />
                                <div className={generalStyles['description-decision-button']}>
                                    <p>Configure and manage the website</p>
                                </div>
                                <div className={generalStyles['input-box-container']}>
                                    <input
                                        type="password"
                                        placeholder="Enter Admin Password"
                                        value={adminPassword}
                                        onChange={handleAdminPasswordChange}
                                        onKeyDown={handleKeyDown}
                                    />
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoleSelect;

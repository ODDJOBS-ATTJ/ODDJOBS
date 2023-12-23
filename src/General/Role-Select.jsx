import React, { useState } from "react";
import { Link } from "react-router-dom";
import generalStyles from './CSS/general-styles.module.css';
import RoleSelectHeader from '../General/Role-Select-Header';
import customer from "./IMAGE/customer.png";
import workers from "./IMAGE/workers.png";
import admin from "./IMAGE/admin.png";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../server/useAuth';
import axios from 'axios';
import Cookies from 'js-cookie'; 

function RoleSelect() {
    useAuth();
    const navigate = useNavigate();
    const [adminPassword, setAdminPassword] = useState("");
    const correctAdminPassword = "admin1234"; // Replace with your actual admin password

    const handleAdminPasswordChange = (e) => {
        setAdminPassword(e.target.value);
    };

    const handleAdminButtonSubmit = (e) => {
        e.preventDefault();
    }

    const handleAdminSubmit = async () => {
        const userID = Cookies.get('userID'); // Get userID from cookies
        if (adminPassword === correctAdminPassword) {
            try {
                await axios.post('http://localhost:3000/accounts/setAdmin', { userID });
                navigate("/admin/profile");
            } catch (error) {
                console.error('Error setting admin status:', error);
            }
        } else {
            alert("Incorrect admin password. Please try again."); // You can customize this alert message
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevents the form from triggering a full page reload
            handleAdminSubmit();
        }
    };

    const checkWorkerStatus = async () => {
        const userID = Cookies.get('userID'); // Get userID from cookies
        try {
            const response = await axios.post('http://localhost:3000/accounts/checkWorkerStatus', { userID });
            if (response.data.isWorker) {
                navigate("/worker/services");
            } else {
                navigate("/worker/register");
            }
        } catch (error) {
            console.error('Error checking worker status:', error);
        }
    };  

    return (
        <div>
            <RoleSelectHeader />
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
                        <button className={generalStyles['decision-button']} onClick={() => navigate("/customer/profile/edit")}>
                            <h1>CUSTOMER</h1>
                            <img src={customer} alt="Customer" />
                            <div className={generalStyles['description-decision-button']}>
                                <p>Hire workers to fulfill certain ODDJOBS!</p>
                            </div>
                        </button>

                        {/* WORKER */}
                        <button className={generalStyles['decision-button']} onClick={checkWorkerStatus}>
                            <h1>WORKERS</h1>
                            <img src={workers} alt="Workers" />
                            <div className={generalStyles['description-decision-button']}>
                                <p>Monetize your skills by working with ODDJOBS</p>
                            </div>
                        </button>

                        {/* ADMIN */}
                        <form onSubmit={handleAdminButtonSubmit}>
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

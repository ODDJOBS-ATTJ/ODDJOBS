import React from 'react';
import styles from './CSS/default.module.css';
import { Link } from 'react-router-dom';
import pfp from './IMAGE/juan.png';
import { useAuth } from '../../server/useAuth.js';

function SignedInHeader() {
    useAuth();
    return (
        <div className={styles.header}>
            <div className={styles.inner_header}>
                <Link to="/customer/services" className={styles.logo_container}>
                    <div className={styles.logo_box}>
                        <h1>ODD<span>JOBS</span></h1>
                    </div>
                </Link>
                <ul className={styles.nav}>
                    <li><Link to="/customer/services">SERVICES</Link></li>
                    <li><Link to="/customer/bookings">BOOKINGS</Link></li>
                    <li className={styles['user-greeting']}><Link to="/customer/profile">Hi, Juan</Link></li>
                    <li className={styles.pfp} tabIndex={0}>
                        <div className={styles.dropdown}>
                            <img src={pfp} alt="User Profile" className={styles.dropbtn} />
                            <div className={styles['dropdown-content']}>
                                <Link to="/customer/profile">User Profile</Link>
                                <Link to="../">Switch to worker view</Link>
                                <Link to="/customer/billings" className={styles.billings}>Billings</Link>
                                <div className={styles.line} />
                                <Link to="../../General/home" className={styles.signout}>Log Out</Link>
                                {/* ../../General/home.html */}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SignedInHeader;

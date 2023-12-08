import React, { useState } from 'react';
import styles from './CSS/default.module.css';
import { Link, useNavigate } from 'react-router-dom';
import pfp from './IMAGE/juan.png';
import { useAuth } from '../../server/useAuth.js';
import logout from '../../server/logout.js';

function SignedInHeader() {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(true); // Initial state based on authentication status

    useAuth();

    const handleLogout = async () => {
        await logout(); // Call the logout function

        // Update the local state to reflect the authentication status
        setAuthenticated(false);

        // Redirect to the login page
        navigate('/login');
    };

    // Conditional rendering based on authentication status
    if (!authenticated) {
        return null; // Render nothing if not authenticated
    }

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
                                <Link onClick={handleLogout} className={styles.signout}>Log Out</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SignedInHeader;

import React from 'react';
import styles from './CSS/userManagement.module.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import SearchIcon from './Icons/magnifying-glass.png';
import Back from './Icons/back.png';
import Next from './Icons/next.png';
import View from './Icons/clipboard.png';
import Delete from './Icons/traffic-signal.png';

function AdminUserManagement() {
  return (
    <div>
      <SignedInHeader />
      <div className={styles["container"]}>
        <div className={styles["services-container"]}>
          <div className={styles["services-header"]}>
            <h1>USER REPORTS</h1>
            <div className={styles["search"]}>
              <img src={SearchIcon} alt="Search Icon" />
              <input type="text" placeholder="search services" />
            </div>
          </div>
          <table className={styles["services"]}>
            <tbody>
              <tr>
                <th style={{ width: 10 }}>No</th>
                <th style={{ width: 250 }}>Profile</th>
                <th style={{ width: 250 }}>Email</th>
                <th style={{ width: 105 }}>Worker ID</th>
                <th style={{ width: 100 }}>Manage</th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div className={styles["service-name-icon"]}>
                    <div className={styles["service-img"]} />
                    Johnny Del Mondo
                  </div>
                </td>
                <td>johnnyD33@gmail.com</td>
                <td>01</td>
                <td>
                  <div className={styles["button-container"]}>
                    2100+
                    <Link to='/admin/user-management/reports'><button><img src={View} alt="View Icon" />View</button></Link>
                    <button><img src={Delete} alt="Delete Icon" />Ban Account</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles["navigation"]}>
            <h2>Rows per page: 9</h2>
            <div className={styles["forward-back"]}>
              <h2>1-9 of 10 items</h2>
              <button><img src={Back} alt="Back Icon" /></button>
              <button><img src={Next} alt="Next Icon" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUserManagement;

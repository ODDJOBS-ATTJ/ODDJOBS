import React from 'react';
import styles from './CSS/userManagement.module.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import SearchIcon from './Icons/magnifying-glass.png';
import Back from './Icons/back.png';
import Next from './Icons/next.png';

function ViewReports() {
  return (
    <div>
      <SignedInHeader />
      <div className={styles.container}>
        <div className={styles["services-container"]}>
          <div className={styles["services-header"]}>
            <h1>JOHNNY DEL MONDO REPORTS</h1>
            <div className={styles["search"]}>
              <img src={SearchIcon} alt="Search Icon" />
              <input type="text" placeholder="search services" />
            </div>
          </div>
          <table className={styles["services"]}>
            <tbody>
              <tr>
                <th style={{ width: 100 }}>No</th>
                <th style={{ width: 300 }}>User</th>
                <th style={{ width: 800 }}>Description</th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div className={styles["service-name-icon"]}>
                    <div className={styles["service-img"]}></div>
                    Angry Individual
                  </div>
                </td>
                <td></td>
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

export default ViewReports;

import React from 'react';
import styles from './CSS/services-management.module.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import Ditto from './icons/ditto.jpg';
import Search from './icons/magnifying-glass.png';
import Accept from './icons/accept.png';
import Deny from './icons/traffic-signal.png';
import Back from './icons/back.png';
import Next from './icons/next.png';

function AdminApplications() {
  return (
    <div>
      <SignedInHeader />
      <div className={styles["container"]}>
        <div className={styles["services-container"]}>
          <div className={styles["services-header"]}>
            <h1>APPLICATIONS</h1>
            <div className={styles["search"]}>
              <img src={Search} alt="Search Icon" />
              <input type="text" placeholder="search services" />
            </div>
          </div>
          <table className={styles["services"]}>
            <tbody>
              <tr>
                <th>No</th>
                <th>Applicants</th>
                <th>Date</th>
                <th>Manage</th>
                <th style={{ textAlign: 'end' }}>
                  <select name="sort" id="sort">
                    <option value="volvo">Sort By Date</option>
                  </select>
                </th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div className={styles["service-name-icon"]}>
                    Applicant Name
                  </div>
                </td>
                <td><a>mm/dd/yy</a></td>
                <td><Link to="/">View Application</Link></td>
                <td style={{ textAlign: 'end' }}>
                  <div className={styles["button-container"]}>
                    <button><img src={Accept} alt="Accept Icon" />Accept</button>
                    <button><img src={Deny} alt="Deny Icon" />Deny</button>
                  </div>
                </td>
              </tr>
              {/* Repeat similar structure for the other rows */}
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
      {/* VIEW APPLICATIONS
      <div className={styles["modal-box"]} id="modal">
        <div className={styles["text"]}>
          <p>Are you sure you want to download the applicant's documents?</p>
        </div>
        <div className={styles["modal-buttons"]}>
          <div className={`${styles["modal-button"]} ${styles["cancel-button"]}`} onClick="">
            Cancel
          </div>
          <div className={`${styles["modal-button"]} ${styles["proceed-button"]}`} onClick="">
            Download
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default AdminApplications;

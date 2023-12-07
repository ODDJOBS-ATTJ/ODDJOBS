// revert button if there's time

import React from 'react';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import SearchIcon from './Icons/magnifying-glass.png';
import Back from './Icons/back.png';
import Next from './Icons/next.png';
import styles from './CSS/services-management.module.css';

function AdminLog() {
  return (
    <div>
      <SignedInHeader />
      <div className={styles["container"]}>
        <div className={styles["services-container"]}>
          <div className={styles["services-header"]}>
            <h1>ADMIN LOG</h1>
            <div className={styles["search"]}>
              <img src={SearchIcon} />
              <input type="text" placeholder="search services" />
            </div>
          </div>
          <table className={styles["services"]}>
            <tbody>
              <tr>
                <th className={styles['number']}>No</th>
                <th>Name</th>
                <th>Date</th>
                <th>Action</th>
                <th styles={{ textAlign: 'end' }}>
                  <select name="sort" id="sort">
                    <option value="volvo">Sort By Date</option>
                  </select>
                </th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div className={styles["service-name-icon"]}>
                    Admin Name
                  </div>
                </td>
                <td><a>mm/dd/yy</a></td>
                <td><a>Action Log Here</a></td>
              </tr>
            </tbody></table>
          <div className={styles["navigation"]}>
            <h2>Rows per page: 9</h2>
            <div className={styles["forward-back"]}>
              <h2>1-9 of 10 items</h2>
              <button><img src={Back} /></button>
              <button><img src={Next} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLog;

import React from 'react';
import styles from './CSS/services-management.module.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import SearchIcon from './icons/magnifying-glass.png';
import Back from './icons/back.png';
import Next from './icons/next.png';
import Edit from './icons/pen.png';
import Visible from './icons/view.png';
import Delete from './icons/traffic-signal.png';

function AdminServiceManagement() {
  return (
    <div>
      <SignedInHeader />
      <Link className={styles["back-button"]} to="/admin/service-management/create">CREATE SERVICE</Link>
      <div className={styles["container"]}>
        <div className={styles["services-container"]}>
          <div className={styles["services-header"]}>
            <h1>SERVICES</h1>
            <div className={styles["search"]}>
              <img src={SearchIcon} alt="Search Icon" />
              <input type="text" placeholder="search services" />
            </div>
          </div>
          <table className={styles["services-table"]}>
            <tbody>
              <tr>
                <th>No</th>
                <th>Services</th>
                <th>Manage</th>
                <th>
                  <select name="sort" id="sort">
                    <option value="volvo">Sort By Name</option>
                  </select>
                </th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div className={styles["service-name-icon"]}>
                    <div className={styles["service-img"]} />
                    Massage Therapist
                  </div>
                </td>
                <td><Link to="/admin/service-management/view">View Service</Link></td>
                <td className={styles["button-td"]}>
                  <div className={styles["button-container"]}>
                    <Link to="/admin/service-management/edit"><button><img src={Edit} alt="Edit Icon" />edit</button></Link>
                    <button><img src={Visible} alt="Visible Icon" />visible</button>
                    <button><img src={Delete} alt="Delete Icon" />remove</button>
                    <input type="radio" />
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

export default AdminServiceManagement;

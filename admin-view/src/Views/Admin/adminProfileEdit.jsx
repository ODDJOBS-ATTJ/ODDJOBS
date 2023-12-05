import React from 'react';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import styles from './CSS/admin-profile-edit.module.css';
import Ditto from './Icons/ditto.jpg';

function AdminProfileEdit() {
  return (
    <div>
      <SignedInHeader />
      <div className={styles['container']}>
        {/* USER CARD */}
        <form>
          <div className={styles['user-card']}>
            <div className={styles['profile-pic']}>
              <div className={styles['centerer']}>
                <label
                  htmlFor="fileInput1"
                  className={styles['styled-input']}
                  id="label1"
                  onClick={() => document.getElementById('fileInput1').click()}
                >
                  Upload Photo
                </label>
                <input type="file" id="fileInput1" className={styles['file-input']} style={{ display: 'none' }} />
                <img src={Ditto} alt="Profile" />
              </div>
            </div>
            <div className={styles['labels']}>
              <h2>Beneditto Alfonso A. Tiu</h2>
              <h3>Customer from Lapu-Lapu City</h3>
            </div>
            <div className={styles['icons']}></div>
            <div className={styles['edit-button-box']}>
              <Link to="/admin/profile" className={styles['edit-button']}>
                <p>SAVE PROFILE</p>
              </Link>
            </div>
            <div className={styles['user-info']}>
              <div className={styles['user-info-box']}>
                <div className={styles['input-field']}>
                  <h3>Edit your account details:</h3>
                  <input type="url" placeholder="Facebook Link" autoComplete="nope" />
                  <input type="url" placeholder="Instagram link" autoComplete="nope" />
                  <input type="email" placeholder="Email" autoComplete="nope" />
                  <input
                    id="phone"
                    type="tel"
                    required
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Phone Number"
                    autoComplete="nope"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminProfileEdit;

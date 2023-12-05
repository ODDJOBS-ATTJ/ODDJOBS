import React from 'react';
import './CSS/userManagement.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import SearchIcon from './Icons/magnifying-glass.png';
import Back from './Icons/back.png';
import Next from './Icons/next.png';

function ViewReports(){
  return (
    <div>
      <SignedInHeader/>
      <Link className="back-button" to="/admin/userManagement">
      &larr; Back</Link>
      <div className="container">
      <div className="services-container">
        <div className="services-header">
          <h1>JOHNNY DEL MONDO REPORTS</h1>
          <div className="search">
            <img src={SearchIcon} />
            <input type="text" placeholder="search services" />
          </div>
        </div>
        <table className="services">
          <tbody><tr>
              <th style={{width: 100}}>No</th>
              <th style={{width: 300}}>User</th>
              <th style={{width: 800}}>Description</th>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <div className="service-name-icon">
                  <div className="service-img">
                  </div>
                  Angry Individual
                </div>
              </td>
              <td>
              </td>
            </tr>
          </tbody></table>
        <div className="navigation">
          <h2>Rows per page: 9</h2>
          <div className="forward-back">
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

export default ViewReports;
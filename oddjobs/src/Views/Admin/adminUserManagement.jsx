import React from 'react';
import './CSS/userManagement.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import SearchIcon from './Icons/magnifying-glass.png';
import Back from './Icons/back.png';
import Next from './Icons/next.png';
import View from './Icons/clipboard.png';
import Delete from './Icons/traffic-signal.png';

function AdminUserManagement(){
  return (
    <div>
      <SignedInHeader/>
      <div className="container">
        <div className="services-container">
          <div className="services-header">
            <h1>USER REPORTS</h1>
            <div className="search">
              <img src={SearchIcon}/>
              <input type="text" placeholder="search services" />
            </div>
          </div>
          <table className="services">
            <tbody><tr>
                <th style={{width: 10}}>No</th>
                <th style={{width: 250}}>Profile</th>
                <th style={{width: 250}}>Email</th>
                <th style={{width: 105}}>Worker ID</th>
                <th style={{width: 100}}>Manage</th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div className="service-name-icon">
                    <div className="service-img" />
                    Johnny Del Mondo
                  </div>
                </td>
                <td>johnnyD33@gmail.com</td>
                <td>01</td>
                <td>
                  <div className="button-container">
                    2100+
                    <Link to='/admin/userManagement/view'><button><img src={View}/>View</button></Link>
                    <button><img src={Delete} />Ban Account</button>
                  </div>
                </td>
              </tr>
            </tbody></table>
          <div className="navigation">
            <h2>Rows per page: 9</h2>
            <div className="forward-back">
              <h2>1-9 of 10 items</h2>
              <button><img src={Back}/></button>
              <button><img src={Next}/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUserManagement;
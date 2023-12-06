import React from 'react';
import './CSS/services-management.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import SearchIcon from './Icons/magnifying-glass.png';
import Back from './Icons/back.png';
import Next from './Icons/next.png';
import Edit from './Icons/pen.png';
import Visible from './Icons/view.png';
import Delete from './Icons/traffic-signal.png';

function AdminServiceManagement(){
  return (
    <div>
      <SignedInHeader/>
      <Link className="back-button" to="/admin/serviceManagement/create">CREATE SERVICE</Link>
        <div className="container">
          <div className="services-container">
            <div className="services-header">
              <h1>SERVICES</h1>
              <div className="search">
                <img src={SearchIcon}/>
                <input type="text" placeholder="search services" />
              </div>
            </div>
            <table className="services">
              <tbody><tr>
                  <th style={{width:"10px"}}>No</th>
                  <th style={{textWrap:"wrap"}}>Services</th>
                  <th style={{width:"100px"}}>Manage</th>
                  <th style={{textAlign: 'end', width:"300px"}}>
                    <select name="sort" id="sort">
                      <option value="volvo">Sort By Name</option>
                    </select>
                  </th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <div className="service-name-icon">
                      <div className="service-img" />
                      Massage Therapist
                    </div>
                  </td>
                  <td><Link to="/admin/serviceManagement/view">View Service</Link></td>
                  <td className="button-td">
                    <div className="button-container">
                      <Link to="/admin/serviceManagement/edit"><button><img src={Edit}/>edit</button></Link>
                      <button><img src={Visible} />visible</button>
                      <button><img src={Delete} />remove</button>
                      <input type="radio"/>
                    </div>
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

export default AdminServiceManagement;
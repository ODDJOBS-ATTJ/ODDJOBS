// revert button if there's time

import React from 'react';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import SearchIcon from './Icons/magnifying-glass.png';
import Back from './Icons/back.png';
import Next from './Icons/next.png';
// import './CSS/services-management.css';

function AdminLog() {
  return (
    <div>
      <SignedInHeader />
        <div className="container">
          <div className="services-container">
            <div className="services-header">
              <h1>ADMIN LOG</h1>
              <div className="spacer" />
              <div className="search">
                <img src={SearchIcon} />
                <input type="text" placeholder="search services" />
              </div>
            </div>
          <table className="services">
          <tbody><tr>
              <th>No</th>
              <th>Name</th>
              <th>Date</th>
              <th>Action</th>
              <th style={{textAlign: 'end'}}>
                <select name="sort" id="sort">
                  <option value="volvo">Sort By Date</option>
                </select>
              </th>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <div className="service-name-icon">
                  Admin Name
                </div>
              </td>
              <td><a>mm/dd/yy</a></td>
              <td><a>Action Log Here</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <div className="service-name-icon">
                  Admin Name
                </div>
              </td>
              <td><a>mm/dd/yy</a></td>
              <td><a>Action Log Here</a></td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <div className="service-name-icon">
                  Admin Name
                </div>
              </td>
              <td><a>mm/dd/yy</a></td>
              <td><a>Action Log Here</a></td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <div className="service-name-icon">
                  Admin Name
                </div>
              </td>
              <td><a>mm/dd/yy</a></td>
              <td><a>Action Log Here</a></td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <div className="service-name-icon">
                  Admin Name
                </div>
              </td>
              <td><a>mm/dd/yy</a></td>
              <td><a>Action Log Here</a></td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <div className="service-name-icon">
                  Admin Name
                </div>
              </td>
              <td><a>mm/dd/yy</a></td>
              <td><a>Action Log Here</a></td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <div className="service-name-icon">
                  Admin Name
                </div>
              </td>
              <td><a>mm/dd/yy</a></td>
              <td><a>Action Log Here</a></td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <div className="service-name-icon">
                  Admin Name
                </div>
              </td>
              <td><a>mm/dd/yy</a></td>
              <td><a>Action Log Here</a></td>
            </tr>
            <tr>
              <td>9</td>
              <td>
                <div className="service-name-icon">
                  Admin Name
                </div>
              </td>
              <td><a>mm/dd/yy</a></td>
              <td><a>Action Log Here</a></td>
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

export default AdminLog;

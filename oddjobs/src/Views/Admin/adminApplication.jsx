import React from 'react';
import './CSS/applications.css'
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import Ditto from './Icons/ditto.jpg';
import Search from './Icons/magnifying-glass.png';
import Accept from './Icons/accept.png';
import Deny from './Icons/traffic-signal.png';
import Back from './Icons/back.png';
import Next from './Icons/next.png';

function AdminApplication(){
  return (
    <div>
        <SignedInHeader/>
        <div className="container">
          <div className="services-container">
            <div className="services-header">
              <h1>APPLICATIONS</h1>
              <div className="spacer" />
              <div className="search">
                <img src={Search}/>
                <input type="text" placeholder="search services" />
              </div>
            </div>
            <table className="services">
              <tbody><tr>
                  <th>No</th>
                  <th>Applicants</th>
                  <th>Date</th>
                  <th>Manage</th>
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
                      Applicant Name
                    </div>
                  </td>
                  <td><a>mm/dd/yy</a></td>
                  <td><Link>View Application</Link></td>
                  <td style={{textAlign: 'end'}}>
                    <div className="button-container">
                      <button><img src={Accept} />Accept</button>
                      <button><img src={Deny} />Deny</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <div className="service-name-icon">
                      Applicant Name
                    </div>
                  </td>
                  <td><a>mm/dd/yy</a></td>
                  <td><Link>View Application</Link></td>
                  <td style={{textAlign: 'end'}}>
                    <div className="button-container">
                      <button><img src={Accept} />Accept</button>
                      <button><img src={Deny} />Deny</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <div className="service-name-icon">
                      Applicant Name
                    </div>
                  </td>
                  <td><a>mm/dd/yy</a></td>
                  <td><Link>View Application</Link></td>
                  <td style={{textAlign: 'end'}}>
                    <div className="button-container">
                      <button><img src={Accept} />Accept</button>
                      <button><img src={Deny} />Deny</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <div className="service-name-icon">
                      Applicant Name
                    </div>
                  </td>
                  <td><a>mm/dd/yy</a></td>
                  <td><Link>View Application</Link></td>
                  <td style={{textAlign: 'end'}}>
                    <div className="button-container">
                      <button><img src={Accept} />Accept</button>
                      <button><img src={Deny} />Deny</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <div className="service-name-icon">
                      Applicant Name
                    </div>
                  </td>
                  <td><a>mm/dd/yy</a></td>
                  <td><Link>View Application</Link></td>
                  <td style={{textAlign: 'end'}}>
                    <div className="button-container">
                      <button><img src={Accept} />Accept</button>
                      <button><img src={Deny} />Deny</button>
                    </div>
                  </td>
                </tr><tr>
                  <td>6</td>
                  <td>
                    <div className="service-name-icon">
                      Applicant Name
                    </div>
                  </td>
                  <td><a>mm/dd/yy</a></td>
                  <td><Link>View Application</Link></td>
                  <td style={{textAlign: 'end'}}>
                    <div className="button-container">
                      <button><img src={Accept} />Accept</button>
                      <button><img src={Deny} />Deny</button>
                    </div>
                  </td>
                </tr><tr>
                  <td>7</td>
                  <td>
                    <div className="service-name-icon">
                      Applicant Name
                    </div>
                  </td>
                  <td><a>mm/dd/yy</a></td>
                  <td><Link>View Application</Link></td>
                  <td style={{textAlign: 'end'}}>
                    <div className="button-container">
                      <button><img src={Accept} />Accept</button>
                      <button><img src={Deny} />Deny</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    <div className="service-name-icon">
                      Applicant Name
                    </div>
                  </td>
                  <td><a>mm/dd/yy</a></td>
                  <td><Link>View Application</Link></td>
                  <td style={{textAlign: 'end'}}>
                    <div className="button-container">
                      <button><img src={Accept} />Accept</button>
                      <button><img src={Deny} />Deny</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    <div className="service-name-icon">
                      Applicant Name
                    </div>
                  </td>
                  <td><a>mm/dd/yy</a></td>
                  <td><Link>View Application</Link></td>
                  <td style={{textAlign: 'end'}}>
                    <div className="button-container">
                      <button><img src={Accept} />Accept</button>
                      <button><img src={Deny} />Deny</button>
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
        {/* VIEW APPLICATIONS */}
        <div className="overlay" id="overlay" />
        <div className="modal-box" id="modal">
          <div className="text">
            <p>Are you sure you want to download the applicant's documents?</p>
          </div>
          <div className="modal-buttons">
            <div className="modal-button cancel-button" onClick="">
              Cancel
            </div>
            <div className="modal-button proceed-button" onClick="">
              Download
            </div>
          </div>
        </div>
      </div>
  );
}

export default AdminApplication;
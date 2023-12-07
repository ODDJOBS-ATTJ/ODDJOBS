import React from 'react';
import './CSS/create-service.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';

function ServiceCreate(){
  return (
    <div>
      <SignedInHeader/>
      <Link to='/admin/service-management' className="back-button"> &larr; Back</Link>
      <Link to='/admin/service-management' className="create-button">CREATE SERVICE</Link>
      <div className="container">
      <div className="service-container">
        <div className="service-name-card">
          <input type="text" placeholder="SERVICE NAME" className="serviceName" />
          <hr />
          <input type="text" placeholder="short description here" className="shortDescription" />
        </div>
        <div className="service-details">
          <div className="service-details-container1">
            <div className="specifics">
              <h1>SPECIFICS</h1>
              <textarea defaultValue={"Long Description Here"} />
            </div>
        </div>
          <div className="service-details-container2">
            <div className="summary">
              <h1>SUMMARY</h1>
              <div className="summaryContent">
                <div className="summaryInputs">
                  <label htmlFor="base-price">Base Price:</label><br />
                  <input type="text" id="base-price" placeholder="Price Here" />
                </div>
                <div className="summaryInputs">
                  <label htmlFor="service-type">Service Type:</label><br />
                  <select name="services" id="service-type">
                    <option>Select Option</option>
                  </select>
                </div>
                <div>
                  <div className="policies">
                    <input type="file" id="policies" />
                    <h1>Policies:</h1>
                    <label htmlFor="policies">
                      <i className="fa-solid fa-arrow-up-from-bracket" /> Upload file
                    </label>
                  </div>
                </div>
              </div>
              <div className="summaryImages">
                <h1>Upload Files:</h1>
                <div className="upload-boxes">
                  <div className="upload-image">
                    <input type="file" id="upload-image" />
                    <label htmlFor="upload-image">
                      <i className="fa-solid fa-arrow-up-from-bracket" /> Upload Image
                    </label>
                  </div>
                  <div className="upload-banner">
                    <input type="file" id="upload-image" />
                    <label htmlFor="upload-image">
                      <i className="fa-solid fa-arrow-up-from-bracket" /> Upload Banner
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview">
              <h1>OVERVIEW</h1>
              <textarea defaultValue={"Short Description Here"} />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCreate;
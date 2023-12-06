import React from 'react';
import './CSS/create-service.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';

function ServiceEdit(){
  return (
    <div>
      <SignedInHeader/>
      <Link to='/admin/serviceManagement' className="back-button"> &larr; Back</Link>
      <Link to='/admin/serviceManagement' className="create-button">SAVE SERVICE</Link>
      <div className="container">
      <div className="service-container">
        <div className="service-name-card">
          <h1 className="serviceName">MASSAGE THERAPY</h1>
          <hr />
          <input type="text" placeholder="Indulge in blissful relaxation with our professional in-home massage service, tailored to your needs and delivered right to your doorstep." className="shortDescription" />
        </div>
        <div className="service-details">
          <div className="service-details-container1">
            <div className="specifics">
              <h1>SPECIFICS</h1>
              <textarea defaultValue={"Massage therapy involves manipulating the body's soft tissues to alleviate stress, tension, and discomfort, offering numerous benefits for both the body and the mind \n\nOur service offers tailored massage therapy options, providing a tranquil and rejuvenating experience through techniques like Swedish massage and deep tissue treatment.\n\nAt our service, we prioritize our clients' well-being by offering a range of tailored massage therapy options. Our licensed therapists are dedicated to providing a tranquil and rejuvenating experience, whether through a soothing Swedish massage or a targeted deep tissue treatment. Each person's body is unique, and our therapists are adept at customizing their approach to address specific concerns, ensuring personalized care and attention. \n              \nRegular massage therapy can reduce anxiety, improve sleep quality, and enhance overall mood, contributing to long-term health and wellness."} />
            </div>
          </div>
          <div className="service-details-container2">
            <div className="summary">
              <h1>SUMMARY</h1>
              <div className="summaryContent">
                <div className="summaryInputs">
                  <label htmlFor="base-price">Base Price:</label><br />
                  <input type="text" id="base-price" placeholder="₱1000.00" />
                </div>
                <div className="summaryInputs">
                  <label htmlFor="service-type">Service Type:</label><br />
                  <select name="services" id="service-type">
                    <option>Duration</option>
                  </select>
                </div>
                <div>
                  <div className="policies">
                    <input type="file" id="policies" />
                    <h1>Policies:</h1>
                    <label htmlFor="policies">
                      <i className="fa-solid fa-arrow-up-from-bracket" /> policies.pdf
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
                      <i className="fa-solid fa-arrow-up-from-bracket" /> Upload Image<br />
                      <a href="#">sample-img.jpg</a>
                    </label>
                  </div>
                  <div className="upload-banner">
                    <input type="file" id="upload-image" />
                    <label htmlFor="upload-image">
                      <i className="fa-solid fa-arrow-up-from-bracket" /> Upload Banner<br />
                      <a href="#">sample-img.jpg</a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview">
              <h1>OVERVIEW</h1>
              <textarea defaultValue={"What does this service provide?\n  Skilled therapists delivering therapeutic techniques\n  Convenient in-home massages tailored to you\n  Relaxation and stress reduction\n  Relief from muscle tension and pain"} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ServiceEdit;
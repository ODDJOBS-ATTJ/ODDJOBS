import React from 'react';
import './CSS/saved-service.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';

function ServiceView(){
  return (
    <div>
      <SignedInHeader/>
      <Link to='/admin/serviceManagement' className="back-button"> &larr; Back</Link>
      <Link to='/admin/serviceManagement/edit' className="back-button">EDIT SERVICE</Link>
      <div>
      <div className="container">
        <div className="service-container">
          <div className="service-name-card">
            <h1 className="serviceName">MASSAGE THERAPY</h1>
            <hr />
            <h1 className="shortDescription">Indulge in blissful relaxation with our professional in-home massage service,
              tailored to your needs and delivered right to your doorstep.</h1>
          </div>
          <div className="service-details">
            <div className="service-details-container1">
              <div className="specifics">
                <h1>SPECIFICS</h1>
                <p>Massage therapy involves manipulating the body's soft tissues to alleviate stress, tension, and
                  discomfort, offering numerous benefits for both the body and the mind.<br /><br />
                  Our service offers tailored massage therapy options, providing a tranquil and rejuvenating experience
                  through techniques like Swedish massage and deep tissue treatment.
                  <br /><br />
                  At our service, we prioritize our clients' well-being by offering a range of tailored massage therapy
                  options. Our licensed therapists are dedicated to providing a tranquil and rejuvenating experience,
                  whether through a soothing Swedish massage or a targeted deep tissue treatment. Each person's body is
                  unique, and our therapists are adept at customizing their approach to address specific concerns, ensuring
                  personalized care and attention.
                  <br /><br />
                  Regular massage therapy can reduce anxiety, improve sleep quality, and enhance overall mood, contributing
                  to long-term health and wellness.
                </p>
              </div>
            </div>
            <div className="service-details-container2">
              <div className="summary">
                <h1>SUMMARY</h1>
                <div className="summaryContent">
                  <div className="summaryInputs">
                    <label htmlFor="base-price">Base Price:</label><br />
                    <h1>₱1000.00</h1>
                </div>
                <div className="summaryInputs">
                  <label htmlFor="service-type">Service Type:</label><br />
                  <h1>Duration</h1>
                </div>
                <div>
                    <div className="policies">
                      <h1>Policies:</h1>
                      <a href="#">policy.pdf</a>
                    </div>
                  </div>
                  </div>
                  <div className="summaryImages">
                    <h1>Upload Files:</h1>
                    <div className="upload-boxes">
                      <div className="upload-image">
                        <img src="icons/samplePhoto.png" />
                      </div>
                      <div className="upload-banner">
                        <img src="icons/samplePhoto.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overview">
                  <h1>OVERVIEW</h1>
                  <p>What does this service provide?</p>
                  <li>Skilled therapists delivering therapeutic techniques</li>
                  <li>Convenient in-home massages tailored to you</li>
                  <li>Relaxation and stress reduction</li>
                  <li>Relief from muscle tension and pain</li>
                </div>
              </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceView;
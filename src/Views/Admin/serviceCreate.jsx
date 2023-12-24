import React, { useState, useRef } from 'react';
import './CSS/create-service.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './CSS/back-button.module.css';
import { useNavigate } from 'react-router-dom';

function ServiceCreate() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    serviceName: '',
    shortDescription: '',
    specifics: [''], // Initialize specifics as an array with one empty string
    baseprice: '',
    overview: '',
    serviceType: '', // Initialize serviceType
    serviceCat: '', // Initialize serviceCat
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "specifics") {
      const newSpecifics = [...formData.specifics];
      newSpecifics[index] = value;
      setFormData({ ...formData, specifics: newSpecifics });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddSpecifics = () => {
    if (formData.specifics.length < 10) {
      setFormData({ ...formData, specifics: [...formData.specifics, ""] });
    }
  };

  const policiesRef = useRef();
  const imageRef1 = useRef();
  const imageRef2 = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    console.log(formData);
    if (!formData.serviceName || !formData.baseprice || !formData.shortDescription || !formData.specifics || !formData.overview || !formData.serviceCat || !formData.serviceType) {
      alert('Please fill all the fields');
      return;
    }

    if (window.confirm('Are you sure you want to create this service?')) {
      const data = {
        serviceName: formData.serviceName,
        basePrice: formData.baseprice,
        shortDesc: formData.shortDescription,
        specifics: formData.specifics.join(','), // Convert specifics array to string
        overview: formData.overview,
        isFeatured: 0,
        isVisible: 1,
        isDeleted: 0,
        serviceCat: formData.serviceCat,
        serviceType: formData.serviceType,
      };

      axios.post('http://localhost:3000/service/', data, {
        headers: {
          'Content-Type': 'application/json', // Ensure correct Content-Type
        },
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
        navigate('/admin/service-management');
    }
  };

  return (
    <div>
      <SignedInHeader />
      <form onSubmit={handleSubmit}>
        <Link to='/admin/service-management' className={styles["back-button"]}> &larr; Back</Link>
        <button type="submit" className={styles["create-button"]}>FINALIZE SERVICE</button>
        <div className="container">
          <div className="service-container">
            <div className="service-name-card">
              <input type="text" name="serviceName" placeholder="SERVICE NAME" className="serviceName" value={formData.serviceName} onChange={handleInputChange} />
              <hr />
              <input type="text" name="shortDescription" placeholder="short description here" className="shortDescription" value={formData.shortDescription} onChange={handleInputChange} />
            </div>
            <div className="service-details">
              <div className="service-details-container1">
                <div className="specifics">
                  <h1>SPECIFICS</h1>
                  {formData.specifics.map((specific, index) => (
                    <input
                      key={index}
                      type="text"
                      name="specifics"
                      value={specific}
                      onChange={(e) => handleInputChange(e, index)}
                      onKeyPress={(e) => {
                        if (e.key === ',') e.preventDefault();
                      }}
                      placeholder="Specific detail here"
                    />
                  ))}
                  <button type="button" onClick={handleAddSpecifics} className={formData.specifics.length >= 10 ? 'disabled' : ''}>
                    Add more
                  </button>
                </div>
              </div>
              <div className="service-details-container2">
                <div className="summary">
                  <h1>SUMMARY</h1>
                  <div className="summaryContent">
                    <div className="summaryInputs">
                      <label htmlFor="base-price">Base Price:</label><br />
                      <input name="baseprice" value={formData.baseprice} type="text" id="base-price" placeholder="Price Here" onChange={handleInputChange} />
                    </div>
                    <div className="summaryInputs">
                      <label htmlFor="service-type">Service Type:</label><br />
                      <select name="serviceType" id="service-type" value={formData.serviceType} onChange={handleInputChange}>
                        <option value="">Select a service type</option>
                        <option value="unspecified">Unspecified</option>
                        <option value="duration">Duration</option>
                        <option value="quantity">Quantity</option>
                      </select>
                    </div>
                    <div className="summaryInputs">
                      <label htmlFor="service-cat">Service Category:</label><br />
                      <select name="serviceCat" id="service-cat" value={formData.serviceCat} onChange={handleInputChange}>
                        <option value="">Select a category</option>
                        <option value="home">Home</option>
                        <option value="event">Event</option>
                        <option value="health">Health</option>
                        <option value="mechanical">Mechanical</option>
                        <option value="misc">Miscellaneous</option>
                      </select>
                    </div>
                    <div>
                      {/* <div className="policies">
                        <input type="file" id="policies" ref={policiesRef} />
                        <h1>Policies:</h1>
                        <label htmlFor="policies">
                          <i className="fa-solid fa-arrow-up-from-bracket" /> Upload file
                        </label>
                      </div> */}
                    </div>
                  </div>
                  <div className="summaryImages">
                    <h1>Upload Files:</h1>
                    <div className="upload-boxes">
                      {/* <div className="upload-image">
                        <input type="file" id="upload-image1" ref={imageRef1} />
                        <label htmlFor="upload-image">
                          <i className="fa-solid fa-arrow-up-from-bracket" /> Upload Cover
                        </label>
                      </div>
                      <div className="upload-banner">
                        <input type="file" id="upload-image2" ref={imageRef2} />
                        <label htmlFor="upload-image">
                          <i className="fa-solid fa-arrow-up-from-bracket" /> Upload Banner
                        </label>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="overview">
                  <h1>OVERVIEW</h1>
                  <textarea name="overview" value={formData.overview} onChange={handleInputChange} placeholder="Short Description Here" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form >
    </div >
  );
}

export default ServiceCreate;
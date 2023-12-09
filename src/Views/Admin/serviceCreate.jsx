import React, {useState, useRef}from 'react';
import './CSS/create-service.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ServiceCreate(){
  const [formData, setFormData] = useState({
    serviceName: '',
    shortDescription: '', 
    specifics: '',
    baseprice: '',
    overview: ''
  });

  const policiesRef = useRef();
  const imageRef1= useRef();
  const imageRef2= useRef();

  const handleSubmit = (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append('serviceName', formData.serviceName);
  data.append('basePrice', formData.baseprice);
  data.append('policies', policiesRef.current.files[0]);
  data.append('cover', imageRef1.current.files[0]);
  data.append('banner', imageRef2.current.files[0]);
  data.append('shortDesc', formData.shortDescription);
  data.append('specifics', formData.specifics);
  data.append('overview', formData.overview);
  data.append('isFeatured', 0);
  data.append('isVisible', 1);
  data.append('isDeleted', 0);
  data.append('serviceCat', 'home');
  data.append('serviceType', document.getElementById('service-type').value); // Capture selected service type

  axios.post('http://localhost:3000/service/', data, {
    headers: {
      'Content-Type': 'multipart/form-data', // Ensure correct Content-Type
    },
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};

  const handleInputChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <SignedInHeader/>
      <form onSubmit={handleSubmit}>
      <Link to='/admin/service-management' className="back-button"> &larr; Back</Link>
      <button type="submit" className="create-button">CREATE SERVICE</button>
      <div className="container">
      <div className="service-container">
        <div className="service-name-card">
        <input type="text" name="serviceName" placeholder="SERVICE NAME" className="serviceName" value={formData.serviceName} onChange={handleInputChange} />
          <hr />
          <input type="text" name="shortDescription" placeholder="short description here" className="shortDescription" value={formData.shortDescription} onChange={handleInputChange}/>
        </div>
        <div className="service-details">
          <div className="service-details-container1">
            <div className="specifics">
              <h1>SPECIFICS</h1>
              <textarea name="specifics" value={formData.specifics} onChange={handleInputChange} placeholder="long description here"/>
            </div>
        </div>
          <div className="service-details-container2">
            <div className="summary">
              <h1>SUMMARY</h1>
              <div className="summaryContent">
                <div className="summaryInputs">
                  <label htmlFor="base-price">Base Price:</label><br />
                  <input name="baseprice" value={formData.baseprice} type="text" id="base-price" placeholder="Price Here" onChange={handleInputChange}/>
                </div>
                <div className="summaryInputs">
                  <label htmlFor="service-type">Service Type:</label><br />
                  <select name="services" id="service-type">
                    <option>Select Option</option>
                  </select>
                </div>
                <div>
                  <div className="policies">
                    <input type="file" id="policies" ref={policiesRef}/>
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
                    <input type="file" id="upload-image1" ref={imageRef1}/>
                    <label htmlFor="upload-image">
                      <i className="fa-solid fa-arrow-up-from-bracket" /> Upload Image
                    </label>
                  </div>
                  <div className="upload-banner">
                    <input type="file" id="upload-image2" ref={imageRef2}/>
                    <label htmlFor="upload-image">
                      <i className="fa-solid fa-arrow-up-from-bracket" /> Upload Banner
                    </label>
                  </div>
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
      </form>
    </div>
  );
}

export default ServiceCreate;
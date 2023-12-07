import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import generalStyles from '../CSS/general-styles.module.css';
import axios from 'axios'; // Import axios

function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    email: '',
    password: '',
    // Remove confirmPassword from state
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/', formData); // Use axios.post instead of fetch
      console.log('Server Response:', response.data);

      if (response.data.success) {
        navigate('/role-select');
      } else {
        console.error('Error registering user:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // ... rest of your component

  return (
    <form onSubmit={handleRegister}>
      <h1>SIGN UP</h1>
      <div className={generalStyles.content}>
        {/* Names */}
        <div className={generalStyles['input-field']}>
          <input
            type="text"
            placeholder="First Name"
            autoComplete="nope"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className={generalStyles['input-field']}>
          <input
            type="text"
            placeholder="Last Name"
            autoComplete="nope"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        {/* Birthday, Address, Phone Number */}
        <div className={generalStyles['input-field']}>
          <input
            type="date"
            autoComplete="nope"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
          />
        </div>
        {/* Email and Password */}
        <div className={generalStyles['input-field']}>
          <input
            type="email"
            placeholder="Email"
            autoComplete="nope"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={generalStyles['input-field']}>
          <input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {/* Remove confirm password field */}
        {/* <div className={generalStyles['input-field']}>
          <input
            type="password"
            placeholder="Confirm Password"
            autoComplete="new-password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div> */}
        <input type="submit" className={generalStyles['submit-button']} />
      </div>
    </form>
  );
}

export default RegisterForm;

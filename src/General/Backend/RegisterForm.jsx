import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import generalStyles from '../CSS/general-styles.module.css';

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
      console.log('Form Data:', formData);

      const response = await fetch('http://localhost:5173/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Server Response Status:', response.status);

      if (!response.ok) {
        console.error('Server Error:', response.statusText);
        // Handle error, return, or throw an error
        return;
      }

      const data = await response.json();

      console.log('Server Response:', data);

      if (data.success) {
        navigate('/role-select');
      } else {
        console.error('Error registering user:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
        <button className={generalStyles['submit-button']} type="submit">
          CONTINUE
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;

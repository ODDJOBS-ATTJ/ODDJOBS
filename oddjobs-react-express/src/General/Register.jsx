import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import generalStyles from './CSS/general-styles.module.css';
import SignedOutHeader from '../General/Signed-Out-Header';
import RegisterForm from './Backend/RegisterForm';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();

  return (
    <div>
      <SignedOutHeader />
      <div className={generalStyles.container}>
        <Link className={generalStyles['back-button']} onClick={() => navigate(-1)}>
          &larr; Back
        </Link>
        {/* REGISTER FORM */}
        <div className={generalStyles['card-form']}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default Register;

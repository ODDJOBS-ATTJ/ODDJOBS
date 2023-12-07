import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignedOutHeader from './Signed-Out-Header';
import EmailSentPopup from './Backend/Email-Sent-Popup';
import emailjs from '@emailjs/browser';
import generalStyles from './CSS/general-styles.module.css';

function Register() {
  const navigate = useNavigate();
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formFields = form.current.elements;
    let isValid = true;

    for (let i = 0; i < formFields.length - 1; i++) {
      if (formFields[i].type !== 'submit' && formFields[i].value.trim() === '') {
        isValid = false;
        console.log(`Error: ${formFields[i].name} is required.`);
      }
    }

    if (!isValid) {
      return;
    }

    emailjs
      .sendForm('service_2dlx871', 'template_yu3esct', form.current, 'NkYJx24dJ0Pj1HgI4')
      .then(
        (result) => {
          console.log(result.text);
          console.log('email sent successfully');
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
          console.log('Email was not sent. An Error was encountered');
        }
      );
  };

  const handleCloseModal = () => {
    setEmailSent(false);
  };

  return (
    <div>
      <SignedOutHeader />
      <div className={generalStyles.container}>
        <Link className={generalStyles['back-button']} onClick={() => navigate(-1)}>
          &larr; Back
        </Link>
        {/* REGISTER FORM */}
        <div className={generalStyles['card-form']}>
          {emailSent && null}
          {emailSent ? (
            <EmailSentPopup onClose={handleCloseModal} />
          ) : (
            <form ref={form} onSubmit={sendEmail}>
              <h1>SIGN UP</h1>
              <div className={generalStyles.content}>
                <div className={generalStyles['input-field']}>
                  <input type="text" placeholder="First Name" autoComplete="nope" name="firstName" />
                </div>
                <div className={generalStyles['input-field']}>
                  <input type="text" placeholder="Last Name" autoComplete="nope" name="lastName" />
                </div>
                <div className={generalStyles['input-field']}>
                  <input type="date" autoComplete="nope" name="birthday" />
                </div>
                <div className={generalStyles['input-field']}>
                  <input type="email" placeholder="Email" autoComplete="nope" name="email" />
                </div>
                <div className={generalStyles['input-field']}>
                  <input type="password" placeholder="Password" autoComplete="new-password" name="password" />
                </div>
                <button className={generalStyles['submit-button']} type="submit">
                  CONTINUE
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
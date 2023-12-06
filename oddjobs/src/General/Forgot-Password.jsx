import React, { useState } from 'react';
import generalStyles from './CSS/general-styles.module.css';
import SignedOutHeader from '../General/Signed-Out-Header';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import EmailSentPopup from './Backend/Email-Sent-Popup';
import emailjs from '@emailjs/browser';

function ForgotPassword() {
  const navigate = useNavigate();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formFields = e.target.elements;
    const email = formFields.email.value.trim();

    if (!email) {
      console.log('Error: Email is required.');
      return;
    }

    emailjs
      .sendForm('service_2dlx871', 'template_p636er9', e.target, 'NkYJx24dJ0Pj1HgI4')
      .then(
        (result) => {
          console.log(result.text);
          console.log('Email sent successfully');
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
          console.log('Email was not sent. An error was encountered');
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
        <div className={generalStyles['card-form']}>
          {emailSent ? (
            <EmailSentPopup onClose={handleCloseModal} />
          ) : (
            <form onSubmit={sendEmail}>
              <h1>FORGOT PASSWORD?</h1>
              <div className={generalStyles.content}>
                <div className={generalStyles['input-field']}>
                  <input type="email" placeholder="Email" autoComplete="nope" name="email" />
                </div>
                <button className={generalStyles['submit-button']} type="submit">
                  SUBMIT
                </button>
                <div className={generalStyles['check-inbox']}>
                  <div className={generalStyles['info-icon']}>i</div>
                  <p>Please click the link in your inbox; you will receive it shortly</p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignedOutHeader from './Signed-Out-Header';
import EmailSentPopup from './Backend/Email-Sent-Popup';
import axios from 'axios';  // Import Axios library
import emailjs from '@emailjs/browser';
import generalStyles from './CSS/general-styles.module.css';
import { v4 as uuidv4 } from 'uuid';

function Register() {
  const navigate = useNavigate();
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formFields = form.current.elements;
    let isValid = true;

    for (let i = 0; i < formFields.length - 1; i++) {
      if (formFields[i].type !== 'submit' && formFields[i].name !== 'verificationID' && formFields[i].value.trim() === '') {
        isValid = false;
        alert(`Error: ${formFields[i].name} is required.`);
      }
    }

    if (!isValid) {
      return;
    }
    sendFormDataToServer();
    axios.post('http://localhost:3000/accounts/findUserID', { email: formFields.email.value })
      .then(async (response) => {
        const userID = response.data.userID;
        const verificationIDInput = form.current.elements['verificationID'];
        const verificationID = generateUniqueID(userID);
        verificationIDInput.value = verificationID;
        try {
          await axios.post('http://localhost:3000/accounts/updateVerificationID', { userID, verificationID });
          setTimeout(() => {
            emailjs
              .sendForm('service_2dlx871', 'template_yu3esct', form.current, 'NkYJx24dJ0Pj1HgI4')
              .then(
                (result) => {
                  console.log(result.text);
                  console.log('Email with Form-data + uniqueID sent successfully');
                },
                (error) => {
                  alert(error.text);
                  console.log('Email was not sent. An Error was encountered');
                }
              );
            console.log('Simulated email with Form-data + uniqueID sent successfully');
            setEmailSent(true);
          }, 2000);
        } catch (error) {
          if (error.response) {
            alert(error.response.data.message);
          } else if (error.request) {
            alert('Request was made but no response was received');
          } else {
            alert('Error', error.message);
          }
        }
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else if (error.request) {
          alert('Request was made but no response was received');
        } else {
          alert('Error', error.message);
        }
      });
  };

  const generateUniqueID = (userID) => {
    // Generate a random UUID (Universally Unique Identifier)
    return `${userID}-${uuidv4()}`;
  };

  const sendFormDataToServer = () => {
    // Create a FormData object to send the form data
    const formData = new FormData(form.current);

    let jsonObject = {};
    for (const [key, value] of formData.entries()) {
      jsonObject[key] = value;
    }

    // Send a POST request to your server using Axios
    axios.post('http://localhost:3000/accounts/register', jsonObject)
      .then((response) => {
        console.log(response.data);
        console.log('Request sent successfully');
      })
      .catch((error) => {
        console.error('Error sending request:', error);
      });
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
                <input type="hidden" name="verificationID" value="" />
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
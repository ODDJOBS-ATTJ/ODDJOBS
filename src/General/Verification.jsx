import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './CSS/Verification.css';
import SignedOutHeader from '../General/Signed-Out-Header';

function Verification({ onClose }) {
    const [modalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      const searchServices = async () => {
          const searchQuery = new URLSearchParams(location.search).get('search');
  
          if (!searchQuery) {
              console.error('Search query not found in the URL');
              return;
          }
  
          try {
              const response = await axios.post('http://localhost:3000/service/search', {
                  query: searchQuery,
              });
  
              if (response.status !== 200) {
                  console.error('Error searching services');
                  return;
              }
  
              setServices(response.data.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
  
      searchServices();
  }, [location.search]);

    const closeModal = () => {
        setModalVisible(false);
        navigate('/login');
    };

    const verifyAccount = async () => {
        // Extract verificationID from the URL
        const verificationID = new URLSearchParams(location.search).get('verificationID');
      
        if (!verificationID) {
          console.error('VerificationID not found in the URL');
          return;
        }
      
        try {
          console.log('Making request to remove verificationID'); // Add this line
          // Now you have the verificationID, you can use it in your request
          const verifyResponse = await axios.post('http://localhost:3000/accounts/removeVerificationID', {
            verificationID: verificationID,
          });
      
          console.log('Response from removeVerificationID:', verifyResponse); // Add this line
      
          if (verifyResponse.status === 200) {
            console.log('Account verified successfully');
          } else {
            console.error('Failed to verify account');
          }
        } catch (error) {
          console.error('Error during verification:', error);
        }
      };


    return (
        <div>
            <SignedOutHeader />
            <div className={`modal-box ${modalVisible ? 'show' : ''}`} onClick={closeModal}>
                <div className="text">
                    <p>Your account is now verified and fully registered! Feel free to close this window!</p>
                </div>
                <div className="modal-buttons">
                    <div className="modal-button cancel-button" onClick={closeModal}>
                        Done
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Verification;

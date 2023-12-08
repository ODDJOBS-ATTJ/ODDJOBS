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
        const timeout = setTimeout(() => {
            setModalVisible(true);
            // Call the verification function here
            verifyAccount();
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

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
            // Make a request to the backend to find userID by verificationID
            const userIDResponse = await axios.post('http://localhost:3000/accounts/findUserIDbyVerificationID', {
                verificationID: verificationID,
            });
    
            if (userIDResponse.status === 200) {
                const userID = userIDResponse.data.userID;
    
                // Now you have the userID, you can use it in your next request
                const verifyResponse = await axios.put('http://localhost:3000/accounts/removeVerificationID', {
                    userID: userID,
                });
    
                if (verifyResponse.status === 200) {
                    console.log('Account verified successfully');
                } else {
                    console.error('Failed to verify account');
                }
            } else {
                console.error('Failed to find userID');
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

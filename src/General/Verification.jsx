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
            // Make a request to update isVerified in the backend
            const response = await axios.put('/api/updateVerification', {
                userID: null, // Replace with the actual userID or logic to fetch it
                verificationID: verificationID,
            });

            if (response.status === 200) {
                console.log('Account verified successfully');
                // Optionally, you can do additional actions here if needed
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

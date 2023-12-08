import React, { useState, useEffect } from 'react';
import '../CSS/email-sent-popup.css';

function EmailSentPopup({ onClose }) {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setModalVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const closeModal = () => {
    setModalVisible(false);
    onClose(); // Notify the parent component to handle the modal visibility
  };


  return (
    <div className={`modal-box ${modalVisible ? 'show' : ''}`} onClick={closeModal}>
      <div className="text">
        <p> An email has been sent! Please check your inbox to complete the registration process
          and verify your account.</p>
      </div>
      <div className="modal-buttons">
        <div className="modal-button cancel-button" onClick={closeModal}>
          Done
        </div>
      </div>
    </div>
  );
}

export default EmailSentPopup;
  
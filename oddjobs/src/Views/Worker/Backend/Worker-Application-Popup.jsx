import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import '../CSS/worker-application-popup.css';

function WorkerApplicationPopup({ onClose }) {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();  // Get the navigate function from react-router-dom

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

  const handleDoneClick = () => {
    closeModal();
    navigate('../../customer/User-Profile-Edit');  // Use navigate for redirection
  };

  return (
    <div className={`modal-box ${modalVisible ? 'show' : ''}`} onClick={closeModal}>
      <div className="text">
        <p> Thank you for your application! We'll email you soon. Meanwhile, feel free to book around as a customer.</p>
      </div>
      <div className="modal-buttons">
        <div className="modal-button cancel-button" onClick={handleDoneClick}>
          Done
        </div>
      </div>
    </div>
  );
}

export default WorkerApplicationPopup;

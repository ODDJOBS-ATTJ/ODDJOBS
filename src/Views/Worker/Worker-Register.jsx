import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignedOutHeader from '../../General/Signed-Out-Header';
import './CSS/worker-register.css';
import WorkerApplicationPopup from './Backend/Worker-Application-Popup';
import generalStyles from '../../General/CSS/general-styles.module.css';
import Cookies from 'js-cookie';
import axios from 'axios';

function WorkerRegister() {
    const navigate = useNavigate();
    const form = useRef();
    const [applicationSubmitted, setApplicationSubmitted] = useState(false);
    const [userID, setUserID] = useState(Cookies.get('userID')); // Add this line
    const [fileNames, setFileNames] = useState({
        fileInput1: '',
        fileInput2: '',
        fileInput3: '',
    });

    const submitApplication = async (e) => {
        e.preventDefault();

        const userID = Cookies.get('userID');

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

        // Add logic to handle the submission of the worker application
        // This can include making API calls, handling file uploads, etc.

        // For demonstration purposes, let's simulate a successful submission

        const formData = new FormData(form.current);
        try {
            const response = await axios.post('http://localhost:3000/workers/registerWorker', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

        setApplicationSubmitted(true);
    };

    const handleFileInputChange = (inputId) => (event) => {
        const fileName = event.target.files[0]?.name || '';
        setFileNames((prevFileNames) => ({ ...prevFileNames, [inputId]: fileName }));
    };

    const handleCloseModal = () => {
        setApplicationSubmitted(false);
    };

    return (
        <div>
            <SignedOutHeader />
            <div className={generalStyles.container}>
                <Link className={generalStyles['back-button']} onClick={() => navigate(-1)}>
                    &larr; Back
                </Link>
                <div className='card-form'>
                    {applicationSubmitted ? (
                        <WorkerApplicationPopup onClose={handleCloseModal} />
                    ) : (
                        <form action="/upload" method="post" encType="multipart/form-data" ref={form} onSubmit={submitApplication}>
                            <input type="hidden" name="userID" value={userID} />
                            <h1>SUBMIT REQUIRED DOCUMENTS</h1>
                            <div className="content">
                                {Object.keys(fileNames).map((inputId, index) => (
                                    <div className="input-field" key={inputId}>
                                        <label htmlFor={inputId} className="styled-input" id={`label${index + 1}`}>
                                            {fileNames[inputId] ||
                                                (() => {
                                                    switch (inputId) {
                                                        case 'fileInput1':
                                                            return 'Attach Government Issued ID/Identification Document';
                                                        case 'fileInput2':
                                                            return 'Attach Drug Test Clearance Document';
                                                        case 'fileInput3':
                                                            return 'Attach NBI Clearance';
                                                        default:
                                                            return '';
                                                    }
                                                })()}
                                        </label>
                                        <input
                                            type="file"
                                            id={inputId}
                                            className="file-input"
                                            style={{ display: 'none' }}
                                            onChange={handleFileInputChange(inputId)}
                                        />
                                    </div>
                                ))}
                                <button className="submit-button" type="submit">
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

export default WorkerRegister;
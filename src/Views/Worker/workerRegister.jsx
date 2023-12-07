import React from "react"
import { ReactDOM } from "react"
import { Link } from "react-router-dom"
import SignedOutHeader from "./signedOutHeader";
import './CSS/worker-register.css';

function WorkerRegister(){
    return(
        <>
            <SignedOutHeader/>
            <Link to="#" className="back-button"> ← Back</Link>
            <div className="container">
                <div className="card-form">
                    <form action="/upload" method="post" encType="multipart/form-data">
                    <h1>SUBMIT REQUIRED DOCUMENTS</h1>
                    <div className="content">
                        <div className="input-field">
                            <label htmlFor="fileInput1" className="styled-input" id="label1">
                                Attach Government Issued ID/Identification Document
                            </label>
                            <input type="file" id="fileInput1" className="file-input" style={{display: 'none'}} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="fileInput2" className="styled-input" id="label2">
                                Attach Drug Test Clearance Document
                            </label>
                            <input type="file" id="fileInput2" className="file-input" style={{display: 'none'}} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="fileInput3" className="styled-input" id="label3">
                                Attach NBI Clearance
                            </label>
                            <input type="file" id="fileInput3" className="file-input" style={{display: 'none'}} />
                        </div>
                        <Link to="/userProfile"><button className="submit-button">CONTINUE</button></Link>
                    </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default WorkerRegister;
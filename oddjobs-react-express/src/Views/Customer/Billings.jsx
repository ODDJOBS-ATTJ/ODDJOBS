import React from 'react';
import './CSS/styles.css';
import './CSS/billings.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
import SignedInHeader from './Signed-In-Header';
import { Link } from 'react-router-dom';
import creditcard from './IMAGE/Icons/credit-card.png';
import xmark from './IMAGE/icons/xmark-solid.svg';
import cards from './IMAGE/icons/cards.png'
import paypal from './IMAGE/Icons/paypal.png'
import trash from './IMAGE/icons/trash-bin.png';

function Billings() {
    return (
        <div>
            <SignedInHeader />
            <div className="container">
                <div className="payment-methods">
                    <h1>Payment Methods</h1>
                    <div className="payment-header">
                        <div className="payment-methods-card-child-col">
                            <img src={creditcard} width="45px" />
                            <h1>Credit Card(s)</h1>
                        </div>
                    </div>
                    <div className="allbox">
                        {/* LEFT BOX */}
                        <div className="leftbox">
                            <div className="leftbox-section">
                                <h2>Manage your payment options below.</h2>
                            </div>
                            <div className="leftbox-section">
                                <button onclick="openMethodForm()">Add a new card</button>
                            </div>
                            {/* FORM */}
                            <div className="form-popup" id="methods">
                                <form action="billings.html" className="form-container">
                                    <div className="first-form">
                                        <div className="form-header">
                                            <h2> Add payment method </h2>
                                            <div className="close-button" onclick="closeMethodForm()">
                                                <img src={xmark} width="20px" />
                                            </div>
                                        </div>
                                        <div className="radiobox">
                                            <div className="credit-card">
                                                <input type="radio" id="credit" name="cards" onclick="openCreditCardForm()" />
                                                <label htmlFor="credit">Credit / Debit Cards</label>
                                                <img className="fa-icon-top" src={cards} />
                                            </div>
                                            {/* CREDIT CARD FORM */}
                                            <div className="credit-card-form" id="credit-card">
                                                <div className="inputboxes">
                                                    <div className="first-row">
                                                        <div className="full-width">
                                                            <style scoped dangerouslySetInnerHTML={{ __html: "\n                                                            @import \"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\";\n                                                        " }} />
                                                            <label htmlFor="cardNumber">Card Number</label>
                                                            <div className="input-container">
                                                                <span className="fa-icon"></span>
                                                                <input type="text" id="cardNumber" name="cardNumber" placeholder="0000 0000 0000 0000" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="columns">
                                                        <div className="first-col">
                                                            <div className="half-width">
                                                                <label htmlFor="firstName">First Name</label>
                                                                <input type="text" id="firstName" name="firstName" placeholder=" " />
                                                            </div>
                                                            <div className="half-width">
                                                                <label htmlFor="securityCode">Security Code</label>
                                                                <input type="text" id="securityCode" name="securityCode" placeholder=" " />
                                                            </div>
                                                        </div>
                                                        <div className="spacer">&nbsp;</div>
                                                        <div className="second-col">
                                                            <div className="half-width">
                                                                <label htmlFor="lastName">Last Name</label>
                                                                <input type="text" id="lastName" name="lastName" placeholder=" " />
                                                            </div>
                                                            <div className="half-width">
                                                                <label htmlFor="expirationDate">Expiration Date</label>
                                                                <input type="text" id="expirationDate" name="expirationDate" placeholder="MM / YY" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="savebutton">
                                                        <input type="submit" defaultValue="Save" id="save" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* CREDIT CARD FORM END */}
                                            <div className="PayPal">
                                                <input type="radio" id="PayPal" name="cards" onclick="openPayPalForm()" />
                                                <label htmlFor="PayPal">PayPal</label>
                                            </div>
                                        </div>
                                    </div></form>
                            </div>
                            {/* FORM END */}
                        </div>
                        {/* LEFT BOX END */}
                        {/* RIGHT BOX */}
                        <div className="rightbox">
                            <div className="rightbox-section">
                                <div className="existing-payment-methods">
                                    <div className="payment-methods-card-child-col">
                                        <div className="card-with-icon">
                                            <img src={paypal} />
                                        </div>
                                    </div>
                                    <div className="payment-methods-card-child-col">
                                        <div className="card-description">
                                            <h1>Card ending in 3304</h1>
                                            <h2>Exp. date 03/31</h2>
                                        </div>
                                    </div>
                                    <div className="payment-methods-card-child-col">
                                        <div className="card-options">
                                            <div className="payment-methods-card-child-col">
                                                <button className="default-button">Make Default</button>
                                            </div>
                                            <div className="payment-methods-card-child-col">
                                                <button><img src={trash} height="25px" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* RIGHT BOX END */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billings;
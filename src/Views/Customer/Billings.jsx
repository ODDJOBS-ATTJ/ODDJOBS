import React from "react";
import { Link } from "react-router-dom";
import SignedInHeader from "./Signed-In-Header";
import styles from './CSS/billings.module.css'; // Change the import statement
import CreditCard from './IMAGE/Icons/credit-card.png';
import XMark from './IMAGE/Icons/xmark-solid.svg';
import Cards from './IMAGE/Icons/cards.png';
import Paypal from './IMAGE/Icons/paypal.png';
import Trashbin from './IMAGE/Icons/trash-bin.png';

function Billings() {
    return (
        <>
            <SignedInHeader />
            <div className={styles.container}> {/* Update className with the imported styles */}
                <div className={styles['payment-methods']}> {/* Update className with the imported styles */}
                    <h1>Payment Methods</h1>
                    <div className={styles['payment-header']}> {/* Update className with the imported styles */}
                        <div className={styles['payment-methods-card-child-col']}>
                            <img src={CreditCard} width="45px" />
                            <h1>Credit Card(s)</h1>
                        </div>
                    </div>
                    <div className={styles.allbox}> {/* Update className with the imported styles */}
                        {/* LEFT BOX */}
                        <div className={styles.leftbox}> {/* Update className with the imported styles */}
                            <div className={styles['leftbox-section']}> {/* Update className with the imported styles */}
                                <h2>Manage your payment options below.</h2>
                            </div>
                            <div className={styles['leftbox-section']}> {/* Update className with the imported styles */}
                                <button onClick={() => openMethodForm()}>Add a new card</button>
                            </div>
                            {/* FORM */}
                            <div className={styles['form-popup']} id="methods"> {/* Update className with the imported styles */}
                                <form action="billings.html" className={styles['form-container']}> {/* Update className with the imported styles */}
                                    <div className={styles['first-form']}> {/* Update className with the imported styles */}
                                        <div className={styles['form-header']}> {/* Update className with the imported styles */}
                                            <h2>Add payment method</h2>
                                            <div className={styles['close-button']} onClick={() => closeMethodForm()}> {/* Update className with the imported styles */}
                                                <img src={XMark} width="20px" />
                                            </div>
                                        </div>
                                        <div className={styles.radiobox}> {/* Update className with the imported styles */}
                                            <div className={styles['credit-card']}>
                                                <input type="radio" id="credit" name="cards" onClick={() => openCreditCardForm()} />
                                                <label htmlFor="credit">Credit / Debit Cards</label>
                                                <img className={styles['fa-icon-top']} src={Cards} />
                                            </div>
                                            {/* CREDIT CARD FORM */}
                                            <div className={styles['credit-card-form']} id="credit-card"> {/* Update className with the imported styles */}
                                                <div className={styles.inputboxes}> {/* Update className with the imported styles */}
                                                    <div className={styles['first-row']}> {/* Update className with the imported styles */}
                                                        <div className={styles['full-width']}> {/* Update className with the imported styles */}
                                                            <label htmlFor="cardNumber">Card Number</label>
                                                            <div className={styles['input-container']}> {/* Update className with the imported styles */}
                                                                <span className={styles['fa-icon']}></span>
                                                                <input type="text" id="cardNumber" name="cardNumber" placeholder="0000 0000 0000 0000" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.columns}> {/* Update className with the imported styles */}
                                                        <div className={styles['first-col']}> {/* Update className with the imported styles */}
                                                            <div className={styles['half-width']}> {/* Update className with the imported styles */}
                                                                <label htmlFor="firstName">First Name</label>
                                                                <input type="text" id="firstName" name="firstName" placeholder=" " />
                                                            </div>
                                                            <div className={styles['half-width']}> {/* Update className with the imported styles */}
                                                                <label htmlFor="securityCode">Security Code</label>
                                                                <input type="text" id="securityCode" name="securityCode" placeholder=" " />
                                                            </div>
                                                        </div>
                                                        <div className={styles.spacer}>&nbsp;</div>
                                                        <div className={styles['second-col']}> {/* Update className with the imported styles */}
                                                            <div className={styles['half-width']}> {/* Update className with the imported styles */}
                                                                <label htmlFor="lastName">Last Name</label>
                                                                <input type="text" id="lastName" name="lastName" placeholder=" " />
                                                            </div>
                                                            <div className={styles['half-width']}> {/* Update className with the imported styles */}
                                                                <label htmlFor="expirationDate">Expiration Date</label>
                                                                <input type="text" id="expirationDate" name="expirationDate" placeholder="MM / YY" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.savebutton}> {/* Update className with the imported styles */}
                                                        <input type="submit" defaultValue="Save" id="save" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* CREDIT CARD FORM END */}
                                            <div className={styles.PayPal}> {/* Update className with the imported styles */}
                                                <input type="radio" id="PayPal" name="cards" onClick={() => openPayPalForm()} />
                                                <label htmlFor="PayPal">PayPal</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* FORM END */}
                        </div>
                        {/* LEFT BOX END */}
                        {/* RIGHT BOX */}
                        <div className={styles.rightbox}> {/* Update className with the imported styles */}
                            <div className={styles['rightbox-section']}> {/* Update className with the imported styles */}
                                <div className={styles['existing-payment-methods']}> {/* Update className with the imported styles */}
                                    <div className={styles['payment-methods-card-child-col']}>
                                        <div className={styles['card-with-icon']}>
                                            <img src={Paypal} />
                                        </div>
                                    </div>
                                    <div className={styles['payment-methods-card-child-col']}>
                                        <div className={styles['card-description']}>
                                            <h1>Card ending in 3304</h1>
                                            <h2>Exp. date 03/31</h2>
                                        </div>
                                    </div>
                                    <div className={styles['payment-methods-card-child-col']}>
                                        <div className={styles['card-options']}>
                                            <div className={styles['payment-methods-card-child-col']}>
                                                <button className={styles['default-button']}>Make Default</button>
                                            </div>
                                            <div className={styles['payment-methods-card-child-col']}>
                                                <button>
                                                    <img src={Trashbin} height="25px" />
                                                </button>
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
        </>
    );
}

export default Billings;

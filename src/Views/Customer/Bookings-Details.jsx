import React from 'react';
import { Link } from 'react-router-dom';
import bookingDetails from './CSS/bookings-details.module.css'; 
import SignedInHeader from './Signed-In-Header';
import samplePhoto from './IMAGE/Icons/samplePhoto.png';
import bookingPlaced from './IMAGE/Icons/bookingPlaced.png';
import paymentConfirmed from './IMAGE/Icons/paymentConfirmed.png';
import arriving from './IMAGE/Icons/arriving.png';
import serviceFinished from './IMAGE/Icons/serviceFinished.png';

function BookingsDetails() {
    return (
        <div>
            <SignedInHeader />
            <div className={bookingDetails.container}>
                <div className={bookingDetails['booking-details-container']}>
                    <h1 className={bookingDetails.completed}>COMPLETED</h1>
                    <div className={bookingDetails['status-container']}>
                        <div className={bookingDetails['status-icons-container']}>
                            <div className={bookingDetails.imagebox + ' ' + bookingDetails.booking}>
                                <img src={bookingPlaced} alt="Booking Placed" />
                            </div>
                            <line className={bookingDetails.bookingline} />
                            <div className={bookingDetails.imagebox + ' ' + bookingDetails.payment}>
                                <img src={paymentConfirmed} alt="Payment Confirmed" />
                            </div>
                            <line className={bookingDetails.arrivingline} />
                            <div className={bookingDetails.imagebox + ' ' + bookingDetails.arriving}>
                                <img src={arriving} alt="Arriving" />
                            </div>
                            <line className={bookingDetails.arrivedline} />
                            <div className={bookingDetails.imagebox + ' ' + bookingDetails.finished}>
                                <img src={serviceFinished} alt="Service Finished" />
                            </div>
                        </div>
                        <div className={bookingDetails['status-name-container']}>
                            <h1 style={{ padding: '0px 0px 0px 220px' }}>Booking Placed</h1>
                            <h1 style={{ padding: '0px 0px 0px 45px' }}>Payment Confirmed</h1>
                            <h1 style={{ padding: '0px 0px 0px 72px' }}>Arriving</h1>
                            <h1 style={{ padding: '0px 0px 0px 105px' }}>Service Finished</h1>
                        </div>
                    </div>
                    <div className={bookingDetails['services-container-container']}>
                        <div className={bookingDetails['services-container']}>
                            <img src={samplePhoto} alt="Sample Photo" />
                            <h1>Professional Line Standers</h1>
                        </div>
                    </div>
                    <div className={bookingDetails['services-details-container']}>
                        <div className={bookingDetails['services-details']}>
                            <div className={bookingDetails['booking']}>
                                <h1>BOOKING ADDRESS</h1>
                                <h2>John Lennon</h2>
                                <h3>+63 918 939 6942</h3>
                                <h3>9W27+R8R, Sitio Nasipit, Brgy, Cebu City</h3>
                            </div>
                            <div className={bookingDetails['workers']}>
                                <h1>WORKER NAMES</h1>
                                <div className={bookingDetails['worker-name']}>
                                    <h2>Xavier Neil Angel &nbsp; |</h2>
                                    <Link to="/customer/workers-profile.html">VIEW PROFILE</Link>
                                </div>
                                <form id="ratingForm" className={bookingDetails['ratingForm']}>
                                    <div className={bookingDetails['star-rating']}>
                                        <i className="fas fa-regular fa-star" data-index={0} />
                                        <i className="fas fa-regular fa-star" data-index={1} />
                                        <i className="fas fa-regular fa-star" data-index={2} />
                                        <i className="fas fa-regular fa-star" data-index={3} />
                                        <i className="fas fa-regular fa-star" data-index={4} />
                                    </div>
                                    <button type="submit">Rate</button>
                                </form>
                            </div>
                        </div>
                        <div className={bookingDetails['services-breakdown']}>
                            <table>
                                <tbody>
                                    <tr className={bookingDetails['normalth']}>
                                        <th>Payment Method</th>
                                        <td>Cash-On-Delivery</td>
                                    </tr>
                                    <tr className={bookingDetails['normalth']}>
                                        <th>Service Type</th>
                                        <td>Duration</td>
                                    </tr>
                                    <tr className={bookingDetails['row3']}>
                                        <th>Base Price</th>
                                        <td>₱250.00</td>
                                    </tr>
                                    <tr className={bookingDetails['row3']}>
                                        <th>Orders</th>
                                        <td>2</td>
                                    </tr>
                                    <tr className={bookingDetails['row3']}>
                                        <th>Duration</th>
                                        <td>2 hrs</td>
                                    </tr>
                                    <tr className={bookingDetails['row3end']}>
                                        <th>Service Fees</th>
                                        <td>₱100.00</td>
                                    </tr>
                                    <tr className={bookingDetails['lasttworows']}>
                                        <th>Calculation</th>
                                        <td>
                                            <p>((Base Price x Orders) x Service Type) + Service Fee</p>
                                            <p>((250 x 2) x 2) + 100</p>
                                        </td>
                                    </tr>
                                    <tr style={{ border: 'none' }} className={bookingDetails['lasttworows']}>
                                        <th>Total</th>
                                        <td>₱1100.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingsDetails;

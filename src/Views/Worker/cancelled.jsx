import React from "react"
import { ReactDOM } from "react"
import { Link, useNavigate } from 'react-router-dom';
import SignedInHeader from "./Signed-In-Header"
import './CSS/bookings-details.css'
import './CSS/cancelled.css'
import Sample from './Image/samplePhoto.png'
import BookingPlaced from './Image/bookingPlaced.png'
import PaymentConfirmed from './Image/paymentConfirmed.png'
import Arriving from './Image/arriving.png'
import ServiceFinished from './Image/serviceFinished.png'

function Cancelled(){
  const navigate = useNavigate();
    return(
        <div>
            <SignedInHeader/>
            <div className="container">
            <Link className='back-button' onClick={() => navigate(-1)}>
            &larr; Back
            </Link>
              <div className="booking-details-container">
                <h1 className="completed">CANCELED</h1>
                <div className="status-container">
                  <div className="status-icons-container">
                    <div className="imagebox booking">
                      <img src={BookingPlaced}/>
                    </div>
                    <hr className="bookingline" />
                    <div className="imagebox payment">
                      <img src={PaymentConfirmed} />
                    </div>
                    <hr />
                    <div className="imagebox arriving">
                      <img src={Arriving}/>
                    </div>
                    <hr />
                    <div className="imagebox finished">
                      <img src={ServiceFinished}/>
                    </div>
                  </div>
                  <div className="status-name-container">
                    <h1 style={{padding: '0px 0px 0px 220px'}}>Booking Placed</h1>
                    <h1 style={{padding: '0px 0px 0px 45px'}}>Payment Confirmed</h1>
                    <h1 style={{padding: '0px 0px 0px 72px'}}>Arriving</h1>
                    <h1 style={{padding: '0px 0px 0px 105px'}}>Service Finished</h1>
                  </div>
                </div>
                <div className="services-container">
                  <img src={Sample}/>
                  <h1>Professional Line Standing</h1>
                </div>
                <div className="services-details-container">
                  <div className="services-details">
                    <div className="booking">
                      <h1>BOOKING ADDRESS</h1>
                      <h2>John Lennon &nbsp; |<a href="#">VIEW PROFILE</a></h2>
                      <h3>+63 918 939 6942</h3>
                      <h3>9W27+R8R, Sitio Nasipit, Brgy, Cebu City</h3>
                    </div>
                    <div className="workers">
                      <h1>WORKER NAMES</h1>
                      <div className="worker-name">
                        <h2>Johnny Del Mondo &nbsp; |</h2>
                        <a href="/VIEWS/Worker/worker-profile.html">VIEW YOUR PROFILE</a>
                      </div>
                      <div className="worker-name">
                        <h2>Beneditto Amistad Tiu &nbsp; |</h2>
                        <a href="/VIEWS/Worker/workers-profile.html">VIEW PROFILE</a>
                      </div>
                      <div className="worker-name">
                        <h2>Xavier Neil Angel &nbsp; |</h2>
                        <a href="#">VIEW PROFILE</a>
                      </div>
                    </div>
                  </div>
                  <div className="services-breakdown">
                    <table>
                      <tbody><tr className="normalth">
                          <th>Payment Method</th>
                          <td>Cash-On-Delivery</td>
                        </tr>
                        <tr className="normalth">
                          <th>Service Type</th>
                          <td>Duration</td>
                        </tr>
                        <tr className="row3">
                          <th>Base Price</th>
                          <td>₱250.00</td>
                        </tr>
                        <tr className="row3">
                          <th>Orders</th>
                          <td>3</td>
                        </tr>
                        <tr className="row3">
                          <th>Duration</th>
                          <td>2 hrs</td>
                        </tr>
                        <tr className="row3-end">
                          <th>Service Fees</th>
                          <td>₱100.00</td>
                        </tr>
                        <tr className="last-two-rows">
                          <th>Calculation</th>
                          <td>
                            <p>((Base Price x Orders) x Service Type) + Service Fee</p>
                            <p>((250 x 3) x 2) + 100</p>
                          </td>
                        </tr>
                        <tr style={{border: 'none'}}>
                          <th>Total</th>
                          <td>₱1600.00</td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}   

export default Cancelled;
import React from "react"
import { ReactDOM } from "react"
import { Link } from "react-router-dom"
import SignedInHeader from "./signedInHeader"
import './CSS/bookings-details.css'
import './CSS/pending.css'
import Sample from './Image/samplePhoto.png'
import BookingPlaced from './Image/bookingPlaced.png'
import PaymentConfirmed from './Image/paymentConfirmed.png'
import Arriving from './Image/arriving.png'
import ServiceFinished from './Image/serviceFinished.png'

function Pending(){
    return(
        <>
            <SignedInHeader/>
            <div>
            <Link to="/workerBookings" className="back-button"> ← Back</Link>
            <div className="container">
            <div className="booking-details-container">
            <h1 className="completed">PAYMENT PENDING</h1>
            <div className="status-container">
                <div className="status-icons-container">
                <div className="imagebox booking">
                    <img src={BookingPlaced} />
                </div>
                <hr className="bookingline" />
                <div className="imagebox payment">
                    <img src={PaymentConfirmed} />
                </div>
                <hr />
                <div className="imagebox arriving">
                    <img src={Arriving} />
                </div>
                <hr />
                <div className="imagebox finished">
                    <img src={ServiceFinished}/>
                </div>
                </div>
                <div className="status-name-container">
                <h1 style={{padding: '0px 0px 0px 220px'}}>Booking Placed <a href="put-logic-is-here.html" className="booking-placed-button">&nbsp;</a></h1>
                <h1 style={{padding: '0px 0px 0px 40px'}}>Payment Confirmed <a href="put-logic-is-here.html">Recieved Payment</a></h1>
                <h1 style={{padding: '0px 0px 0px 30px'}}>Arriving <a href="put-logic-is-here.html">Arrived at location</a></h1>
                <h1 style={{padding: '0px 0px 0px 50px'}}>Service Finished <a href="put-logic-is-here.html">Service Completed</a></h1>
                </div>
            </div>
            <div className="services-container">
                    <img src={Sample} />
                    <h1> MASSAGE THERAPY</h1>
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
                      <h2>Beneditto Tiu &nbsp; |</h2>
                      <a href="/VIEWS/Worker/workers-profile.html">VIEW PROFILE</a>
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
                        <td>2</td>
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
                          <p>((250 x 2) x 2) + 100</p>
                        </td>
                      </tr>
                      <tr style={{border: 'none'}} className="last-two-rows">
                        <th>Total</th>
                        <td>₱1100.00</td>
                      </tr>
                    </tbody></table>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}   

export default Pending;
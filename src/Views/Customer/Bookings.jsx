import React from 'react';
import { Link } from 'react-router-dom';
import bookings from './CSS/bookings.module.css'; // Import your CSS module
import SignedInHeader from './Signed-In-Header';
import samplePhoto from './IMAGE/Icons/samplePhoto.png';
import massageTherapy from '../../General/IMAGE/MassageTherapy.jpg';

function Bookings() {
    return (
        <div>
            <SignedInHeader />
            <div className={bookings['container']}>
                <div className={bookings['booking-container']}>
                    <label>CURRENT BOOKINGS</label>
                    <table>
                        <tbody>
                            <Link to='/customer/bookings/details'>
                                <tr>
                                    <td className={bookings['image']}>
                                        <img src={massageTherapy} alt="Massage Therapy" />
                                    </td>
                                    <td className={bookings['date-title']}>
                                        <h2>14/11/2023</h2>
                                        <h1>MASSAGE THERAPY</h1>
                                    </td>
                                    <td className={bookings['status']}>
                                        <h2>On going</h2>
                                    </td>
                                    <td className={bookings['price']}>
                                        <h2>total price: ₱2500.00</h2>
                                    </td>
                                </tr>
                            </Link>
                            <Link to='/customer/bookings/details'>
                                <tr>
                                    <td className={bookings['image']}>
                                        <img src={samplePhoto} alt="Sample" />
                                    </td>
                                    <td className={bookings['date-title']}>
                                        <h2>14/11/2023</h2>
                                        <h1>FOOT SPA</h1>
                                    </td>
                                    <td className={bookings['status']}>
                                        <h2>APPROVED</h2>
                                    </td>
                                    <td className={bookings['price']}>
                                        <h2>total price: ₱1100.00</h2>
                                    </td>
                                </tr>
                            </Link>
                            <Link to='/customer/bookings/details'>
                                <tr>
                                    <td className={bookings['image']}>
                                        <img src={samplePhoto} alt="Sample" />
                                    </td>
                                    <td className={bookings['date-title']}>
                                        <h2>14/11/2023</h2>
                                        <h1>GARDENING</h1>
                                    </td>
                                    <td className={bookings['status']}>
                                        <h2>PENDING</h2>
                                    </td>
                                    <td className={bookings['price']}>
                                        <h2>total price: ₱2300.00</h2>
                                    </td>
                                </tr>
                            </Link>
                        </tbody>
                    </table>
                    <label>PAST BOOKINGS</label>
                    <table>
                        <tbody>
                            <Link to='/customer/bookings/details'>
                                <tr>
                                    <td className={bookings['image']}>
                                        <img src={samplePhoto} alt="Sample" />
                                    </td>
                                    <td className={bookings['date-title']}>
                                        <h2>14/11/2023</h2>
                                        <h1>Professional Line Standing</h1>
                                    </td>
                                    <td className={bookings['status']}>
                                        <h2>Completed</h2>
                                    </td>
                                    <td className={bookings['price']}>
                                        <h2>total price: ₱2500.00</h2>
                                    </td>
                                </tr>
                            </Link>
                            <Link to='/customer/bookings/details'>
                                <tr>
                                    <td className={bookings['image']}>
                                        <img src={samplePhoto} alt="Sample" />
                                    </td>
                                    <td className={bookings['date-title']}>
                                        <h2>14/11/2023</h2>
                                        <h1>FOOT SPA</h1>
                                    </td>
                                    <td className={bookings['status']}>
                                        <h2>Completed</h2>
                                    </td>
                                    <td className={bookings['price']}>
                                        <h2>total price: ₱1100.00</h2>
                                    </td>
                                </tr>
                            </Link>
                            <Link to='/customer/bookings/details'>
                                <tr>
                                    <td className={bookings['image']}>
                                        <img src={samplePhoto} alt="Sample" />
                                    </td>
                                    <td className={bookings['date-title']}>
                                        <h2>14/11/2023</h2>
                                        <h1>GARDENING</h1>
                                    </td>
                                    <td className={bookings['status']}>
                                        <h2>Completed</h2>
                                    </td>
                                    <td className={bookings['price']}>
                                        <h2>total price: ₱2300.00</h2>
                                    </td>
                                </tr>
                            </Link>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Bookings;

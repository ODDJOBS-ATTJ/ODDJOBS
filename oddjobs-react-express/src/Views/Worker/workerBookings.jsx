import React from "react"
import { ReactDOM } from "react"
import { Link } from "react-router-dom"
import SignedInHeader from "./signedInHeader"
import Style from './CSS/bookings.module.css'
import Sample from './Image/samplePhoto.png'
import { useNavigate } from 'react-router-dom';

function WorkerBookings(){
    const navigate = useNavigate();
    const handleRowClick = (path) => {
        navigate(path);
    };
    return(
        <>
            <SignedInHeader/>
            <div className={Style['container']}>
            <div className={Style["booking-container"]}>
                <label>CURRENT BOOKINGS</label>
            <table>
            <tbody>
                <tr onClick={() => handleRowClick("/workerBookings/onGoing")}>
                <td className={Style['image']}>
                    <img src={Sample}/>
                </td>
                <td className={Style['date-title']}>
                    <h2>14/11/2023</h2>
                    <h1>MASSAGE THERAPY</h1>
                </td>
                <td className={Style['cancel']}>
                    <Link><h2>Cancel</h2></Link>
                </td>
                <td className={Style['status']}>
                    <h2>On going</h2>
                </td>
                <td className={Style['price']}>
                    <h2>total price: ₱2500.00</h2>
                </td>
                </tr>
                {/* Repeat the above structure for other rows */}
            </tbody>
            </table>

            <label>PAST BOOKINGS</label>
            <table>
            <tbody>
                <tr onClick={() => handleRowClick("/workerBookings/completed")}>
                <td className={Style['image']}>
                    <img src={Sample} />
                </td>
                <td className={Style['date-title-past']}>
                    <h2>14/11/2023</h2>
                    <h1>Professional line standing</h1>
                </td>
                <td className={Style['status']}>
                    <h2>completed</h2>
                </td>
                <td className={Style['price']}>
                    <h2>total price: ₱2500.00</h2>
                </td>
                </tr>
                {/* Repeat the above structure for other rows */}
            </tbody>
            </table>

            <label>CANCELLED BOOKINGS</label>
            <table>
            <tbody>
                <tr onClick={() => handleRowClick("/workerBookings/cancelled")}>
                <td className={Style['image']}>
                    <img src={Sample} />
                </td>
                <td className={Style['date-title-past']}>
                    <h2>14/11/2023</h2>
                    <h1>Professional Line Standing</h1>
                </td>
                <td className={Style['status']}>
                    <h2>Canceled</h2>
                </td>
                <td className={Style['price']}>
                    <h2>total price: ₱2500.00</h2>
                </td>
                </tr>
                {/* Repeat the above structure for other rows */}
            </tbody>
            </table>
            </div>
            </div>
        </>
    );
}   

export default WorkerBookings;
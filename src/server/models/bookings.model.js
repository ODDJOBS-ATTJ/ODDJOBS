"use strict";
const dbConn = require("../config/db.config.js");

function Booking(booking) {
  this.bookingID = booking.bookingID;
  this.serviceID = booking.serviceID;
  this.date = booking.date;
  this.paymentMethod = booking.paymentMethod;
  this.orderID = booking.orderID;
  this.orderQuantity = booking.orderQuantity;
  this.serviceFee = booking.serviceFee;
  this.totalPrice = booking.totalPrice;
  this.status = booking.status;
}

Booking.create = (newBooking, result) => {
  dbConn.query("INSERT INTO bookings set ?", newBooking, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertID);
      result(null, res.insertID);
    }
  });
};

Booking.findById = (bookingID, result) => {
  dbConn.query(
    "SELECT * FROM bookings where bookingID = ?",
    bookingID,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Booking.findAll = (result) => {
  dbConn.query("SELECT * FROM bookings", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Bookings: ", res);
      result(null, res);
    }
  });
};

Booking.update = (id, booking, result) => {
  dbConn.query(
    "UPDATE bookings SET serviceID = ?, date = ?, paymentMethod = ?, orderID = ?, orderQuantity = ?, serviceFee = ?, totalPrice = ?, status = ? WHERE bookingID = ?",
    [
      booking.serviceID,
      booking.date,
      booking.paymentMethod,
      booking.orderID,
      booking.orderQuantity,
      booking.serviceFee,
      booking.totalPrice,
      booking.status,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Updated booking: ", res);
        result(null, res);
      }
    }
  );
};

Booking.delete = (id, result) => {
  dbConn.query("DELETE FROM bookings WHERE bookingID = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Deleted booking: ", res);
      result(null, res);
    }
  });
};

module.exports = Booking;

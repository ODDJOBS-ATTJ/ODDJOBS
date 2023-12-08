"use strict";
const Booking = require("../models/bookings.model");

exports.findAll = (req, res) => {
  Booking.findAll((err, booking) => {
    if (err) {
      res.send(err);
    }
    res.send({ status: 200, data: booking });
  });
};

exports.findById = (req, res) => {
  Booking.findById(req.params.id, (err, booking) => {
    if (err) {
      res.send(err);
    }
    res.json({ status: 200, data: booking });
  });
};

exports.create = (req, res) => {
  const newBooking = new Booking(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all the required fields" });
  } else {
    Booking.create(newBooking, (err, booking) => {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        status: 200,
        message: "Booking submitted",
        data: booking,
      });
    });
  }
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all the required field" });
  } else {
    Booking.update(req.params.id, new Booking(req.body), (err, booking) => {
      if (err) {
        res.send(err);
      }
      res.json({
                error: false,
                status: 200,
                message: "Booking updated accordingly",
                data: booking,
              });
            });
          }
        };
        
        exports.delete = (req, res) => {
          Booking.delete(req.params.id, (err, booking) => {
            if (err) {
              res.send(err);
            }
            res.json({ error: false, message: "Booking deleted!", status: 200 });
          });
        };
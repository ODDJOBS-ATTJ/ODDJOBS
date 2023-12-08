const Booking = require("../models/bookings.model.js");

exports.findAll = (req, res) => {
  Booking.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving bookings.",
      });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  const newBooking = new Booking(req.body);

  Booking.create(newBooking, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Booking.",
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  Booking.findById(req.params.bookingId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Booking with id ${req.params.bookingId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Booking with id " + req.params.bookingId,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  const booking = new Booking(req.body);

  Booking.update(req.params.bookingId, booking, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Booking with id ${req.params.bookingId}.`,
        });
      } else {
        res.status(500).send({
            message: "Error updating Booking with id " + req.params.bookingId,
          });
        }
      } else res.send(data);
    });
  };
  
exports.delete = (req, res) => {
Booking.delete(req.params.bookingId, (err, data) => {
    if (err) {
    if (err.kind === "not_found") {
        res.status(404).send({
        message: `Not found Booking with id ${req.params.bookingId}.`,
        });
    } else {
        res.status(500).send({
        message: "Could not delete Booking with id " + req.params.bookingId,
        });
    }
    } else res.send({ message: `Booking was deleted successfully!` });
});
};
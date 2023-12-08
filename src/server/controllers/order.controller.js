const Order = require("../models/orders.model.js");

exports.findAll = (req, res) => {
  Order.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving orders.",
      });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  const newOrder = new Order(req.body);

  Order.create(newOrder, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Order.",
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  Order.findById(req.params.orderId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Order with id ${req.params.orderId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Order with id " + req.params.orderId,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  const order = new Order(req.body);

  Order.update(req.params.orderId, order, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Order with id ${req.params.orderId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Order with id " + req.params.orderId,
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  Order.delete(req.params.orderId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Order with id ${req.params.orderId}.`,
        });
      } else {
        res.status(500).send({
            message: "Could not delete Order with id " + req.params.orderId,
          });
        }
      } else res.send({ message: `Order was deleted successfully!` });
    });
};
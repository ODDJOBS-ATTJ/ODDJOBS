const Billing = require("../models/billing.model.js");

exports.findAll = (req, res) => {
  Billing.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving billings.",
      });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  const newBilling = new Billing(req.body);

  Billing.create(newBilling, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Billing.",
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  Billing.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Billing with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Billing with id " + req.params.userId,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  const billing = new Billing(req.body);

  Billing.update(req.params.userId, billing, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Billing with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Billing with id " + req.params.userId,
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  Billing.delete(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Billing with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
            message: "Could not delete Billing with id " + req.params.userId,
          });
        }
      } else res.send({ message: `Billing was deleted successfully!` });
    });
};
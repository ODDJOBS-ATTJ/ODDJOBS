const Status = require("../models/status.model.js");

exports.findAll = (req, res) => {
  Status.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving status.",
      });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  const newStatus = new Status(req.body);

  Status.create(newStatus, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Status.",
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  Status.findById(req.params.statusId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Status with id ${req.params.statusId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Status with id " + req.params.statusId,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  const status = new Status(req.body);

  Status.update(req.params.statusId, status, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Status with id ${req.params.statusId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Status with id " + req.params.statusId,
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  Status.delete(req.params.statusId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Status with id ${req.params.statusId}.`,
        });
      } else {
        res.status(500).send({
            message: "Could not delete Status with id " + req.params.statusId,
        });
        }
    } else res.send({ message: `Status was deleted successfully!` });
    });
};
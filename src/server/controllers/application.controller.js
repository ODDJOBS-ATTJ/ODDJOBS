const Application = require("../models/application.model.js");

exports.findAll = (req, res) => {
  Application.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving applications.",
      });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  const newApplication = new Application(req.body);

  Application.create(newApplication, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Application.",
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  Application.findById(req.params.applicationId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Application with id ${req.params.applicationId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Application with id " + req.params.applicationId,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  const application = new Application(req.body);

  Application.update(req.params.applicationId, application, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Application with id ${req.params.applicationId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Application with id " + req.params.applicationId,
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  Application.delete(req.params.applicationId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Application with id ${req.params.applicationId}.`,
        });
      } else {
        res.status(500).send({
            message: "Could not delete Application with id " + req.params.applicationId,
          });
        }
      } else res.send({ message: `Application was deleted successfully!` });
    });
};
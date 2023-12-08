const Action = require("../models/action.model.js");

exports.findAll = (req, res) => {
  Action.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving actions.",
      });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  const newAction = new Action(req.body);

  Action.create(newAction, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Action.",
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  Action.findById(req.params.actionId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Action with id ${req.params.actionId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Action with id " + req.params.actionId,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  const action = new Action(req.body);

  Action.update(req.params.actionId, action, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Action with id ${req.params.actionId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Action with id " + req.params.actionId,
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  Action.delete(req.params.actionId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Action with id ${req.params.actionId}.`,
        });
      } else {
        res.status(500).send({
            message: "Could not delete Action with id " + req.params.actionId,
          });
        }
      } else res.send({ message: `Action was deleted successfully!` });
    });
};
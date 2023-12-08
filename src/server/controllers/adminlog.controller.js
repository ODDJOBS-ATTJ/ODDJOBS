const AdminLog = require("../models/adminlog.model.js");

// Create and Save a new AdminLog
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a AdminLog
  const adminLog = new AdminLog({
    adminLogID: req.body.adminLogID,
    userID: req.body.userID,
    date: req.body.date,
    actionID: req.body.actionID
  });

  // Save AdminLog in the database
  AdminLog.create(adminLog, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the AdminLog."
      });
    else res.send(data);
  });
};

// Retrieve all AdminLogs from the database.
exports.findAll = (req, res) => {
  AdminLog.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving adminlogs."
      });
    else res.send(data);
  });
};

// Find a single AdminLog with a adminLogId
exports.findOne = (req, res) => {
  AdminLog.findById(req.params.adminLogId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found AdminLog with id ${req.params.adminLogId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving AdminLog with id " + req.params.adminLogId
        });
      }
    } else res.send(data);
  });
};
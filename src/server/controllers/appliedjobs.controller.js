const AppliedJob = require("../models/appliedjobs.model.js");

exports.findAll = (req, res) => {
  AppliedJob.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving applied jobs.",
      });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  const newAppliedJob = new AppliedJob(req.body);

  AppliedJob.create(newAppliedJob, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Applied Job.",
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  AppliedJob.findById(req.params.appliedJobsId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Applied Job with id ${req.params.appliedJobsId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Applied Job with id " + req.params.appliedJobsId,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  const appliedJob = new AppliedJob(req.body);

  AppliedJob.update(req.params.appliedJobsId, appliedJob, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Applied Job with id ${req.params.appliedJobsId}.`,
        });
      } else {
        res.status(500).send({
            message: "Error updating Applied Job with id " + req.params.appliedJobsId,
          });
        }
      } else res.send(data);
    });
  };
  
  exports.delete = (req, res) => {
    AppliedJob.delete(req.params.appliedJobsId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Applied Job with id ${req.params.appliedJobsId}.`,
          });
        } else {
          res.status(500).send({
            message: "Could not delete Applied Job with id " + req.params.appliedJobsId,
          });
        }
      } else res.send({ message: `Applied Job was deleted successfully!` });
    });
};
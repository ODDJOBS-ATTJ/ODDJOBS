const Report = require("../models/report.model.js");

exports.findAll = (req, res) => {
  Report.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reports.",
      });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  const newReport = new Report(req.body);

  Report.create(newReport, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Report.",
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  Report.findById(req.params.reportId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Report with id ${req.params.reportId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Report with id " + req.params.reportId,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  const report = new Report(req.body);

  Report.update(req.params.reportId, report, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Report with id ${req.params.reportId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Report with id " + req.params.reportId,
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  Report.delete(req.params.reportId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Report with id ${req.params.reportId}.`,
        });
      } else {
        res.status(500).send({
            message: "Could not delete Report with id " + req.params.reportId,
        });
        }
    } else res.send({ message: `Report was deleted successfully!` });
    });
};
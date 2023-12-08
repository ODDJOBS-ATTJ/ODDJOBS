"use strict";
const dbConn = require("../config/db.config.js");

function Report(report) {
  this.userID = report.userID;
  this.workerID = report.workerID;
  this.description = report.description;
}

Report.create = (newReport, result) => {
  dbConn.query("INSERT INTO reports set ?", newReport, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertID);
      result(null, res.insertID);
    }
  });
};

Report.findById = (reportID, result) => {
  dbConn.query("SELECT * FROM reports where reportID = ?", reportID, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Report.findAll = (result) => {
  dbConn.query("SELECT * FROM reports", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Reports: ", res);
      result(null, res);
    }
  });
};

Report.update = (id, report, result) => {
  dbConn.query(
    "UPDATE reports SET userID = ?, workerID = ?, description = ? WHERE reportID = ?",
    [report.userID, report.workerID, report.description, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Updated report: ", res);
        result(null, res);
      }
    }
  );
};

Report.delete = (id, result) => {
  dbConn.query("DELETE FROM reports WHERE reportID = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Deleted report: ", res);
      result(null, res);
    }
  });
};

module.exports = Report;
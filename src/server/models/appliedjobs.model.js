"use strict";
const dbConn = require("../config/db.config.js");

function AppliedJob(appliedJob) {
  this.workerID = appliedJob.workerID;
  this.serviceID = appliedJob.serviceID;
  this.isDeleted = appliedJob.isDeleted;
  this.isDefault = appliedJob.isDefault;
}

AppliedJob.create = (newAppliedJob, result) => {
  dbConn.query("INSERT INTO appliedjobs set ?", newAppliedJob, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertID);
      result(null, res.insertID);
    }
  });
};

AppliedJob.findById = (appliedJobsID, result) => {
  dbConn.query("SELECT * FROM appliedjobs where appliedJobsID = ?", appliedJobsID, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

AppliedJob.findAll = (result) => {
  dbConn.query("SELECT * FROM appliedjobs", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("AppliedJobs: ", res);
      result(null, res);
    }
  });
};

AppliedJob.update = (id, appliedJob, result) => {
  dbConn.query(
    "UPDATE appliedjobs SET workerID = ?, serviceID = ?, isDeleted = ?, isDefault = ? WHERE appliedJobsID = ?",
    [appliedJob.workerID, appliedJob.serviceID, appliedJob.isDeleted, appliedJob.isDefault, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Updated applied job: ", res);
        result(null, res);
      }
    }
  );
};

AppliedJob.delete = (id, result) => {
  dbConn.query("DELETE FROM appliedjobs WHERE appliedJobsID = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Deleted applied job: ", res);
      result(null, res);
    }
  });
};

module.exports = AppliedJob;
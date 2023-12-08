"use strict";
const dbConn = require("../config/db.config.js");

function Status(status) {
  this.statusType = status.statusType;
}

Status.create = (newStatus, result) => {
  dbConn.query("INSERT INTO status set ?", newStatus, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertID);
      result(null, res.insertID);
    }
  });
};

Status.findById = (statusID, result) => {
  dbConn.query("SELECT * FROM status where statusID = ?", statusID, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Status.findAll = (result) => {
  dbConn.query("SELECT * FROM status", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Status: ", res);
      result(null, res);
    }
  });
};

Status.update = (id, status, result) => {
  dbConn.query(
    "UPDATE status SET statusType = ? WHERE statusID = ?",
    [status.statusType, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Updated status: ", res);
        result(null, res);
      }
    }
  );
};

Status.delete = (id, result) => {
  dbConn.query("DELETE FROM status WHERE statusID = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Deleted status: ", res);
      result(null, res);
    }
  });
};

module.exports = Status;
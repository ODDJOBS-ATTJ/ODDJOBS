"use strict";
const dbConn = require("../config/db.config.js");

function Application(application) {
  this.workerID = application.workerID;
  this.date = new Date();
  this.isAccepted = application.isAccepted;
}

Application.create = (newApplication, result) => {
  dbConn.query("INSERT INTO applications set ?", newApplication, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertID);
      result(null, res.insertID);
    }
  });
};

Application.findById = (applicationID, result) => {
  dbConn.query("SELECT * FROM applications where applicationID = ?", applicationID, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Application.findAll = (result) => {
  dbConn.query("SELECT * FROM applications", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Applications: ", res);
      result(null, res);
    }
  });
};

Application.update = (id, application, result) => {
  dbConn.query(
    "UPDATE applications SET workerID = ?, date = ?, isAccepted = ? WHERE applicationID = ?",
    [application.workerID, application.date, application.isAccepted, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Updated application: ", res);
        result(null, res);
      }
    }
  );
};

Application.delete = (id, result) => {
  dbConn.query("DELETE FROM applications WHERE applicationID = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Deleted application: ", res);
      result(null, res);
    }
  });
};

module.exports = Application;
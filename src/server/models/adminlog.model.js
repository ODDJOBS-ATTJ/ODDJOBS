"use require";
const dbConn = require('../config/db.config.js');

// Constructor
const AdminLog = function(adminLog) {
  this.adminLogID = adminLog.adminLogID;
  this.userID = adminLog.userID;
  this.date = new Date();
  this.actionID = adminLog.actionID;
};

AdminLog.create = (newAdminLog, result) => {
  dbConn.query("INSERT INTO adminlog SET ?", newAdminLog, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created adminlog: ", { id: res.insertId, ...newAdminLog });
    result(null, { id: res.insertId, ...newAdminLog });
  });
};

AdminLog.findById = (adminLogId, result) => {
  dbConn.query(`SELECT * FROM adminlog WHERE adminLogID = ${adminLogId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found adminlog: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found AdminLog with the id
    result({ kind: "not_found" }, null);
  });
};

AdminLog.getAll = result => {
  dbConn.query("SELECT * FROM adminlog", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("adminlog: ", res);
    result(null, res);
  });
};

module.exports = AdminLog;
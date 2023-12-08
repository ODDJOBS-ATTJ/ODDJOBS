"use strict";
const dbConn = require("../config/db.config.js");

function Action(action) {
  this.actionType = action.actionType;
}

Action.create = (newAction, result) => {
  dbConn.query("INSERT INTO action set ?", newAction, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertID);
      result(null, res.insertID);
    }
  });
};

Action.findById = (actionID, result) => {
  dbConn.query("SELECT * FROM action where actionID = ?", actionID, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Action.findAll = (result) => {
  dbConn.query("SELECT * FROM action", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Actions: ", res);
      result(null, res);
    }
  });
};

Action.update = (id, action, result) => {
  dbConn.query(
    "UPDATE action SET actionType = ? WHERE actionID = ?",
    [action.actionType, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Updated action: ", res);
        result(null, res);
      }
    }
  );
};

Action.delete = (id, result) => {
  dbConn.query("DELETE FROM action WHERE actionID = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Deleted action: ", res);
      result(null, res);
    }
  });
};

module.exports = Action;
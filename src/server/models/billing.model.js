"use strict";
const dbConn = require("../config/db.config.js");

function Billing(billing) {
  this.userID = billing.userID;
  this.cards = billing.cards;
  this.transactionID = billing.transactionID;
}

Billing.create = (newBilling, result) => {
  dbConn.query("INSERT INTO billing set ?", newBilling, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertID);
      result(null, res.insertID);
    }
  });
};

Billing.findById = (userID, result) => {
  dbConn.query("SELECT * FROM billing where userID = ?", userID, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Billing.findAll = (result) => {
  dbConn.query("SELECT * FROM billing", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Billings: ", res);
      result(null, res);
    }
  });
};

Billing.update = (id, billing, result) => {
  dbConn.query(
    "UPDATE billing SET cards = ?, transactionID = ? WHERE userID = ?",
    [billing.cards, billing.transactionID, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Updated billing: ", res);
        result(null, res);
      }
    }
  );
};

Billing.delete = (id, result) => {
  dbConn.query("DELETE FROM billing WHERE userID = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Deleted billing: ", res);
      result(null, res);
    }
  });
};

module.exports = Billing;
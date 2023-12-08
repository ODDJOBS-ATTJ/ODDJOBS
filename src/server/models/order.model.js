"use strict";
const dbConn = require("../config/db.config.js");

function Order(order) {
  this.bookingID = order.bookingID;
  this.workerID = order.workerID;
  this.userID = order.userID;
}

Order.create = (newOrder, result) => {
  dbConn.query("INSERT INTO orders set ?", newOrder, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertID);
      result(null, res.insertID);
    }
  });
};

Order.findById = (orderID, result) => {
  dbConn.query("SELECT * FROM orders where orderID = ?", orderID, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Order.findAll = (result) => {
  dbConn.query("SELECT * FROM orders", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Orders: ", res);
      result(null, res);
    }
  });
};

Order.update = (id, order, result) => {
  dbConn.query(
    "UPDATE orders SET bookingID = ?, workerID = ?, userID = ? WHERE orderID = ?",
    [order.bookingID, order.workerID, order.userID, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Updated order: ", res);
        result(null, res);
      }
    }
  );
};

Order.delete = (id, result) => {
  dbConn.query("DELETE FROM orders WHERE orderID = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Deleted order: ", res);
      result(null, res);
    }
  });
};

module.exports = Order;
"use strict";
const dbConn = require("../config/db.config.js");

function Rating(rating) {
  this.userID = rating.userID;
  this.workerID = rating.workerID;
  this.rating = rating.rating;
  this.description = rating.description;
}

Rating.create = (newRating, result) => {
  dbConn.query("INSERT INTO ratings set ?", newRating, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertID);
      result(null, res.insertID);
    }
  });
};

Rating.findById = (ratingID, result) => {
  dbConn.query("SELECT * FROM ratings where ratingID = ?", ratingID, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Rating.findAll = (result) => {
  dbConn.query("SELECT * FROM ratings", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Ratings: ", res);
      result(null, res);
    }
  });
};

Rating.update = (id, rating, result) => {
  dbConn.query(
    "UPDATE ratings SET userID = ?, workerID = ?, rating = ?, description = ? WHERE ratingID = ?",
    [rating.userID, rating.workerID, rating.rating, rating.description, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Updated rating: ", res);
        result(null, res);
      }
    }
  );
};

Rating.delete = (id, result) => {
  dbConn.query("DELETE FROM ratings WHERE ratingID = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Deleted rating: ", res);
      result(null, res);
    }
  });
};

module.exports = Rating;
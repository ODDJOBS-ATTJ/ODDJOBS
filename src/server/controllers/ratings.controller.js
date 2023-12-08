const Rating = require("../models/ratings.model.js");

exports.findAll = (req, res) => {
  Rating.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving ratings.",
      });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  const newRating = new Rating(req.body);

  Rating.create(newRating, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Rating.",
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  Rating.findById(req.params.ratingId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Rating with id ${req.params.ratingId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Rating with id " + req.params.ratingId,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  const rating = new Rating(req.body);

  Rating.update(req.params.ratingId, rating, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Rating with id ${req.params.ratingId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Rating with id " + req.params.ratingId,
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  Rating.delete(req.params.ratingId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Rating with id ${req.params.ratingId}.`,
        });
      } else {
        res.status(500).send({
            message: "Could not delete Rating with id " + req.params.ratingId,
          });
        }
      } else res.send({ message: `Rating was deleted successfully!` });
    });
};
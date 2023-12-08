"use strict";
const Service = require("../models/service.model");

exports.findAll = (req, res) => {
  Service.findAll((err, service) => {
    if (err) {
      res.send(err);
    }
    res.send({ status: 200, data: service });
  });
};

exports.findById = (req, res) => {
  Service.findById(req.params.id, (err, service) => {
    if (err) {
      res.send(err);
    }
    res.json({ status: 200, data: service });
  });
};

exports.create = (req, res) => {
  const newService = new Service(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all the required fields" });
  } else {
    Service.create(newService, (err, service) => {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        status: 200,
        message: "Service submitted",
        data: service,
      });
    });
  }
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all the required field" });
  } else {
    Service.update(req.params.id, new Service(req.body), (err, service) => {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        status: 200,
        message: "Service updated accordingly",
        data: service,
      });
    });
  }
};

exports.delete = (req, res) => {
  Service.delete(req.params.id, (err, service) => {
    if (err) {
      res.send(err);
    }
    res.json({ error: false, message: "Service deleted!", status: 200 });
  });
};
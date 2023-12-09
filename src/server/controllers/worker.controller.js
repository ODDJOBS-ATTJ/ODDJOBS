"use strict";
const Worker = require('../models/worker.model');

exports.create = (req, res) => {
    dbConn.query("SELECT * FROM accounts WHERE userID = ? AND isWorker = 1", req.body.userID, (err, account) => {
        if (err) {
            console.log("error: ", err);
            res.send(err);
        } else if (account.length === 0) {
            res.status(400).send({ error: true, message: 'Account is not a worker' });
        } else {
            const newWorker = new Worker(req.body);
            Worker.create(newWorker, (err, worker) => {
                if (err) {
                    res.send(err);
                }
                res.json({ error: false, message: "Worker added successfully!", data: worker });
            });
        }
    });
};

exports.registerWorker = (req, res) => {
    const newWorker = {
        ...req.body,
        document1: req.files.fileInput1[0].path,
        document2: req.files.fileInput2[0].path,
        document3: req.files.fileInput3[0].path,
    };
    Worker.create(newWorker, (err, worker) => {
        if (err) {
            res.send(err);
        }
        res.json({ error: false, message: "Worker added successfully!", data: worker });
    });
};

exports.findAll = (req, res) => {
    Worker.findAll((err, worker) => {
        if (err) {
            res.send(err);
        }
        res.send(worker);
    });
};

exports.findById = (req, res) => {
    Worker.findById(req.params.id, (err, worker) => {
        if (err) {
            res.send(err);
        }
        res.json(worker);
    });
};

exports.update = (req, res) => {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Worker.update(req.params.id, new Worker(req.body), (err, worker) => {
            if (err) {
                res.send(err);
            }
            res.json({ error: false, message: 'Worker successfully updated' });
        });
    }
};

exports.delete = (req, res) => {
    Worker.delete(req.params.id, (err, worker) => {
        if (err) {
            res.send(err);
        }
        res.json({ error: false, message: 'Worker successfully deleted' });
    });
};
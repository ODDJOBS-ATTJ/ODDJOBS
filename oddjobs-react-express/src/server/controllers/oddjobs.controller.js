'use strict';
// import Account from '../models/oddjobs.model.js';
const Account = require('../models/oddjobs.model');

exports.findAll = (req, res) => {
    Account.findAll((err, account) => {
        console.log('controller')
        if (err) {
            res.send(err);
        }
        console.log('res', account);
        res.send({ status: 200, data: account });
    });
}

exports.findById = (req, res) => {
    Account.findById(req.params.id, (err, account) => {
        if (err) {
            res.send(err);
        }
        res.json({ status: 200, data: account });
    })
}

exports.create = (req, res) => {
    const newAccount = new Account(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all the required fields' });
    } else {
        Account.create(newAccount, (err, account) => {
            if (err) {
                res.send(err);
            }
            res.json({ error:false, status: 200, message: "Account submitted", data: account});
        });
    }
}

exports.update = (req, res) => {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all the required field' });
    } else {
        Account.update(req.params.id, new Account(req.body), (err, account) => {
            if (err) {
                res.send(err);
            }
            res.json({ error:false, status: 200, message: "Account updated accordingly", data: account});
        });
    }
}

exports.delete = (req, res) => {
    Account.delete(req.params.id, (err, account) => {
        if (err) {
            res.send(err);
        }
        res.json({ error:false, message: 'Employee deleted!', status: 200 });
    });
}
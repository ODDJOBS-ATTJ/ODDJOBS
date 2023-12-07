'use strict';
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

exports.login = (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ status: 400, message: 'Email and password are required' });
    }

    // Find the account by email
    Account.findByEmail(email, (err, account) => {
        if (err) {
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }

        // Check if the account exists
        if (!account) {
            return res.status(401).json({ status: 401, message: 'Invalid credentials' });
        }

        // Check if the provided password matches the stored password
        if (password !== account.password) {
            return res.status(401).json({ status: 401, message: 'Invalid credentials' });
        }

        // Check if the account is verified
        if (!account.isVerified) {
            console.log('Account is not yet verified');
            return res.status(401).json({ status: 401, message: 'Account is not yet verified' });
        }

        // Login successful

        req.session.userID = account.id;

        res.json({ status: 200, message: 'Login successful', data: account });
        
        
    });
};

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
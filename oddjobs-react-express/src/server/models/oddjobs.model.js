'use strict';
const dbConn = require('../config/db.config.js');
// import dbConn from "../config/db.config.js";

/** For the Accounts */

function Account(account) {
    this.Email          = account.Email,
    this.Password       = account.Password,
    this.firstName      = account.firstName,
    this.lastName       = account.lastName,
    this.phoneNumber    = account.phoneNumber,
    this.birthday       = account.birthday,
    this.region         = account.region,
    this.city           = account.city,
    this.barangay       = account.barangay,
    this.zipCode        = account.zipCode,
    this.fbLink         = account.fbLink,
    this.instaLink      = account.instaLink,
    this.pfp            = account.pfp
    this.isWorker       = false,
    this.isAdmin        = false,
    this.isDeleted      = false
}

Account.create = (newAccount, result) => {
    dbConn.query("INSERT INTO accounts set ?", newAccount, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertID);
            result(null, res.insertID);
        }
    });
}

Account.findById = (userID, result) => {
    dbConn.query("SELECT * FROM accounts where userID = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Account.findAll = (result) => {
    dbConn.query("SELECT * FROM accounts", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('Employees: ', res);
            result(null, res);
        }
    });
}

Account.update = (id, employee, result) => {
    dbConn.query("UPDATE accounts SET  Email = ?, Password = ?, firstName = ?, lastName = ?, phoneNumber = ?, birthday = ?, region = ?, city = ?, barangay = ?, zipCode = ?, isWorker = ?, idAdmin = ?, fbLink = ?, instaLink = ?, pfp = ?, isDeleted = ? WHERE userID = ?", [
        account.Email,
        account.Password,
        account.firstName,
        account.lastName,
        account.phoneNumber,
        account.birthday,
        account.region,
        account.city,
        account.barangay,
        account.zipCode,
        false,
        false,
        account.fbLink, 
        account.instaLink,
        account.pfp,
        false
    ],
    (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('Employees: ', res);
            result(null, res);
        }
    });
}

Account.delete = (id, result) => {
    dbConn.query("DELETE FROM accounts WHERE userID = ?", [id], (err, result) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

module.exports = Account;
// export default Account;
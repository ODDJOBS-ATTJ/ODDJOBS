'use strict';
const dbConn = require('../db.config');

/** For the Accounts */

const Account = (account) => {
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
}

Account.create = (newAccount, result) => {
    dbConn.query("INSERT INTO accounts set ?", newAccount, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            
        }
    });
}
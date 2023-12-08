"use strict";
const dbConn = require("../config/db.config.js");

/** For the Accounts */

function Account(account) {
    (this.email           = account.email),
    (this.password        = account.password),
    (this.firstName       = account.firstName),
    (this.lastName        = account.lastName),
    (this.phoneNumber     = account.phoneNumber),
    (this.birthday        = account.birthday),
    (this.region          = account.region),
    (this.city            = account.city),
    (this.barangay        = account.barangay),
    (this.zipCode         = account.zipCode),
    (this.fbLink          = account.fbLink),
    (this.instaLink       = account.instaLink),
    (this.pfp             = account.pfp);
    (this.isWorker        = false),
    (this.isAdmin         = false),
    (this.isDeleted       = false),
    (this.isVerified      = false); // Added isVerified field
    (this.verificationID  = account.verrificationID);
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
};

Account.findById = (userID, result) => {
  dbConn.query(
    "SELECT * FROM accounts where userID = ?",
    userID,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Account.findAll = (result) => {
  dbConn.query("SELECT * FROM accounts", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Employees: ", res);
      result(null, res);
    }
  });
};

Account.update = (id, account, result) => {
  dbConn.query(
    "UPDATE accounts SET  email = ?, password = ?, firstName = ?, lastName = ?, phoneNumber = ?, birthday = ?, region = ?, city = ?, barangay = ?, zipCode = ?, isWorker = ?, isAdmin = ?, fbLink = ?, instaLink = ?, pfp = ?, isDeleted = ?, isVerified = ?, verificationID = ?, WHERE userID = ?",
    [
      account.email,
      account.password,
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
      false,
      false,
      account.verrificationID,
      account.id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Updated account: ", res);
        result(null, res);
      }
    }
  );
};

Account.delete = (id, result) => {
  dbConn.query("DELETE FROM accounts WHERE userID = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Deleted account: ", res);
      result(null, res);
    }
  });
};

Account.findByEmail = (email, result) => {
  dbConn.query("SELECT * FROM accounts WHERE email = ?", email, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res[0]); // Assuming only one account should match the email
    }
  });
};

Account.findUserIDByEmail = (email, result) => {
  dbConn.query(
    "SELECT userID FROM accounts WHERE email = ?",
    email,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res[0] ? res[0].userID : null);
      }
    }
  );
};

module.exports = Account;

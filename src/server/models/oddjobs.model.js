"use strict";
const dbConn = require("../config/db.config.js");

/** For the Accounts */

function Account(account) {
  (this.email = account.email),
    (this.password = account.password),
    (this.firstName = account.firstName),
    (this.lastName = account.lastName),
    (this.phoneNumber = account.phoneNumber),
    (this.birthday = account.birthday),
    (this.region = account.region),
    (this.city = account.city),
    (this.barangay = account.barangay),
    (this.zipCode = account.zipCode),
    (this.fbLink = account.fbLink),
    (this.instaLink = account.instaLink),
    (this.pfp = account.pfp);
  (this.isWorker = false),
    (this.isAdmin = false),
    (this.isDeleted = false),
    (this.isVerified = false), // Added isVerified field
  (this.verificationID = account.verificationID);
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
  if (id === null) {
    console.log("error: userID is null");
    result({ error: "userID is null" }, null);
  } else {
    dbConn.query(
      "UPDATE accounts SET  email = ?, password = ?, firstName = ?, lastName = ?, phoneNumber = ?, birthday = ?, region = ?, city = ?, barangay = ?, zipCode = ?, isWorker = ?, isAdmin = ?, fbLink = ?, instaLink = ?, pfp = ?, isDeleted = ?, isVerified = ?, verificationID = ? WHERE userID = ?",
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
        account.verificationID,
        id,
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
  }
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

Account.updateVerificationID = (userID, verificationID, result) => {
  dbConn.query(
    "UPDATE accounts SET verificationID = ? WHERE userID = ?",
    [verificationID, userID],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("VerificationID updated successfully");
        result(null, res);
      }
    }
  );
};

// Add this function
Account.removeVerificationID = (verificationID, result) => {
  dbConn.query(
    "UPDATE accounts SET isVerified = 1, verificationID = NULL WHERE verificationID = ?",
    verificationID,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("VerificationID removed successfully");
        result(null, res);
      }
    }
  );
};

Account.findUserIDbyVerificationID = (verificationID, result) => {
  dbConn.query(
    "SELECT userID FROM accounts WHERE verificationID = ?",
    verificationID,
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

// Add this function
Account.setAdmin = (userID, result) => {
  dbConn.query(
    "UPDATE accounts SET isAdmin = 1 WHERE userID = ?",
    userID,
    (err, res) => {
      if (err) {
        console.error("error: ", err);
        result(err, null);
      } else {
        console.log("Admin status set successfully");
        result(null, res);
      }
    }
  );
};

// Add this function
Account.checkWorkerStatus = (userID, result) => {
  dbConn.query(
    "SELECT isWorker FROM accounts WHERE userID = ?",
    userID,
    (err, res) => {
      if (err) {
        console.error("error: ", err);
        result(err, null);
      } else {
        console.log("Worker status retrieved successfully");
        result(null, res);
      }
    }
  );
};

Account.updateProfile = (id, account, result) => {
  dbConn.query(
      "UPDATE accounts SET email = ?, phoneNumber = ?, birthday = ?, region = ?, city = ?, barangay = ?, zipCode = ?, fbLink = ?, instaLink = ?, pfp = ? WHERE userID = ?",
      [
          account.email,
          account.phoneNumber,
          account.birthday,
          account.region,
          account.city,
          account.barangay,
          account.zipCode,
          account.fbLink,
          account.instaLink,
          account.pfp,
          id,
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
module.exports = Account;

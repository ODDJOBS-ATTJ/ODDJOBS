"use strict";
const Account = require("../models/oddjobs.model");

exports.checkLoggedIn = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json({ status: 401, message: "Unauthorized" });
  }
  next();
};

// Route to find all accounts (protected)
exports.findAll = [
  exports.checkLoggedIn,
  (req, res) => {
    Account.findAll((err, account) => {
      if (err) {
        res.send(err);
      }
      res.send({ status: 200, data: account });
    });
  },
];

exports.findById = (req, res) => {
  Account.findById(req.params.id, (err, account) => {
    if (err) {
      res.send(err);
    }
    res.json({ status: 200, data: account });
  });
};

exports.create = (req, res) => {
  const newAccount = new Account(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all the required fields" });
  } else {
    Account.create(newAccount, (err, account) => {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        status: 200,
        message: "Account submitted",
        data: account,
      });
    });
  }
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res
      .status(400)
      .json({ status: 400, message: "Email and password are required" });
  }

  // Find the account by email
  Account.findByEmail(email, (err, account) => {
    if (err) {
      return res
        .status(500)
        .json({ status: 500, message: "Internal server error" });
    }

    // Check if the account exists
    if (!account) {
      return res
        .status(401)
        .json({ status: 401, message: "Invalid credentials" });
    }

    // Check if the provided password matches the stored password
    if (password !== account.password) {
      return res
        .status(401)
        .json({ status: 401, message: "Invalid credentials" });
    }

    // Check if the account is verified
    if (!account.isVerified) {
      console.log("Account is not yet verified");
      return res
        .status(401)
        .json({ status: 401, message: "Account is not yet verified" });
    }

    // Login successful
    req.session.user = account;

    // Send the user ID (or any identifier you want) to the client
    res.json({
      status: 200,
      message: "Login successful",
      userID: account.userID,
    });
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all the required field" });
  } else {
    Account.update(req.params.id, new Account(req.body), (err, account) => {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        status: 200,
        message: "Account updated accordingly",
        data: account,
      });
    });
  }
};

exports.delete = (req, res) => {
  Account.delete(req.params.id, (err, account) => {
    if (err) {
      res.send(err);
    }
    res.json({ error: false, message: "Employee deleted!", status: 200 });
  });
};

exports.findUserID = (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Call the model function to find userID by email
  Account.findUserIDByEmail(email, (err, userID) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }

    if (!userID) {
      return res
        .status(404)
        .json({ message: "User not found with the provided email" });
    }

    res.status(200).json({ userID: userID });
  });
};

exports.logout = (req, res) => {
  // Clear the session on the server
  req.session.destroy((err) => {
    if (err) {
      console.error("Error during logout:", err);
      return res
        .status(500)
        .json({ status: 500, message: "Internal server error" });
    }

    // Send a response indicating successful logout
    res.json({ status: 200, message: "Logout successful" });
  });
};

exports.updateVerificationID = (req, res) => {
    const { userID, verificationID } = req.body;
  
    if (!userID || !verificationID) {
      return res.status(400).json({ message: "userID and verificationID are required" });
    }
  
    Account.updateVerificationID(userID, verificationID, (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error" });
      }
  
      res.status(200).json({ message: "VerificationID updated successfully" });
    });
  };

  
  
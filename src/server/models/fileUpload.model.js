"use strict";
const dbConn = require('../config/db.config.js');

const FileUpload = function(file) {
    this.name = file.originalname;
    this.path = file.path;
};

FileUpload.create = (newFiles, result) => {
    dbConn.query("INSERT INTO files SET ?", newFiles, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log("created files: ", { id: res.insertId, ...newFiles });
            result(null, { id: res.insertId, ...newFiles });
        }
    });
};

module.exports = FileUpload;
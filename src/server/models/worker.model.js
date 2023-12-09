"use strict";
const dbConn = require("../config/db.config.js");

function Worker(worker) {
    this.workerID = worker.workerID;
    this.userID = worker.userID;
    this.document1 = worker.document1;
    this.document2 = worker.document2;
    this.document3 = worker.document3;
    this.avgRating = worker.avgRating;
    this.description = worker.description;
}

Worker.create = (newWorker, result) => {
    dbConn.query("INSERT INTO workers set ?", newWorker, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertID);
            result(null, res.insertID);
        }
    });
};

Worker.findById = (workerID, result) => {
    dbConn.query("SELECT * FROM workers WHERE workerID = ?", workerID, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Worker.findAll = (result) => {
    dbConn.query("SELECT * FROM workers", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log("Workers: ", res);
            result(null, res);
        }
    });
};

Worker.update = (id, worker, result) => {
    dbConn.query(
        "UPDATE workers SET document1 = ?, document2 = ?, document3 = ?, avgRating = ?, description = ? WHERE workerID = ?",
        [worker.document1, worker.document2, worker.document3, worker.avgRating, worker.description, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                console.log("Updated worker: ", res);
                result(null, res);
            }
        }
    );
};

Worker.delete = (id, result) => {
    dbConn.query("DELETE FROM workers WHERE workerID = ?", [id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log("Deleted worker: ", res);
            result(null, res);
        }
    });
};

Worker.updateDocuments = (userID, files, result) => {
    const documentPaths = files.map(file => file.path);

    dbConn.query(
        "INSERT INTO workers (userID, document1, document2, document3) VALUES (?, ?, ?, ?)",
        [userID, ...documentPaths],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log("Inserted worker: ", res);
                result(null, res);
            }
        }
    );
};

module.exports = Worker;
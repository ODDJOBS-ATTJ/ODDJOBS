'use strict';
const mysql = require('mysql');
// import mysql from 'mysql';

const dbConn = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '',
    database    : 'oddjobs',
});

dbConn.connect((err) => {
    if (err) throw err;
    console.log("Database connected!");
});

module.exports = dbConn;
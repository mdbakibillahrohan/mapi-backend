/**
 * Author: Md. Bakibillah Rohan
 * Title: Database Configuration
 * Description: All Database Configuration Code are here
 * File Path: src/config/db.js
 */

// Dependencies
const mysql = require('mysql');


// scaffolding 
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect();
db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

db.end()

// exporting the module 
module.exports = db;
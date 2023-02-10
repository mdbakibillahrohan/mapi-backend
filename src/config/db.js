/**
 * Author: Md. Bakibillah Rohan
 * Title: Database Configuration
 * Description: All Database Configuration Code are here
 * File Path: src/config/db.js
 */

// Dependencies
import mysql from 'mysql';
// scaffolding 
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

export default db;
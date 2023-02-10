/**
 * Version: 1.0
 * App Name: Magura Polytechnic Institute
 * File Name: server.js
 * Description: This is the entry point of this application.
 * Author: Md Bakibillah Rohan
 * File Path: src/server.js
 */

// Dependencies section
import dotenv from './config/env.js';
import express from 'express';
import db from './config/db.js';
import AppRouter from './routes/routes.js';
import Constant from './util/constant.js';


// App Scaffolding
const app = express();
app.use(AppRouter)

// database initialization 
db.connect();
db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log("Database Connected");
});

db.end() 
app.listen(Constant.APP_PORT);

console.warn(`App Running on http://localhost:${Constant.APP_PORT}`);

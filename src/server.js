/**
 * Version: 1.0
 * App Name: Magura Polytechnic Institute
 * File Name: server.js
 * Description: This is the entry point of this application.
 * Author: Md Bakibillah Rohan
 * File Path: src/server.js
 */

// Dependencies section
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import db from './config/db.js';
import AppRouter from './routes/routes.js';
import Constant from './util/constant.js';
console.log(process.env.DB_HOST)



// App Scaffolding
const app = express();
app.use(AppRouter)

// database initialization 
// db.connect();
// db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });

// db.end()
// Listing the routes 
// console.log("Method   Path");
// expressListRoutes(app, { spacer: 7, prefix:'/' });


// Listening the application on port 
app.listen(Constant.APP_PORT);
console.warn(`App Running on http://localhost:${Constant.APP_PORT}`);

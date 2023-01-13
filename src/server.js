/**
 * Version: 1.0
 * App Name: Magura Polytechnic Institute
 * File Name: server.js
 * Description: This is the entry point of this application.
 * Author: Md Bakibillah Rohan
 * File Path: src/server.js
 */

// Dependencies section
require('dotenv').config();
const express = require('express');
const constant = require('./util/constant');
const expressListRoutes = require('express-list-routes');
// const db = require('./config/db');


// App Scaffolding
const app = express();
app.get(`${constant.url_prefix}/`, (req, res) => {
    res.json({
        "code":200,
        "messages":"Successfully Get"
    });
});
app.get(`${constant.url_prefix}/app`, (req, res) => {
    res.send('Hello world');
});


// Listing the routes 
console.log("Method   Path");
expressListRoutes(app, { spacer: 7, prefix:'/' });


// Listening the application on port 
app.listen(constant.app_port);
console.warn(`App Running on http://localhost:${constant.app_port}`);

// 1. maybe the file be named as index.js
// 2. nodemon - to dynamically change the content as per we write & save code
// 3. add any sensitive codes in env file
// import "express";

require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get("/", (req,res) => {
    res.send("hellohgkjjhvj !")
})

/* Midleware (middleware acts as middleman between user and server)
    res -> request
    req -> response
    next -> Pointer
*/

app.use((req, res, next) => {
    console.log("path is " + req.path + "methode is " + req.method);
    next(); //next should be called to goto next endpoint else response will get stucked in middleware
})

app.listen(port, () => {
    console.log('Application is loading on port ' + port + '!...')
})
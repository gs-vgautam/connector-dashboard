'use strict';

var express = require('express');
var router = express.Router();

function routes (app) {
    router.use(function timeLog (req, res, next) {
        console.log('Request received at: ', Date.now());
        next();
    });

    router.get('/', function (req, res) {
        res.send("Hello, Welcome to Connector Dashboard\n");
    });

    // configure routes on middleware
    app.use("/", router);
}

module.exports = routes;
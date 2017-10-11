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

    router.get('/s3/:key', function (req, res) {
        var callback = function (err, data) {
            if (err) {
                console.error(err);
                res.send("Unable to find");
            }
            res.send(data);
        }

        require('../utils/aws-s3')(req.params.key, callback);

    });

    // configure routes on middleware
    app.use("/", router);
}

module.exports = routes;
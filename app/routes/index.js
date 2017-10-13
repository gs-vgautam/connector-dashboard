'use strict';

var express = require('express');
var router = express.Router();

function routes (app) {
    router.use(function timeLog (req, res, next) {
        console.log('Request received at: ', Date.now());
        next();
    });

    router.get('/', function (req, res) {
        res.render('index', {data : "Hello, Welcome to Connector Dashboard" });
    });

    router.get('/s3/:key', function (req, res) {
        var callback = function (err, data) {
            if (err) {
                console.error(err);
                res.render('index', { data : "Unable to find" });
            }
            res.render('index', { data : JSON.stringify(data, null, 4)});
        }

        require('../utils/aws-s3')(req.params.key, callback);

    });

    router.get('/amqp', function (req, res) {
        require('../utils/rabbitmq').queues(function (err, res1, data) {
           if (err)
               res.render('index', { data : "No stats fetched" });
           res.render('index', { data : JSON.stringify(data, null, 4) });
        });
    });

    // configure routes on middleware
    app.use("/", router);
}

module.exports = routes;
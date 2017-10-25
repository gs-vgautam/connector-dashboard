'use strict';

var express = require('express');
var router = express.Router();
var urls = require('./urls');
var controllers = require('../controllers');

function routes (app) {
    router.use(function timeLog (req, res, next) {
        console.log('Request received at: ', Date.now());
        next();
    });

    router.get('/', function (req, res) {
        res.render('index', {data : "Hello, Welcome to Connector Dashboard" });
    });

    router.get(urls.ping, controllers.ping);

    router.get(urls.awsS3byTenant, controllers.s3Bucket.countOfObjects);

    router.get(urls.stats, controllers.queues.allQueueStats);

    router.get(urls.connectionrepo, controllers.mongo.allConnections);

    router.get(urls.jobinfo, controllers.mongo.allJobs);


    // configure routes on middleware
    app.use("/", router);
}

module.exports = routes;
'use strict';

var express = require("express");

function setup (environment) {
    var app = express();

    // configure routes
    require('./app/routes/index')(app);

    return app;
}

module.exports = setup;
#!/usr/bin/env node
'use strict';

require('../config').boot(process.env);
var http = require('http');

var app = require('../app')(process.env);
var port = +process.argv[2] || 3000;

// Start HTTP Server

http.createServer(app).listen(port, function () {
   console.log("APP LIVE AT PORT " + port);
});
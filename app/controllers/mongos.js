'use strict';

var mdw = require('../utils');
var mongo = mdw.mongodb;

function allConnections (req, res) {
    mongo(function (db) {
        db.collection('connectionrepo').find({'deleted' : false}).toArray(function (err, data) {
            res.render('index', { data : JSON.stringify(data, null, 4) });
        });
    });
}

function allJobs(req, res) {
    mongo(function (db) {
       db.collection('jobinfo').find({'deleted' : false}).toArray(function (err, data) {
          res.render('index', { data : JSON.stringify(data, null, 4) });
       });
    });
}

module.exports = {
    allConnections : allConnections,
    allJobs : allJobs
};
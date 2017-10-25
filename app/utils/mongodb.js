'use strict';

var config = require('../../config');
var mongoClient = require('mongodb').MongoClient;
var params = 'mongodb://'+ config.mongodb.user + ':' + config.mongodb.pass + '@' + config.mongodb.host + ':' + config.mongodb.port + '/' + config.mongodb.db + '?connectTimeoutMS=1000';
var db = null;

module.exports = function (callback) {
    if (db) {
        callback(db);
        return;
    }

    mongoClient.connect(params, function (err, connection) {
        if (err) {
            console.error(err.message);
            throw new Error(err);
        } else {
            db = connection;
            callback(db);
        }
    })
};
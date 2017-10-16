'use strict';

var config = require('../../config');

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var params = 'mongodb://'+ config.mongodb.user + ':' + config.mongodb.pass + '@' + config.mongodb.host + ':' + config.mongodb.port + '/' + config.mongodb.db + '?connectTimeoutMS=1000';

MongoClient.connect(params, function(err, db) {
    assert.equal(null, err);
    db.collection('connectionrepo').find({'deleted': false}).toArray(myAllConnetcions);
    db.close();
});


var myAllConnetcions = function(err, connections) {
        assert.equal(null, err);
        console.log(connections);
    };

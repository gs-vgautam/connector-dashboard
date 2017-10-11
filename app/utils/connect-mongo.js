'use strict';
var readProperties = require('../../config/read-properties');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var mongoURL = 'mongodb://'+ readProperties.mongoProp().mongoUsername + ':' + readProperties.mongoProp().mongoPass+ '@' + readProperties.mongoProp().mongoHost + ':' + readProperties.mongoProp().mongoPort + '/' + readProperties.mongoProp().mongoDB  + '?connectTimeoutMS=1000';

console.log(mongoURL);

MongoClient.connect(mongoURL, function(err, db) {
    assert.equal(null, err);
    db.collection('connectionrepo').find({'deleted': false}).toArray(myAllConnetcions);
    db.close();
});


var myAllConnetcions = function(err, connections) {
        assert.equal(null, err);
        console.log(connections);
    };

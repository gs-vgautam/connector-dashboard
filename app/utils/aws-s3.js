'use strict';

var AWS = require('aws-sdk');
var config = require('../../config');

var region = config.aws_s3.region;
var bucket = config.aws_s3.bucket;

AWS.config.update({
    region : region
});

var s3 = new AWS.S3({apiVersion: '2006-03-01'});

function countOfObjects(key, callback) {

    var params = {
        Bucket : bucket,
        Delimiter: '/',
        Prefix : 'UC/' + key
    };

    s3.listObjects(params, callback);

}

module.exports = countOfObjects;
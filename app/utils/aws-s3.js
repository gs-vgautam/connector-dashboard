'use strict';

var AWS = require('aws-sdk');
var config = require('../../config');

// AWS will automatically be loaded using credentials from
// following environment variables
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Other information are available through following ones
// - AWS_S3_REGION
// - AWS_S3_BUCKET

var region = config.AWS_S3_REGION;
var bucket = config.AWS_S3_BUCKET;

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
'use strict';

module.exports = {
    postgres : require('./postgres'),
    rabbitmq : require('./rabbitmq'),
    s3 : require('./aws-s3'),
    mongodb : require('./mongodb')
};
'use strict';

var PropertiesReader = require('properties-reader');
var properties = PropertiesReader(__dirname + '/../dev.conf');
var config = {};

function boot(env) {

    config.env = env.APP_ENV || 'DEV';


    // AWS S3
    // config.AWS_ACCESS_KEY_ID=process.env.AWS_S3_BUCKET;
    // config.AWS_SECRET_ACCESS_KEY=process.env.AWS_S3_BUCKET;
    config.aws_s3 = {
        region : process.env.AWS_S3_REGION,
        bucket : process.env.AWS_S3_BUCKET,
    };

    // PostgreSQL
    config.postgres = {
        host : properties.get('postgres.dev.host'),
        port : properties.get('postgres.dev.port'),
        user : properties.get('postgres.dev.username'),
        db   : properties.get('postgres.dev.database'),
        pass : properties.get('postgres.dev.password')
    };

    // MongoDB
    config.mongodb = {
        host : properties.get('mongo.global.host'),
        port : properties.get('mongo.global.port'),
        user : properties.get('mongo.global.username'),
        db   : properties.get('mongo.global.db'),
        pass : properties.get('mongo.global.password'),
        ssl  : properties.get('mongo.global.ssl.enable')
    };

    // RabbitMQ
    config.rabbitmq = {
        host : properties.get('rabbitmq.dev.host'),
        user : properties.get('rabbitmq.dev.username'),
        pass : properties.get('rabbitmq.dev.password'),
        proto: properties.get('rabbitmq.dev.protocol'),
        vhost: properties.get('rabbitmq.dev.vhost')
    };

}

module.exports = config;
module.exports.boot = boot;
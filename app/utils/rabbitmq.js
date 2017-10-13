'use strict';

var AMQPStats = require('amqp-stats');
var config = require('../../config');

var params = {
    username: config.rabbitmq.user,
    hostname: config.rabbitmq.host,
    password: config.rabbitmq.pass,
    protocol: config.rabbitmq.proto
};

var stats = new AMQPStats(params);

module.exports = stats;
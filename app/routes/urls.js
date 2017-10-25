'use strict';

var urltree = require('urltree');

var endpoints = urltree({

    // ping
    'ping' : '/ping',

    // aws s3
    'awsS3byTenant' : '/s3/:key',

    // postgres
    'pg' : '/pg',
    'pgNow' : '/now',
    'snsByTenantId' : '/sns/:tenantId',

    // rabbitmq
    'stats' : '/amqp',

    // mongodb
    'connectionrepo' : '/connections',
    'jobinfo' : '/jobs'


});

module.exports = endpoints;
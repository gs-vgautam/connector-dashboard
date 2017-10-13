'use strict';

const { Pool, Client } = require('pg');
var config = require('../../config');

var params = {
    user: config.postgres.user,
    host: config.postgres.host,
    database: config.postgres.db,
    password: config.postgres.pass,
    port: config.postgres.port
};

const db = new Pool(params);

module.exports = db;
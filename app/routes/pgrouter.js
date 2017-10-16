'use strict';

var Router = require('express-promise-router');
var router = new Router();
var urls = require('./urls');
var db = require('../utils/postgres');

function routes (app) {

    router.get(urls.pgNow.toString(), async (req, res) => {
        res.render('index', {data: JSON.stringify(await db.query('SELECT NOW()'), null, 4)});
    });

    router.get(urls.snsByTenantId.toString(), async (req, res) => {
        res.render('index', {data : JSON.stringify(await db.query('SELECT * FROM PNPSNSNOTIFICATION WHERE TENANT_ID = \'' + req.params.tenantId + '\''), null, 4)});
    });

    // configure routes on middleware
    app.use(urls.pg, router);

}

module.exports = routes;
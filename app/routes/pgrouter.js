'use strict';

var Router = require('express-promise-router');
var router = new Router();
var db = require('../utils/postgres');

function routes (app) {

    router.get('/now', async (req, res) => {
        res.render('index', {data: JSON.stringify(await db.query('SELECT NOW()'), null, 4)});
    });

    // configure routes on middleware
    app.use("/pg", router);

}

module.exports = routes;
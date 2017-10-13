'use strict';

var Router = require('express-promise-router');
var router = new Router();
var db = require('../utils/postgres');

function routes (app) {

    router.get('/now', async (req, res) => {
        res.render('index', {data: JSON.stringify(await db.query('SELECT NOW()'))});
    });

    // configure routes on middleware
    app.use("/pg", router);

}

module.exports = routes;

// const now = async () => {
//     console.log(await pool.query('SELECT NOW()'));
//     await pool.end();
//     return "My date";
// };
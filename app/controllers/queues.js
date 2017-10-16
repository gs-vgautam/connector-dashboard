'use strict';

var mdw = require('../utils');

function allQueueStats(req, res) {
    mdw.rabbitmq.queues(function (err, res1, data) {
        if (err)
            res.render('index', { data : "No stats fetched" });
        res.render('index', { data : JSON.stringify(data, null, 4) });
    });
}

module.exports = {
    allQueueStats : allQueueStats
};
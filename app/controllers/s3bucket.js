'use strict';

var mdw = require('../utils');

function countOfObjects (req, res) {
    var callback = function (err, data) {
        if (err) {
            console.error(err);
            res.render('index', { data : "Unable to find" });
        }
        res.render('index', { data : JSON.stringify(data, null, 4)});
    }

    _countOfObjects(req.params.key, callback);

}


function _countOfObjects(key, callback) {

    var params = {
        Bucket : mdw.s3.bucket,
        Delimiter: '/',
        Prefix : 'UC/' + key
    };

    mdw.s3.listObjects(params, callback);

}

module.exports = {
    countOfObjects : countOfObjects
};
'use strict';

function ping(req, res) {
    res.status(200).json({status : 'Online', message : 'Hey there, I\'m right here'});
}

module.exports = ping;
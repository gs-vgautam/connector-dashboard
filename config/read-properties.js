'use strict';

var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('/tmp/propertiesDir/propertyFile');

var host = properties.get('mongo.global.host');
var port = properties.get('mongo.global.port');
var db = properties.get('mongo.global.db');
var username = properties.get('mongo.global.username');
var password = properties.get('mongo.global.password');
var ssl = properties.get('mongo.global.ssl.enable');

var mongoProperties = {
    mongoHost : host,
    mongoDB : db,
    mongoPort : port,
    mongoUsername : username,
    mongoPass : password,
    mongossl : ssl

}

exports.mongoProp = function(){
    return mongoProperties;
}

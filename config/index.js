'use strict';

var config = {};

function boot(env) {

    config.env = env.APP_ENV || 'DEV';

    // AWS S3
    // config.AWS_ACCESS_KEY_ID=process.env.AWS_S3_BUCKET;
    // config.AWS_SECRET_ACCESS_KEY=process.env.AWS_S3_BUCKET;
    config.AWS_S3_REGION=process.env.AWS_S3_REGION;
    config.AWS_S3_BUCKET=process.env.AWS_S3_BUCKET;

}

module.exports = config;
module.exports.boot = boot;
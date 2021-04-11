const serverless = require('serverless-http');
const router = require('./router');

module.exports.handler = serverless(router);
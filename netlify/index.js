const serverless = require('serverless-http')

module.exports.handler = serverless(require('./remix/server'))

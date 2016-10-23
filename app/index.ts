'use strict'

/**
 * Configure environmental variables
 */
require('dotenv').config({silent: true, path: '../.secrets'})

/**
 * Configure credentials for Dynasty
 */
// var credentials = {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// }

/**
 * Setting up Modules
 */
var _ = require('lodash'),
    promise = require('bluebird'),
    winston  = require('winston')

    // dynasty = require('dynasty')(credentials),
    // updates = dynasty.table('tracky-openshift'),
    // request = promise.promisifyAll(require('request'))

/**
 * Configure logging
 */
require('winston-loggly')
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({ level: 'debug' }),
    new (winston.transports.File)({ filename: '../.logs/app.log', level: 'info' })
  ]
})

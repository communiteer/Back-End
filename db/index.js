const bluebird = require('bluebird');
const pgp = require('pg-promise')({ promiseLib: bluebird });
const config = require('../config');

module.exports = pgp(config.db);
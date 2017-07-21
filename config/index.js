const env = process.env.NODE_ENV || 'development';
const config = require(`./environment/${env}`);

module.exports = config; 
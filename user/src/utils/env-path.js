const env = require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? ".env.test" : '.env'
});

module.exports = env

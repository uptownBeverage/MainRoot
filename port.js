const argv = require('./argv');

module.exports = parseInt(argv.post || process.env.PORT || '5000', 0);
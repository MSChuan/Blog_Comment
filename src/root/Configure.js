if (process.env.NODE_ENV === 'production') {
    module.exports = require('./Configure.prod');
} else {
    module.exports = require('./Configure.dev');
}

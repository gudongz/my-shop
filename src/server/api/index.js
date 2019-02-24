
module.exports = function(app) {
    app.use('/shop', require('./testApi'))
    app.use('/app', require('./app'))
}

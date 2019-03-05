
module.exports = function(app) {
    app.use('/test', require('./testApi'))
    app.use('/app', require('./app'))
    app.use('/admin', require('./admin'))
}

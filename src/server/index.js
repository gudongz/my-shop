const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let routes = require('./api/index')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ expanded: false }))

routes(app)

let server = app.listen(3000, function() {
    let host = server.address().address
    let port = server.address().port
    console.log('success listen', host, port)
})

var express = require('express')
var app = express()

var port = process.env.PORT || 1337;

app.get('/webhook_url', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("venmo_challenge");
})
app.post('/', function(req,res) {

})

var server = app.listen(port, function () {


})//

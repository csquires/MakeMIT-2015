var express = require('express')
var app = express()

var port = process.env.PORT || 1337;

var log = "";

app.get('/webhook_url', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(req.query.venmo_challenge);
})
app.post('/', function(req,res) {

})

app.get('/test', function(req, res) {
    log += req.query.val + "\n";
    res.end("Hello world");
}

app.get('/log', function(req, res) {
    res.end(log);
};

var server = app.listen(port, function () {


})//

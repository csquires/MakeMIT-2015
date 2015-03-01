var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
var port = process.env.PORT || 1337;

var log = "";

app.get('/webhook_url', function (req, res) {
    try{
	log += "Get: ";
    } catch (e){}
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(req.query.venmo_challenge);
});

app.post('/webhook_url', function (req, res) {
    try{
	log += "Post: ";
	log += req.body.data.note + "\n";
    } catch (e){}
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(req.query.venmo_challenge);
});


app.get('/', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello world");
});
    

app.get('/test', function(req, res) {
    log += req.query.val + "\n";
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello world");
});

app.get('/log', function(req, res) {
    res.end(log);
});

app.get('/arduino', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("01,02\n");
});

var server = app.listen(port, function () { });

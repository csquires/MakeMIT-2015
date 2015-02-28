
/*
var http = require('http')
var port = process.env.PORT || 1337;

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("HI world/n");
}).listen(port);

*/




var express = require('express')
var app = express()

var port = process.env.PORT || 1337;

app.get('/', function (req, res) {
	 res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("venmo_challenge");
})
app.post('/', function(req,res) {

})

var server = app.listen(port, function () {


})

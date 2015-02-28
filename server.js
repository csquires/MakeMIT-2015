var express = require('express')
var app = express()

var port = process.env.PORT || 1337;

app.get('/', function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
  	//res.send(req.get("venmo_challenge"));
	//res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.send('Hello World');
	res.end();
})
app.post('/', function(req,res) {

})

var server = app.listen(port, function () {


})
var express = require('express')
var app = express()

app.get('/', function (req, res) {
//res.writeHead(200, { 'Content-Type': 'text/plain' });
//res.write('venmo_challenge');
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello World\n')
})
app.post('/', function(req,res) {

})

var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})//
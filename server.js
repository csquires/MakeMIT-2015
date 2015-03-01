var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
 


var port = process.env.PORT || 1337;

var log = "";

var Spacebrew = require('spacebrew');
var server = "sandbox.spacebrew.cc";
var name = "Table3rd";
var description = "MakeMIT Project Table3rd";
var sb = new Spacebrew.Client( server, name, description ); 

sb.addPublish("Table 3rd Orders", "string", "0,0");
sb.addSubscribe("Table 3rd Orders", "string");
sb.onStringMessage = function onStringMessage( name, value ){
    if(name=="Table 3rd ORders") {
        console.log("Message from server: "+value);
    }
}

sb.connect();

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
	var newstring = "$" + float(req.body.data.amount).toFixed(2) + " paid for " + 
	    req.body.data.note.substring(0,
    req.body.data.note.search("to") - 1) + " to be delivered to " +
    req.body.data.note.substring(req.body.data.note.search("to") + 3);
	log += newstring;
/*	newstring = newstring.substring(
	    newstring.search("chair ") + 6,
	    newstring.search("chair ") + 7);
*/	sb.send("Table 3rd Orders", "string", newstring); 
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
    try{
	sb.send("Table 3rd Orders", "string", req.query.val); 
    } catch (e){}

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(req.query.val);
});

app.get('/log', function(req, res) {
    res.end(log);
});

app.get('/arduino', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("01,02\n");
});

var server = app.listen(port, function () { });

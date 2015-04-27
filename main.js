var express = require('express')
var app = express();
var http = require ('http');
var mongoose = require ("mongoose");
var bodyParser = require ("body-parser");

// Disable etag headers on responses
app.disable('etag');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

//MONGOOSE CONNECTION START
var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://humiliation:abicat817@ds061298.mongolab.com:61298/heroku_app36173787';

var theport = process.env.PORT || 5000;

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err.message);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
//MONGOOSE CONNECTION END

//EXPRESS ROUTES START
app.set('port', (process.env.PORT || 5000));

//ROUTES
require('./app/routes')(app); // configure our routes

//EXPRESS ROUTES END

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})



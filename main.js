var express = require('express')
var app = express();
var http = require ('http');
var mongoose = require ("mongoose");

// Disable etag headers on responses
app.disable('etag');

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

//MONGOOSE CONNECTION START
var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
' mongodb://<dbuser>:<dbpassword>@ds037617.mongolab.com:37617/heroku_app36147927';

var theport = process.env.PORT || 5000;

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});
//MONGOOSE CONNECTION END

//EXPRESS ROUTES START
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

//ROUTES
require('./app/routes')(app); // configure our routes


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
//EXPRESS ROUTES END


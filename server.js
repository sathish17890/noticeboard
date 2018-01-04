//require('newrelic');

var express = require('./config/express');
var mongoose = require ('./config/mongoose');


var db = mongoose ();
var app = express (db);

var port = process.env.PORT || 3000

app.listen(port);
console.log('Listening on local host ', port);

module.exports  = app;


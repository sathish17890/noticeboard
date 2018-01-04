var express = require('express');
var cookieSession = require ('cookie-session');
var bodyParser = require('body-parser');
var path = require('path');
var flash = require('connect-flash');
var http = require('http');
var session = require('express-session');
var device = require('express-device');
var MongoStore = require('connect-mongo')(session);
var mongoose = require ('mongoose');


module.exports = function (db) {
	var app = express();
	var server = http.createServer(app);
	app.use(bodyParser.json ());
	app.use(bodyParser.urlencoded({extended: true}));
	
	var mongoStore = new MongoStore ({
		mongooseConnection: mongoose.connection,
		db: db.connection
	});
	app.use(express.static(path.join(__dirname, '../client')));

	app.use(flash());
	app.enable('trust proxy');
	app.use(device.capture());
	app.set ('views' , './application/views');
	app.set ('view engine', 'ejs');

	require('../application/routes/index.server.routes.js')(app);
	return server;
};

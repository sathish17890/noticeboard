module.exports = function (app) {

	var index = require('../controller/index.server.controller');

	// 1
	app.get('/', index.renderLandingPage); 
};
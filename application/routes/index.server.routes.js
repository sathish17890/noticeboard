module.exports = function (app) {

	var index = require('../controller/index.server.controller');

	// 1
	app.get('/', index.renderLandingPage); 
	//2
	app.get('/api/getMessages', index.getMessages);
	//3
	app.post('/api/postMessage', index.postMessage);
};
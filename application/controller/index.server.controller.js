var MessageModel 		= require('mongoose').model('messagedetails');
exports.renderLandingPage = function (req, res) {
	res.render ('index');
};
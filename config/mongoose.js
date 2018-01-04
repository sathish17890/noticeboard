var mongoose = require ('mongoose');

module.exports = function () {
	var db = mongoose.connect("mongodb://sathishadmin2:Psp17890@ds237707.mlab.com:37707/blackboard_liftoff", function(err){
		if(err) {
			console.log('unable to connect to mongodb', err);
		}
		else{
			console.log("==mlab connected succcessfully==")
		}
	});

	require('../application/models/message.server.model');

	return db;
};

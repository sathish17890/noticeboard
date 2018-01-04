var MessageModel 		= require('mongoose').model('messagedetails');

exports.renderLandingPage = function (req, res) {
	res.render ('index');
};

exports.getMessages = function(req, res){
	MessageModel.find({})
	.limit(100)
	.sort({'date':-1})
	.exec(function(err, arrMsg){
		if(err){
			res.json({success:false});
		}
		else{
			var arrToReverse = [];
			for (var i =arrMsg.length-1; i >= 0;i--){
				arrToReverse.push(arrMsg[i]);
			}
			res.json({success:true,  messages :arrToReverse});
		}
	});
}

exports.postMessage = function(req, res){
	var message = req.body.message;
	var messageDoc = new MessageModel({"message":message});
	messageDoc.save(function(err, result){
		if(err){
			console.log("Error Occ postMessage --->", err);
			res.json({success:false})
		}
		else{
			res.json({success:true})
		}
	})
}
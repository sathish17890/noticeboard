angular.module('adminModule')
	.controller('HomeCtrl', ['$scope', '$log', 'homeService', '$state',
		function($scope, $log, homeService, $state){
			$scope.loadStatus = true;
			$scope.loadFailed = false;
			console.log("hello")
			function init (){
				homeService.getMessages().then(function(temp){
					if(temp.data.success){
						$scope.loadStatus = false;
						$scope.messages = temp.data.messages;
					}
					else{
						$scope.loadFailed = true;
					}
				})
			}
			init();

			$scope.send = function(message){
				var objMessage = {
					"message" : message
				}

				homeService.postMessage(objMessage).then(function(temp){
					if(temp.data.success){
						$scope.loadStatus = false;
						$scope.messages.push({"message":message});
						$scope.message = "";
					}
					else{
						$scope.loadFailed = true;
					}
				});
			}
		}
	]);
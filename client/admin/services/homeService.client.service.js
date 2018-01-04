angular.module('adminModule')
	.factory('homeService',  ['$http','$window',
		function($http, $window){
			var temp = {};

			temp.getMessages = function(){
				return $http.get('/api/getMessages').success(function(data){
					temp = data;
				});
			}
			temp.postMessage = function(objmessage){
				return $http.post('/api/postMessage', objmessage).success(function(data){
					temp = data;
				});
			}
			return temp;
		}
	])
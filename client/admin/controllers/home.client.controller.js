angular.module('adminModule')
	.controller('HomeCtrl', ['$scope', '$log', 'homeService', '$state',
		function($scope, $log, homeService, $state){
			$scope.loadStatus = true;
			console.log("hello")
		}
	]);
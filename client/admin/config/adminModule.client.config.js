
angular.module('adminModule', ['ui.bootstrap', 'ui.router', 'ngSanitize'])
	.config(['$stateProvider','$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider){

			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('application', {
					url: '',
					abstract: true,
				})

				.state ('home', {
					url: '/',
					templateUrl: '/admin/views/start.client.view.html',
					controller: 'HomeCtrl',
					resolve: {
						// setPageName: ['userService',function(userService){
						// 	userService.setPageName('userdetails');
						// }]
					}
				})
		}
	])
//)//gokul

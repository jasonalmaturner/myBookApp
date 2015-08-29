var app = angular.module('myBookApp', ['ngRoute', 'firebase', 'xml']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'js/home/homeTmpl.html',
			controller: 'homeCtrl',
			resolve: {
			}
		})
		.when('/login', {

		})
		.when('/search', {
			templateUrl: 'js/search/searchTmpl.html',
			controller: 'searchCtrl',
			resolve: {

			}
		})
		.otherwise({
			//redirectTo: '/'
		})
});

// app.config(function ($httpProvider) {
// 	$httpProvider.interceptors.push('xmlHttpInterceptor');
// })

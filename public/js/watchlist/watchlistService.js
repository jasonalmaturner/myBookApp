var app = angular.module('myBookApp');

app.service('watchlistService', function($http, $q) {

	this.getBook = function(isbn) {
		var dfd = $q.defer();

		$http({
			method: 'GET',
			url: '/api/goodreads/book?isbn=' + isbn
		})
		.then(function(res) {
			dfd.resolve(res.data);
		},
		function(err) {
			dfd.reject(err);
		})


	}
})
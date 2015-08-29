var app = angular.module('myBookApp');

app.controller('watchlistCtrl', function($scope, watchlistService) {
	$scope.watchlist = [];

	$scope.watchlist.push('0590353403');

	for (var i = 0; i < $scope.watchlist.length; i++) {
		//$scope.watchlist[i]
	};
});
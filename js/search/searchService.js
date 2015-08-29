var app = angular.module('myBookApp');

app.service('searchService', function($http, $q, x2js) {
	var key = 'AvRM2Oj3HaHd0lch5lWwQ';
	var secret = 'hdGhe4NC04S8vRTtaYj1D2T8zdZeUWxRjwMiuPsjHA';
	var param = "?key=" + key + "&secret=" + secret;

	function appendTransform(defaults, transform){
		console.log(defaults)
		defaults = angular.isArray(defaults) ? defaults : [defaults];
		return defaults.concat(transform);
	}
	this.searchBooks = function(searchEntry) {
		var dfd = $q.defer();

		console.log('searchService > this.searchbooks')


		$.ajax({
            type: 'GET',
            url: 'https://www.goodreads.com/search/index.xml' + param + '&q=' + searchEntry,
            dataType: 'jsonp xml',
            success: function(xmlResponse) {
            	console.log('$.ajax')
            }// process data }
        })

		// $http({
		// 	method: 'JSONP',
		// 	//url: 'http://swapi.co/api/'
		// 	url: 'https://www.goodreads.com/search/index.xml' + param + '&q=' + searchEntry + '&callback=JSON_CALLBACK',
		// 	transformResponse: [function(data){
		// 		console.log(data);
		// 		return JSON.stringify(data);
		// 	}]
		// }).then(function(res) {
		// 	console.log(res)
		// 	var json = x2js.xml2json(res);
		// 	console.log(json)
		// 	dfd.resolve(json);
		// });

		return dfd.promise;
	};
});
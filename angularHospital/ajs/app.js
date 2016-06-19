var rateHospitalApp = angular.module('rateHospital',['ngRoute']);

/*rateHospitalApp.config(function($routeProvider)){
	 $routeProvider.
	 		when('/',{
	 			controller : 'BaseController',
	 			templateUrl  : 'views/base.html'
	 		}).
	 		when('/hospitals',{
	 			controller:'HostpitalsController',
	 			templateUrl : 'views/hospitals.html'
	 		}).
	 		when('/review/:hospitalId',{
	 			controller : 'ReviewsController'
	 			templateUrl : 'views/reviews.html'
	 		});
});*/

rateHospitalApp.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl : 'views/base.html'
	}).when('/hospitals',{
		templateUrl : 'views/hospitals.html' ,
		controller : 'HostpitalsController'
	}).when('/reviewHospital/:hospitalId',{
		templateUrl : 'views/reviews.html',
		controller : 'ReviewController'
	}).otherwise({
		redirectTo:'/'
	});
});


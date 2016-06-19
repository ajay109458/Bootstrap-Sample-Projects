var mainApp = angular.module("mainApp", ['ngRoute']);
 
mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'StudentController'
        })
        .when('/viewStudents', {
            templateUrl: 'views/viewStudents.html',
            controller: 'StudentController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

mainApp.controller('StudentController',function function_name($scope, $http) {

    
     $http.get('http://localhost:8080/HospitalRatingRESTServer/apsyrestapi/hospital/GetHospitalByCity/Hyderabad').success( function(data){
            
     });
     
});
 

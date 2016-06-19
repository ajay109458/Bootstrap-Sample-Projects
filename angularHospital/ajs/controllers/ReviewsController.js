rateHospitalApp.controller('ReviewController',function($scope,$http,$routeParams){

	 var hospitalId = $routeParams.hospitalId;
	 $scope.hospitalId = hospitalId;
	 var reviewUrl = 'http://localhost:8080/HospitalRatingRESTServer/apsyrestapi/hospital/GetHospitalById/'+hospitalId;
	 $http.get(reviewUrl).success( function(data){
	 		$scope.hospital = data;

	 		$scope.hospital.reviews = [{
	 			rating:4,
	 			comment:"This is a very good hospital, I always refer this hospital",
	 			author:"ajay yadav"
	 		},{
	 			rating:3,
	 			comment:"This hospital is not very good for heart operations",
	 			author:"Mandeep"
	 		}];
	 });
	 
});
rateHospitalApp.controller('HostpitalsController',function($scope,$http){

	 var hospitalCollection = $scope;
	 $scope.appName = "ajayyadav app";
	 hospitalCollection.hospitals = [];


	 $http.get('http://localhost:8080/HospitalRatingRESTServer/apsyrestapi/hospital/GetHospitalByCity/Hyderabad').success( function(data){
	 		console.log("Got data");
	 		$scope.hospitals = data;
	 });
	 
	 

});
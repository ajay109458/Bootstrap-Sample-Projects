foodMeApp.factory('HospitalService', function($resource) {
  return $resource('/api/restaurant/:id', {id: '@id'});
});
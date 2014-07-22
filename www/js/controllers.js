angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('IncidentsCtrl', function($scope, Incidents) {
  $scope.incidents = Incidents.all();
})

.controller('IncidentDetailCtrl', function($scope, $stateParams, Incidents) {
  $scope.incidentType = Incidents.get($stateParams.incidentId);
  $scope.thisIncident = {parentCategory: {name: $scope.incidentType.name}};
  $scope.thisIncident.currentDate = new Date(); // sets default date/time to now
  $scope.thisIncident.date = new Date(); // sets default date/time to now
  $scope.thisIncident.location = {};
  $scope.thisIncident.location.text = "Use Current Location"; // sets default date/time to now
  $scope.thisIncident.location.lat = 32.070123; // sets default date/time to now
  $scope.thisIncident.location.lon = 34.793811; // sets default date/time to now


  $scope.submitReport = function(thisIncident) {
  	//should include {Incident ID, Date/Time Stamp, Comment, Parent Category {id, name}, Sub Category {id, name}, Incident Date }
  	Incidents.submitIncident(thisIncident);
  }
})

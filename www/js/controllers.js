angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('IncidentsCtrl', function($scope, Incidents) {
  $scope.incidents = Incidents.all();
})

.controller('IncidentDetailCtrl', function($scope, $stateParams, Incidents) {
  $scope.incidentType = Incidents.get($stateParams.incidentId);
  $scope.thisIncident = {};
  $scope.thisIncident.date = new Date();

  $scope.submitReport = function(thisIncident) {
  	console.log(thisIncident);
  	// Incidents.submitIncident(thisIncident);
  }
})

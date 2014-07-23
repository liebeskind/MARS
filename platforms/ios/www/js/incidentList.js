angular.module('incidentList.controllers', [])

.controller('IncidentListCtrl', function($scope, $location, $filter, IncidentList) {
  $scope.incidents = IncidentList.all();

  var fb = new Firebase('https://vivid-fire-3100.firebaseio.com/')
  
  // fb.on('value', function(data) {
  //   $scope.incidents = data.val();
  // });

})
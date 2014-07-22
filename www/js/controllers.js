angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('IncidentsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('IncidentDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
  $scope.thisIncident = {};
  $scope.thisIncident.date = new Date();

  $scope.submitReport = function(thisIncident) {
  	console.log(thisIncident);
  }
})

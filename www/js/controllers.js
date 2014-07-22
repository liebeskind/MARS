angular.module('starter.controllers', [])

.controller('IncidentsCtrl', function($scope, Incidents) {
  $scope.incidents = Incidents.all();
  $scope.showReport = true;

  console.log('HideCtrl');
  var tabs = document.querySelectorAll('div.tabs')[0];
  tabs = angular.element(tabs);
  tabs.css('display', 'none');
})

.controller('IncidentDetailCtrl', function($scope, $stateParams, Incidents) {
  $scope.incidentType = Incidents.get($stateParams.incidentId);
  $scope.thisIncident = {parentCategory: {name: $scope.incidentType.name, id: $scope.incidentType.id}, id: Math.random()};
  $scope.thisIncident.currentDate = new Date(); // sets default date/time to now
  $scope.thisIncident.date = new Date(); // sets default date/time to now
  $scope.thisIncident.location = {};
  $scope.thisIncident.location.text = "Use Current Location"; // sets default date/time to now
  $scope.thisIncident.location.lat = 32.070123; // sets default date/time to now
  $scope.thisIncident.location.lon = 34.793811; // sets default date/time to now

  $scope.refreshGrid = function (page) {
    $http({
        url: 'backend/incidentReporting',
        method: 'POST',
        params: {
            // page: page,
            // sortFields: $scope.sortInfo.fields[0],
            // sortDirections: $scope.sortInfo.directions[0]
        }
    }).success(function (data) {
        // $scope.persons = data;
    });
  };

  $scope.submitReport = function(thisIncident) {
  	//should include {Incident ID, Date/Time Stamp, Comment, Parent Category {id, name}, Sub Category {id, name}, Incident Date }
  	Incidents.submitIncident(thisIncident);
  }
})

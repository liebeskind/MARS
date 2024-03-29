angular.module('starter.controllers', [])

.controller('IncidentsCtrl', function($scope, Incidents, $location, $filter) {
  $scope.incidents = Incidents.all();
  $scope.showReport = true;

  $scope.goHome = function() {
    $location.path('/#')
  }

  var tabs = document.querySelectorAll('div.tabs')[0];
  tabs = angular.element(tabs);
  tabs.css('display', 'none');
})

.controller('IncidentDetailCtrl', function($scope, $stateParams, Incidents) {
  $scope.map = {zoom: 16};

  $scope.incidentType = Incidents.get($stateParams.incidentId);
  $scope.thisIncident = {parentCategory: {name: $scope.incidentType.name, id: $scope.incidentType.id}, id: Math.random()};
  $scope.thisIncident.currentDate = new Date(); // sets default date/time to now
  $scope.thisIncident.date = new Date(); // sets default date/time to now
  $scope.thisIncident.subcategory = $scope.incidentType.subcategories[0]
  $scope.thisIncident.location = {latitude: 32.070123, longitude: 34.79411};

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

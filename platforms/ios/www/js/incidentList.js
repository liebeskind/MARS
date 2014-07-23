angular.module('incidentList.controllers', [])

.controller('IncidentListCtrl', function($scope, $location, $filter, $stateParams, IncidentList) {
  $scope.incidents = IncidentList.all();
  console.log($scope.incident);

  var fb = new Firebase('https://vivid-fire-3100.firebaseio.com/')

  // $scope.batmanClass = 'inactiveImage'
  // $scope.medicalClass = 'inactiveImage'
  // $scope.fireClass = 'inactiveImage'
  // $scope.crimeClass = 'inactiveImage'


  // $scope.clicked = function(imageType) {
  //   switch(imageType) {
  //     case 'batman':
  //         $batmanClass = ($scope.batmanClass === 'inactiveImage') ? 'activeImage' : 'inactiveImage';
  //         break;
  //     case 'medical':
  //         ($scope.medicalClass === 'inactiveImage') ? $medicalClass = 'activeImage' : $medicalClass = 'inactiveImage';
  //         break;
  //     case 'fire':
  //         ($scope.fireClass === 'inactiveImage') ? $fireClass = 'activeImage' : $fireClass = 'inactiveImage';
  //         break;
  //     case 'crime':
  //         ($scope.crimeClass === 'inactiveImage') ? $crimeClass = 'activeImage' : $crimeClass = 'inactiveImage';
  //         break;
  //     default:
  //         console.log('something wrong');
  //   }
  // }
})

.controller('IncidentListDetailCtrl', function($scope, $location, $stateParams, $filter, IncidentList) {
  console.log($stateParams);
  $scope.incident = IncidentList.get($stateParams);

  $scope.showDetails = function(incident) {
    console.log(incident);
  }

  // $scope.batmanClass = 'inactiveImage'
  // $scope.medicalClass = 'inactiveImage'
  // $scope.fireClass = 'inactiveImage'
  // $scope.crimeClass = 'inactiveImage'


  // $scope.clicked = function(imageType) {
  //   switch(imageType) {
  //     case 'batman':
  //         $batmanClass = ($scope.batmanClass === 'inactiveImage') ? 'activeImage' : 'inactiveImage';
  //         break;
  //     case 'medical':
  //         ($scope.medicalClass === 'inactiveImage') ? $medicalClass = 'activeImage' : $medicalClass = 'inactiveImage';
  //         break;
  //     case 'fire':
  //         ($scope.fireClass === 'inactiveImage') ? $fireClass = 'activeImage' : $fireClass = 'inactiveImage';
  //         break;
  //     case 'crime':
  //         ($scope.crimeClass === 'inactiveImage') ? $crimeClass = 'activeImage' : $crimeClass = 'inactiveImage';
  //         break;
  //     default:
  //         console.log('something wrong');
  //   }
  // }
})
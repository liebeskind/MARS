angular.module('map.controller', [])

    .controller('DashCtrl', function($scope, $http) {
      
      $scope.map = {
          center: {
            latitude: 32.070123,
            longitude: 34.79411
          },
          zoom: 16,
          draggable: true
      };

      $http({
          url: "https://vivid-fire-3100.firebaseio.com/.json",
          method: "GET"
      }).success(function(data, status, headers, config) {
          console.log("incidents", data);
          $scope.circles = data;
      }).error(function(data, status, headers, config) {
          //error
          console.log('error');
      });

		  var tabs = document.querySelectorAll('div.tabs')[0];
		  tabs = angular.element(tabs);
		  tabs.css('display', '');
    });
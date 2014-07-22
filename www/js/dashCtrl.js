angular.module('map.controller', [])

    .controller('DashCtrl', function($scope, OutsideIncidents) {
      
      $scope.map = {
          center: {
            latitude: 32.070123,
            longitude: 34.79411
          },
          zoom: 16,
          draggable: true
      };

      $scope.circles = OutsideIncidents.all();

      console.log($scope.circles)

		  var tabs = document.querySelectorAll('div.tabs')[0];
		  tabs = angular.element(tabs);
		  tabs.css('display', '');
    });
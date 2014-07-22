angular.module('map.controller', [])

    .controller('DashCtrl', function($scope) {
      
      $scope.map = {
          center: {
            latitude: 32.070123,
            longitude: 34.793811
          },
          zoom: 16
      };

      console.log('ShowCtrl');
		  var tabs = document.querySelectorAll('div.tabs')[0];
		  tabs = angular.element(tabs);
		  tabs.css('display', '');

    });
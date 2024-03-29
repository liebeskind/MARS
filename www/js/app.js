// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
// 'map.controller' is found in dashCtrl.js
angular.module('starter', ['ionic', 'google-maps', 'incidentList.controllers', 'map.controller', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.incidentList', {
      url: '/incidentlist',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-incidentlist.html',
          controller: 'IncidentListCtrl'
        }
      }
    })    

    .state('tab.incident-detail', {
      url: '/incidentlist/:incidentId',
      views: {
        'tab-dash': {
          templateUrl: 'templates/incidentlist-detail.html',
          controller: 'IncidentListDetailCtrl'
        }
      }
    })

    .state('tab.friends', {
      url: '/incidents',
      views: {
        'tab-incidents': {
          templateUrl: 'templates/tab-incidents.html',
          controller: 'IncidentsCtrl'
        }
      }
    })
    
    .state('tab.friend-detail', {
      url: '/incident/:incidentId',
      views: {
        'tab-incidents': {
          templateUrl: 'templates/incident-detail.html',
          controller: 'IncidentDetailCtrl'
        }
      }
    })

    .state('tab.success', {
      url: '/incident/success',
      views: {
        'tab-incidents': {
          templateUrl: 'templates/reportsuccess.html',
          controller: 'IncidentDetailCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});


angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Incidents', function($location, $ionicViewService) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var incidents = [
    { id: 0, name: 'Crime', subcategories: 
      [{name:'Theft', distance: 1}, {name:'Sexual Abuse', distance: 1}, {name:'Violence', distance: 1}]
    },
    { id: 1, name: 'Fire', subcategories: 
      [{name:'Residential', distance: 0.6}, {name:'Commercial', distance: 0.6}, {name:'Industrial', distance: 0.6}]
    },
    { id: 2, name: 'Medical Emergency', subcategories: 
      [{name:'Need Ambulance', distance: 0.2}, {name:'Car Accident', distance: 0.1}, {name:'Heart Attack', distance: 0.02}]
    }
  ];

  return {
    all: function() {
      return incidents;
    },
    get: function(incidentId) {
      // Simple index lookup
      return incidents[incidentId];
    },
    submitIncident: function(incident) {
      
      console.log("incident to add", incident);

      myDataRef.push(incident);

      $ionicViewService.clearHistory();
      return $location.path('/success')
    }
  }
})

  /*
  var outsideIncidents = [
    { id: 0, center: {latitude:32.0678, longitude: 34.7941}, radius: 45, parentcategory: 'Crime', color: 'blue'
    },
    { id: 1, center: {latitude:32.0676, longitude: 34.7942}, radius: 25, parentcategory: 'Medical Emergency', color: 'green'
    },
    { id: 2, center: {latitude:32.07, longitude: 34.796}, radius: 50, parentcategory: 'Crime', color: 'blue'
    },
    { id: 3, center: {latitude:32.074, longitude: 34.794}, radius: 40, parentcategory: 'Fire', color: 'red'
    },
    { id: 4, center: {latitude:32.072, longitude: 34.7917}, radius: 35, parentcategory: 'Fire', color: 'red'
    },
  ];
  */

;

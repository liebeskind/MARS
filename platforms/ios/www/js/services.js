angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Incidents', function($location) {
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
      console.log('successfully submitted incident')
      console.log(incident);
      $location.path('/tabs/dash')
    }
  }
});

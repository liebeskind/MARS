angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Incidents', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var incidents = [
    { id: 0, name: 'Crime' , subcategories: 
      [{name:'Theft'}, {name:'Sexual Abuse'}, {name:'Violence'}]
    },
    { id: 1, name: 'Fire', subcategories: 
      [{name:'Residential'}, {name:'Commercial'}, {name:'Industrial'}]
    },
    { id: 2, name: 'Medical Emergency', subcategories: 
      [{name:'Need Ambulance'}, {name:'Car Accident'}, {name:'Heart Attack'}]
    }
  ];

  return {
    all: function() {
      return incidents;
    },
    get: function(incidentId) {
      // Simple index lookup
      return incidents[incidentId];
    }
  }
});

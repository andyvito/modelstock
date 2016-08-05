'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.areasData
 * @description
 * # areasData
 * Factory in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .factory('areasData', function () {
    // Service logic
    var factory = {
      areas: null,
      currentArea: null,
      getAreas: function () {
        return factory.areas;
      },
      setAreas: function (areasCol){
        factory.areas = areasCol;
      },
      getCurrentArea: function(){
        return factory.currentArea;
      },
      setCurrentArea: function(area){
        factory.currentArea = area;
      },
    };

    // Public API here
    return factory;

  });

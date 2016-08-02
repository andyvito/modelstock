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
    var data = {
      areas: '',
      currentArea: ''
    };

    // Public API here
    return {
      getAreas: function () {
        return data.areas;
      },
      setAreas: function (areasCol){
        data.areas = areasCol;
      },
      getCurrentArea: function(){
        return data.currentArea;
      },
      setCurrentArea: function(area){
        data.currentArea = area;
      },
    };


  });

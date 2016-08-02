'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.models
 * @description
 * # models
 * Factory in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .factory('modelsData', function () {
    // Service logic
    
    var data = {
      models: ''
    };

    // Public API here
    return {
      getModels: function () {
        return data.models;
      },
      setModels: function (modelsCol){
        data.models = modelsCol;
      }
    };
  });

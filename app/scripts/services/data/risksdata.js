'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.riskData
 * @description
 * # riskData
 * Factory in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .factory('risksData', function () {
    // Service logic
    // ...
    var factory = {
      currentRisk: null,
      risks: null,
      getRisks: function () {
          return factory.risks;
      },
      setRisks: function (risksCol){
        factory.risks = risksCol;
      },
      getCurrentRisk: function(){
        return factory.currentRisk;
      },
      setCurrentRisk: function(risk){
        factory.currentRisk = risk;
      }
    };

    // Public API here
    return factory;

  });

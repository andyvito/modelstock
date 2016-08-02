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

    var data = {
      currentRisk: '',
      risks: ''
    };

    // Public API here
    return {
      getRisks: function () {
        return data.risks;
      },
      setRisks: function (risksCol){
        data.risks = risksCol;
      },
      getCurrentRisk: function(){
        return data.currentRisk;
      },
      setCurrentRisk: function(risk){
        data.currentRisk = risk;
      }
    };

  });

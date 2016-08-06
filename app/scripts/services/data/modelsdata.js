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
    var factory = {
      models: null,
      filterModelsByRiskAndArea: null,
      getModels: function () {
        return factory.models;
      },
      setModels: function (modelsCol){
        factory.models = modelsCol;
        factory.filterModelsByRiskAndArea = modelsCol;
      },
      getFilterModelsByRiskAndArea: function(){
        return factory.filterModelsByRiskAndArea;
      },
      setFilterModelsByRiskAndArea: function(riskid,areaid){
        factory.filterModelsByRiskAndArea = factory.models.filter(function (el) {
                                            if (riskid && areaid){
                                                return el.risk.id == riskid &&
                                                        el.area.id == areaid;
                                            }else if (riskid){
                                                return el.risk.id == riskid;
                                            }else if (areaid){
                                                return el.area.id == areaid;
                                            }else{
                                                return el;
                                            }
                                          });
      },

    };
    
    // Public API here
    return factory;
  });

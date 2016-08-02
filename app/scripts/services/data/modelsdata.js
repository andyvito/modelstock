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
      models: '',
      filterModelsByRiskAndArea: ''
    };

    // Public API here
    return {
      getModels: function () {
        return data.models;
      },
      setModels: function (modelsCol){
        data.models = modelsCol;
        data.filterModelsByRiskAndArea = modelsCol;
      },
      getFilterModelsByRiskAndArea: function(){
        return data.filterModelsByRiskAndArea;
      },
      setFilterModelsByRiskAndArea: function(riskid,areaid){
        data.filterModelsByRiskAndArea = data.models.filter(function (el) {
                                            if (riskid && areaid){
                                                return el.risk_model_id == riskid &&
                                                        el.area_model_id == areaid;
                                            }else if (riskid){
                                                return el.risk_model_id == riskid;
                                            }else if (areaid){
                                                return el.area_model_id == areaid;
                                            }else{
                                                return el.risk_model_id;
                                            }
                                          });
      },

    };
  });

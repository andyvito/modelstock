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
    var self = this;

    this.modelFilter = function(models, riskid, areaid, isActive, curMonth){
      return models.filter(function (el) {
                      if (riskid && areaid){
                          return el.risk.id == riskid &&
                                  el.area.id == areaid &&
                                  (el.current_backtest.val_backtest_cur_month == true || 
                                  el.current_backtest.val_backtest_cur_month == curMonth) &&
                                  (el.active == true || el.active == !isActive) 

                                  ;
                      }else if (factory.riskid){
                          return el.risk.id == factory.riskid &&
                                  (el.current_backtest.val_backtest_cur_month == true || 
                                  el.current_backtest.val_backtest_cur_month == curMonth) &&
                                  (el.active == true || el.active == !isActive);
                      }else if (factory.areaid){
                          return el.area.id == factory.areaid &&
                                  (el.current_backtest.val_backtest_cur_month == true || 
                                  el.current_backtest.val_backtest_cur_month == curMonth) &&
                                  (el.active == true || el.active == !isActive) ;
                      }
                      else{
                        return el &&
                                  (el.current_backtest.val_backtest_cur_month == true || 
                                  el.current_backtest.val_backtest_cur_month == curMonth) &&
                                  (el.active == true || el.active == !isActive) ;
                      }
              });
    };


    var factory = {
      models: null,
      filterModelsByRiskAndArea: null,
      isActive: false,
      showCurBacktesting: false,
      riskid:null,
      areaid:null,
      getModels: function () {
        return factory.models;
      },
      setModels: function (modelsCol){
        factory.models = modelsCol;
        factory.filterModelsByRiskAndArea = factory.models.filter(function (el) {
                                              return el.active == true;
                                            });
      },
      getFilterModelsByRiskAndArea: function(){
        return factory.filterModelsByRiskAndArea;
      },
      setFilterModelsByRiskAndArea: function(riskid,areaid){
        factory.riskid = riskid;
        factory.areaid = areaid;
        factory.filterModelsByRiskAndArea = self.modelFilter(factory.models,factory.riskid, factory.areaid,factory.isActive, factory.showCurBacktesting);
      },
      getShowInactive: function(){
        return factory.isActive;
      },
      setShowInactive: function(value){
        factory.isActive = value;
        if (factory.models)     {
          factory.filterModelsByRiskAndArea = self.modelFilter(factory.models,factory.riskid, factory.areaid,factory.isActive, factory.showCurBacktesting);
        }
      },
      getShowCurBacktesting: function(){
        return factory.showCurBacktesting;
      },
      setShowCurBacktesting: function(value){
          factory.showCurBacktesting = value;
          if (factory.models) {
              factory.filterModelsByRiskAndArea = self.modelFilter(factory.models,factory.riskid, factory.areaid,factory.isActive, factory.showCurBacktesting);
          }
            
      },
      updateBacktesting: function(newBacktesting){
        for (var i in factory.models) {
          if ( factory.models[i].id == newBacktesting.modelid ) {
            factory.models[i].last_backtest.commentaries = newBacktesting.last_backtest.commentaries;
            factory.models[i].last_backtest.next_month = newBacktesting.last_backtest.next_month;
            factory.models[i].last_backtest.next_year = newBacktesting.last_backtest.next_year;
            factory.models[i].last_backtest.real_month = newBacktesting.last_backtest.real_month;
            factory.models[i].last_backtest.real_year = newBacktesting.last_backtest.real_year;
            factory.models[i].last_backtest.result = newBacktesting.last_backtest.result;
            factory.models[i].last_backtest.validate_month = newBacktesting.last_backtest.validate_month;
            factory.models[i].last_backtest.validate_year = newBacktesting.last_backtest.validate_year;
            factory.models[i].last_backtest.months_delayed = newBacktesting.last_backtest.months_delayed;
            factory.models[i].current_backtest.is_delayed = newBacktesting.current_backtest.is_delayed;
            factory.models[i].current_backtest.next_month = newBacktesting.current_backtest.next_month;
            factory.models[i].current_backtest.next_year = newBacktesting.current_backtest.next_year;
            factory.models[i].current_backtest.val_backtest_cur_month = newBacktesting.current_backtest.val_backtest_cur_month;
            break; 
          }
        }
        factory.filterModelsByRiskAndArea = self.modelFilter(factory.models,factory.riskid, factory.areaid,factory.isActive, factory.showCurBacktesting);
        return factory.filterModelsByRiskAndArea;
      },
      setNewModel: function(newModel){
        factory.models.push(newModel);
        factory.filterModelsByRiskAndArea = self.modelFilter(factory.models,factory.riskid, factory.areaid,factory.isActive, factory.showCurBacktesting);
      }
    };
    
    // Public API here
    return factory;
  });

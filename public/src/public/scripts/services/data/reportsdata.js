'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.data/reportData
 * @description
 * # data/reportData
 * Factory in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .factory('reportsData', function () {
    // Service logic
    var self = this;

    // ...
    var factory = {
      indicators: {totalModels:0, totalInactive:0, totalInactivePercentage:0, totalBacktest:0, totalBacktestPercentage:0, 
                  totalUnvalidated:0, totalUnvalidatedPercentage:0, totalValidated:0, totalValidatedPercentage:0, 
                  totalValidatedFullfil:0, totalValidatedFullfilPercentage:0, totalValidatedNoFullfil: 0, totalValidatedNoFullfilPercentage:0},
      getIndicators: function () {
          return factory.indicators;
      },
      setIndicators: function (indicators){
        factory.indicators = {totalModels:indicators.total_models, 
                              totalInactive: indicators.total_inactive.value, totalInactivePercentage: indicators.total_inactive.percentage, 
                              totalBacktest:indicators.total_backtest.value, totalBacktestPercentage:indicators.total_backtest.percentage,
                              totalUnvalidated:indicators.total_unvalidated.value, totalUnvalidatedPercentage:indicators.total_unvalidated.percentage,
                              totalValidated:indicators.total_validated.value, totalValidatedPercentage:indicators.total_validated.percentage,
                              totalValidatedFullfil:indicators.total_validated_fullfil.value, totalValidatedFullfilPercentage:indicators.total_validated_fullfil.percentage,
                              totalValidatedNoFullfil: indicators.total_validated_no_fullfil.value,totalValidatedNoFullfilPercentage:indicators.total_validated_no_fullfil.percentage};
      },
    };

    // Public API here
    return factory;

  });

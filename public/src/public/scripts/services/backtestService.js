'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.backtest
 * @description
 * # backtest
 * Service in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .service('backtestService', function (ApiService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.saveBacktesting = function(backtesting){
    	return ApiService.saveBacktesting(backtesting);
    }

  });

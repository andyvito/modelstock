'use strict';

/**
 * @ngdoc filter
 * @name modelsstockApp.filter:resultBacktest
 * @function
 * @description
 * # resultBacktest
 * Filter in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .filter('resultBacktest', function () {
    return function (input) {
    	if (input == null) return 'Cambio de backtesting';
      	return input ? 'Cumplió' : 'No cumplió';
  	}
  });

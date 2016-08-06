'use strict';

/**
 * @ngdoc filter
 * @name modelsstockApp.filter:ifNull
 * @function
 * @description
 * # ifNull
 * Filter in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .filter('ifNull', function () {
	return function(input) {
        return input == null ? '-' : input;
   	};
  });

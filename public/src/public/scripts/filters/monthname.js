'use strict';

/**
 * @ngdoc filter
 * @name modelsstockApp.filter:monthName
 * @function
 * @description
 * # monthName
 * Filter in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .filter('monthName', function () {

  	var monthNames = [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
            'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ];

    return function(monthNumber){
    	return monthNumber == null ? '-' : monthNames[monthNumber - 1];	
    }


  });

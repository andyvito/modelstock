'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.closeMonthService
 * @description
 * # closeMonthService
 * Service in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .service('closeMonthService', function (ApiService) {
    
    this.closeMonth = function(){
    	return ApiService.closeMonth();
    }
  });


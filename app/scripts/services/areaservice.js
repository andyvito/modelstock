'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.areaService
 * @description
 * # areaService
 * Service in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .service('areaService', function (ApiService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.saveNewArea = function(newArea){
    	console.log(newArea);
    	   return ApiService.saveNewArea(newArea);
        };

  });

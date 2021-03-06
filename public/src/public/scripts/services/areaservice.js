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
    	   return ApiService.saveNewArea(newArea);
      };

    this.updateArea = function(updateArea){
    		return ApiService.updateAreaByRisk(updateArea);
	    };

    this.deleteAreaByRisk = function(riskid, areaid){
          return ApiService.deleteAreaByRisk(riskid, areaid);
      };

    this.canRemoveArea = function(riskid, areaid){
        return ApiService.canRemoveArea(riskid, areaid);    
      };

  });

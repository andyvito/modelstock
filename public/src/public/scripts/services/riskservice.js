'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.riskService
 * @description
 * # riskService
 * Service in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .service('riskService', function (ApiService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getAllRisks = function(){
    			return ApiService.getAllRisks();
    		};

    this.getAllAreasByRisks = function(id){
          return ApiService.getAllAreasByRisks(id);
        };

    this.saveNewRisk = function(newRisk){
    	   return ApiService.saveNewRisk(newRisk);
        };

    this.deleteRisk = function(id){
    	   return ApiService.deleteRisk(id);
        };

    this.updateRisk = function(riskUpdate){
          return ApiService.updateRisk(riskUpdate);
        };

    this.canRemoveRisk = function(risk){
          return ApiService.canRemoveRisk(risk);
        };



    /*this.getAllModelsByRisks = function(riskid){
          return ApiService.getAllModelsByRisks(riskid);
        };*/

  });

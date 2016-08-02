'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.modelService
 * @description
 * # modelService
 * Service in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .service('modelService', function (ApiService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getAllModels = function(){
    			return ApiService.getAllModels();
    		};


    
  });

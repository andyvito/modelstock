'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.lenService
 * @description
 * # lenService
 * Service in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .service('lenService', function (ApiService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getAllLens = function(){
			return ApiService.getAllDistinctLens();
		}
  });

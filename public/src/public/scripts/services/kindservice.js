'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.kindService
 * @description
 * # kindService
 * Service in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .service('kindService', function (ApiService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getAllKinds = function(){
			return ApiService.getAllDistinctKinds();
		}
  });

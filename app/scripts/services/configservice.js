'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.configservice
 * @description
 * # configservice
 * Service in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .service('configService', function (ApiService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.loadCurrentDateBacktesting = function(){
    	return ApiService.loadCurrentDateBacktesting();
    }

  });

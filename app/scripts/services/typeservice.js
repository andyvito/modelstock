'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.typeService
 * @description
 * # typeService
 * Service in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .service('typeService', function (ApiService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getAllTypes = function(){
    			return new Promise(function(resolve){
		    		ApiService.getAllTypes().then(function(data){
		    			console.log('Llego')
		    			console.log(data)
		    		});
    			});
    		};

  });



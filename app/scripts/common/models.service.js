(function(){
	"use strict";

	angular.module('common')
	.service('ModelsService', ModelsService);

	ModelsService.$inject = ['$http', 'ApiPath'];
	function ModelsService($http,ApiPath){
		var service = this;

		service.getAllModels = function(){
			return $http.get(ApiPath+'/api/v1/models_data')
			.then(function(response){
				return response.data.data.models; //TODO: Review this data.data return by BE
			})
			.catch(function(err){
				console.error(err);
			});
		};
	}

})();
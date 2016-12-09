(function(){
	"use strict";

	angular.module('common')
	.service('ReportService',ReportService);


	ReportService.$inject = ['$http', 'ApiPath'];
	function ReportService($http, ApiPath){
		var service = this;

		service.getIndicators = function(){
			return $http.get(ApiPath+'/api/v1/indicators')
			.then(function(response){
				return response.data.data; //TODO: Review this data.data return by BE
			})
			.catch(function(err){
				console.error(err);
			});
		};
	};


})();
(function(){
	'use strict';

	angular.module('common')
	.service('RisksService', RisksService);

	RisksService.$inject = ['$http', 'ApiPath'];
	function RisksService($http, ApiPath){
		var service = this;

		service.getAllRisks = () =>{
			return $http.get(ApiPath+'/api/v1/risk_model_data')
			.then(function(response){
				return response.data.data.risks; //TODO: Review this data.data return by BE
			})
			.catch(function(err){
				console.error(err);
			});
		};


		service.getAllAreasByRisks = (id)=>{
			var config = {};
			if (id) config.params = {'riskid': id};

			return $http.get(ApiPath+'/api/v1/areasByRisk', config)
			.then(function(response){
				return response.data.data; //TODO: Review this data.data return by BE
			})
			.catch(function(err){
				console.error(err);
			});
        };

		service.canRemoveRisk = (id) =>{
			var config = {};
			if (id) config.params = {'riskid': id};

			//TODO: REview this method
			//throw new Error('TODO: Review this method');
			return $http.get(ApiPath+'/api/v1/risk_delete', config)
			.then(function(response){
				return response.data.data; //TODO: Review this data.data return by BE
			})
			.catch(function(err){
				console.error(err);
			});
        };

        service.saveNewRisk = (newRisk) => {
			var config = {};
			if (newRisk) config.params = {'code': newRisk.code, 'name': newRisk.name};


			return $http.post(ApiPath+'/api/v1/risk_model_data', config)
			.then(function(response){
				debugger;
				return response.data.data; //TODO: Review this data.data return by BE
			})
			.catch(function(err){
				console.error(err);
			});
        };


        service.deleteRisk = (id) => {
			return $http.delete(ApiPath+'/api/v1/risk_model_data/'+id)
			.then(function(response){
				return response.data.data; //TODO: Review this data.data return by BE
			})
			.catch(function(err){
				console.error(err);
			});
        };


        service.updateRisk = (riskUpdate) =>{
			var config = {};
        	if (riskUpdate) config.params = {'name': updateRisk.name};

        	return $http.put(ApiPath+'/api/v1/risk_model_data/'+updateRisk.id, config)
			.then(function(response){
				return response.data.data; //TODO: Review this data.data return by BE
			})
			.catch(function(err){
				console.error(err);
			});

        };



	};

})();
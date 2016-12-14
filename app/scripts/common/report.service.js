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
				var indicators = response.data.data; //TODO: Review this data.data return by BE
 				return {
 						total_models: {
 										value:indicators.total_models, 
 										percentage: null,
 										description: 'Total Modelos', 
 										character: 'M',
 										color: 'blue'
 									  }, 
						totalInactive: {
										value:indicators.total_inactive.value, 
										percentage:indicators.total_inactive.percentage || 0,
										description: 'Inactivos',
										character: 'I',
										color: 'blue'
									  },
						totalBacktest:{
										value:indicators.total_backtest.value, 
										percentage:indicators.total_backtest.percentage || 0,
										description: 'Backtesting',
										character: 'B',
										color: 'blue' 		  
									  },
						
						totalUnvalidated:{
										value:indicators.total_unvalidated.value, 
										percentage:indicators.total_unvalidated.percentage || 0,
										description: 'No Validados',
										character: 'N',
										color: 'red'
									  },
						totalValidated:{
										value:indicators.total_validated.value, 
										percentage:indicators.total_validated.percentage || 0,
										description: 'Validados',
										character: 'V',
										color: 'blue'
									  },
						totalValidatedFullfil:{
										value:indicators.total_validated_fullfil.value, 
										percentage:indicators.total_validated_fullfil.percentage || 0,
										description: 'Cumple',
										character: 'C',
										color: 'green'
									  },
						totalValidatedNoFullfil:{
										value:indicators.total_validated_no_fullfil.value, 
										percentage:indicators.total_validated_no_fullfil.percentage || 0,
										description: 'No Cumple',
										character:'X',
										color: 'red'	  
									  }

                       
                       };
 			})
			.catch(function(err){
				console.error(err);
			});
		};
	};


})();
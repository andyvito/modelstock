(function(){
	'use strict';

	angular.module('common')
	.service('SharedObjectsService', SharedObjectsService);

	SharedObjectsService.$inject = ['$http', 'ApiPath', 'RisksService'];
	function SharedObjectsService($http,ApiPath, RisksService){
		let service = this;
		let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      					  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

      	/**
      	* Loads dates register in the BE
      	**/
		$http.get(ApiPath+'/api/v1/get_current_date_backtesting')
			.then((result)=>{
				service.__currentDate__ = result.data.data.date.date;
				service.__currentYear__ = result.data.data.date.year;
        		service.__currentMonth__ = result.data.data.date.month;
			});

        service.getCurrentDate = () => service.__currentDate__; 
        service.getCurrentYear = () => service.__currentYear__;
        service.getCurrentMonth = () => service.__currentMonth__;
        service.getCurrentDateBacktest = () => `${service.__currentYear__}-${service.__currentMonth__}`;
        service.getCurrentMonthName = () => {
      			return monthNames[service.__currentMonth__ - 1];
        };

      	/**
      	* Manages and storages risks 
      	**/
		service.getRisks = RisksService.getAllRisks();
		service.getCurrentRisk = () => service.__currentRisk__;
		service.setCurrentRisk = (risk) => service.__currentRisk__= risk; 

      	/**
      	* Load, manages and storages len 
      	**/
		$http.get(ApiPath+'/api/v1/len_distinct')
			.then((result)=>{
				service.__lens__ = result.data.data.lens.map( function (len) { return { value: len.toLowerCase(), display: len }})
			});

		service.getLens = () => service.__lens__;

      	/**
      	* Load, manages and storages types 
      	**/
		$http.get(ApiPath+'/api/v1/type_distinct')
			.then((result)=>{
				service.__types__ = result.data.data.types.map( function (type) { return { value: type.toLowerCase(), display: type } })
			});

		service.getTypes = () => service.__types__;


      	/**
      	* Load, manages and storages kinds 
      	**/
		$http.get(ApiPath+'/api/v1/kind_distinct')
			.then((result)=>{
				service.__kinds__ = result.data.data.kinds.map( function (kind) {return {value: kind.toLowerCase(), display: kind}});
			});

		service.getKinds = () => service.__kinds__;

	};
})();
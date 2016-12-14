(function(){
	'use restrict'; 

	angular.module('public')
	.controller('ModelsController', ModelsController);

	ModelsController.$inject = ['indicators', 'models', 'risks', 'SharedObjectsService'];
	function ModelsController(indicators, models, risks, SharedObjectsService){
		var $ctrl = this;
		$ctrl.indicators = indicators;
		$ctrl.models = models;
		$ctrl.risks = risks;
		

		


		/*console.log(SharedObjectsService.getCurrentDate());
		console.log(SharedObjectsService.__currentDate__);
		console.log(SharedObjectsService.getCurrentDateBacktest());
		console.log(SharedObjectsService.getCurrentMonthName());
		SharedObjectsService.setCurrentRisk('hola');
		console.log(SharedObjectsService.getCurrentRisk());
		console.log(SharedObjectsService.getLens());
		console.log(SharedObjectsService.getTypes());
		console.log(SharedObjectsService.getKinds()); */
		
		/*
		console.log(RisksService.getAllAreasByRisks(1));
		console.log(RisksService.canRemoveRisk(1)); */


		
	};


})();
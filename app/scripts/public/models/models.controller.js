(function(){
	'use restrict'; 

	angular.module('public')
	.controller('ModelsController', ModelsController);

	ModelsController.$inject = ['indicators', 'models'];
	function ModelsController(indicators, models){
		var $ctrl = this;
		$ctrl.indicators = indicators;
		$ctrl.models = models;
		
		
		
	};


})();
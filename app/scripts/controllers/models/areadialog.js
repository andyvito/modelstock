'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ModelsAreadialogCtrl
 * @description
 * # ModelsAreadialogCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ModelsAreaDialogCtrl', ['$mdDialog','$mdToast', 'risk', 'areaService',function ($mdDialog, $mdToast, risk, areaService) {

  	var vm = this;
  	vm.risk = risk;

	vm.closeDialog = function(){
		$mdDialog.hide();
	};

	vm.createArea = function() {
		vm.area.riskid = vm.risk.id;
		areaService.saveNewArea(vm.area).then(function(result){
			$mdDialog.hide(result.data.new_area);
		},function(error){
			$mdDialog.hide();
			$mdToast.show(
                      $mdToast.simple()
                              .textContent('Se ha presentado un error agregando el área. Por favor, verifique e intente nuevamente.')
                              .hideDelay(3000)
                              .position('top left')
                  );  
		});   
	};


  }]);

'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:RiskmodelcontrollerCtrl
 * @description
 * # RiskmodelcontrollerCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('RiskModalControllerCtrl', ['$scope', '$mdDialog', '$mdToast', 'risk', 'riskService', function ($scope,$mdDialog,$mdToast,risk,riskService) {
  	var vm = this;

  	riskService.canRemoveRisk(risk).then(function(result){
  		if (result.data.risk){
  			vm.currentRisk = result.data.risk;
  		}
  	});


  	vm.closeDialog = function(){
		  $mdDialog.hide();
  	};

  	vm.delete = function(){

  		if (vm.result == 0){
  			$mdDialog.hide();
  			$mdToast.show(
              		$mdToast.simple()
                      .textContent('Se ha cancelado la acción.')                       
                      .hideDelay(3000)
                      .position('top left')
             	);
  			return;
  		}

		  riskService.deleteRisk(vm.currentRisk.id).then(function(result){
          $mdDialog.hide(result.data.risk);
        });
  	};
  }]);

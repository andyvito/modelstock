'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:AreamodelcontrollerCtrl
 * @description
 * # AreamodelcontrollerCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('AreaModelControllerCtrl', ['$scope','$mdDialog','$mdToast','areaid','risk','areaService',  
  	function ($scope, $mdDialog, $mdToast, areaid, risk, areaService) {

  	var vm = this;
  	vm.risk = risk;

  	areaService.canRemoveArea(risk.id,areaid).then(function(result){
  		if (result.data.area){
  			vm.currentArea = result.data.area;
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

  		areaService.deleteAreaByRisk(vm.risk.id, vm.currentArea.id).then(function(result){
				$mdDialog.hide(result.data.area);
		  },function(error){
            $mdDialog.hide();
            $mdToast.show(
                $mdToast.simple()
                        .textContent('Se ha presentado un error eliminando el área. Por favor, verifique e intente nuevamente.')
                        .hideDelay(3000)
                        .position('top left')
                );  
      });   

		  
  	};


  }]);


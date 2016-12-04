'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:AreaCtrl
 * @description
 * # AreaCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('AreaCtrl', ['$scope','$location', '$anchorScroll','$controller','$uibModal','$mdDialog','$mdToast',
  		'areaService','modelsData', 'areasData','risksData',
  		function ($scope,$location, $anchorScroll,$controller,$uibModal,$mdDialog,$mdToast,areaService,modelsData,areasData,risksData) {
	
	var vm = this;

    vm.createArea = function(risk){
     	if (risk != null){

             $mdDialog.show({
                controller: 'ModelsAreaDialogCtrl',
                templateUrl: 'views/models/areadialog.html',
                controllerAs: 'vm',
                //bindToController: true,
                //parent: angular.element(document.body),
                //targetEvent: evt,
                clickOutsideToClose:false,
                focusOnOpen: true,
                locals:{
                	risk:risk
                }
              })
              .then(function(area) {                
                if (area == null) return;	
                  vm.areas.push(area);
		              areasData.setAreas(vm.areas);
                  $mdToast.show(
                      $mdToast.simple()
                              .textContent('La nueva área se ha registrado satisfactoriamente.')                       
                              .hideDelay(3000)
                              .position('top left')
                  );   
                
              });

  		}
     }



	
	this.updateArea = function(riskid, areaUpdate){
		areaUpdate.riskid = riskid;
        areaService.updateArea(areaUpdate).then(function(result){
                $mdToast.show(
                      $mdToast.simple()
                              .textContent('Se ha actualizado el área satisfactoriamente.')
                              .hideDelay(3000)
                              .position('top left')
                  );  
            
        },function(error){
                $mdToast.show(
                      $mdToast.simple()
                              .textContent('Se ha presentado un error actualizado el área. Por favor, verifique e intente nuevamente.')
                              .hideDelay(3000)
                              .position('top left')
                  );  
        });
	};


	this.selectArea = function(area){
        vm.parentRisk = risksData.getCurrentRisk();
        if (vm.currentArea == null || vm.currentArea.id != area.id){
              vm.currentArea = area;
              areasData.setCurrentArea(area);
              modelsData.setFilterModelsByRiskAndArea(vm.parentRisk.id, vm.currentArea.id);
          }else{
            vm.currentArea = null;
            areasData.setCurrentArea(null);
            modelsData.setFilterModelsByRiskAndArea(vm.parentRisk.id, null);
          }   
	};

	this.removeArea = function(index,$event) {
		if ($event.stopPropagation) $event.stopPropagation();
        if ($event.preventDefault) $event.preventDefault();


        $mdDialog.show({
            controller: 'AreaModelControllerCtrl',
            templateUrl: 'views/components/areas/modalremovearea.html',
            controllerAs: 'vm',
            //bindToController: true,
            //parent: angular.element(document.body),
            //targetEvent: evt,
            focusOnOpen: true,
            locals:{
              risk: vm.parentRisk, 
              areaid: vm.currentArea.id
            }
          })
          .then(function(area) {
            if (area == null) return;

            vm.areas.splice(index, 1);
		      
            $mdToast.show(
                $mdToast.simple()
                        .textContent('El área se ha eliminado satisfactoriamente.')                       
                        .hideDelay(3000)
                        .position('top left')
            );   
            
        });
	};


	$scope.$watch(function(){
		return areasData.areas;
	},function(newValue,oldValue){
	    vm.areas = newValue;
	});


    $scope.$watch(function () { 
       return areasData.currentArea;
    }, function(newValue,oldValue){
    	vm.currentArea = newValue;
    });


}]);

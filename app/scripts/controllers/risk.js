'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:RiskCtrl
 * @description
 * # RiskCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('RiskCtrl', ['$scope', '$location', '$anchorScroll', '$uibModal','$mdDialog','$mdToast', 'riskService', 
    'modelsData', 'areasData', 'risksData', '$interval',
    function ($scope, $location, $anchorScroll, $uibModal, $mdDialog, $mdToast, riskService, modelsData, areasData,risksData,$interval) {
      var vm = this;

    
      vm.createRisk = function() {
             $mdDialog.show({
                controller: 'ModelsRisksDialogCtrl',
                templateUrl: 'views/models/risksdialog.html',
                controllerAs: 'vm',
                //bindToController: true,
                //parent: angular.element(document.body),
                //targetEvent: evt,
                clickOutsideToClose:false,
                focusOnOpen: true
              })
              .then(function(risk) {
                
                if (risk == null) return;

                vm.listOfRisks.push(risk);
                $mdToast.show(
                    $mdToast.simple()
                            .textContent('El nuevo riesgo se ha registrado satisfactoriamente.')                       
                            .hideDelay(3000)
                            .position('top left')
                );   
                
              });
         };


      vm.selectRisk = function(risk){
          if (vm.currentRisk == null || vm.currentRisk.id != risk.id){
              vm.currentRisk = risk;
              risksData.setCurrentRisk(risk);
              riskService.getAllAreasByRisks(vm.currentRisk.id).then(function(result){
                areasData.setAreas(result.data.areas);
                vm.numberAreas = result.data.areas.length;
              }); 
              modelsData.setFilterModelsByRiskAndArea(vm.currentRisk.id, null);
          }else{
            vm.currentRisk = null;
            risksData.setCurrentRisk(null);
            modelsData.setFilterModelsByRiskAndArea(null, null);
          }       
          areasData.setCurrentArea(null);   
        };

      this.removeRisk = function(index,$event) {
        if ($event.stopPropagation) $event.stopPropagation();
        if ($event.preventDefault) $event.preventDefault();

        $mdDialog.show({
            controller: 'RiskModalControllerCtrl',
            templateUrl: 'views/components/risks/modalremoverisk.html',
            controllerAs: 'vm',
            //bindToController: true,
            //parent: angular.element(document.body),
            //targetEvent: evt,
            focusOnOpen: true,
            locals:{
              risk: vm.currentRisk
            }
          })
          .then(function(risk) {
            if (risk == null) return;

            vm.listOfRisks.splice(index, 1);
            
            $mdToast.show(
                $mdToast.simple()
                        .textContent('El riesgo se ha eliminado satisfactoriamente.')                       
                        .hideDelay(3000)
                        .position('top left')
            );   
            
          });
      };


      this.updateRisk = function (riskUpdate) {
        riskService.updateRisk(riskUpdate).then(function(result){
            //riskUpdate.editing = true; //TODO: what makes when the result is fine
        });
      };

      $scope.$watch(function(){
        return risksData.risks;
        },function(newValue,oldValue){
            vm.listOfRisks = newValue;
      });

      $scope.$watch(function(){
        return risksData.currentRisk;
        },function(newValue,oldValue){
            vm.currentRisk = newValue;
      });





}]);

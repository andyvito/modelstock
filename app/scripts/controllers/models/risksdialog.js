'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ModelsRisksdialogCtrl
 * @description
 * # ModelsRisksdialogCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ModelsRisksDialogCtrl', ['$mdDialog', 'riskService', function ($mdDialog,riskService) {
  	var vm = this;
  	vm.risk = {};

    this.closeDialog = function(){
		  $mdDialog.hide();
    };

    this.createRisk = function(){
       riskService.saveNewRisk(vm.risk).then(function(result){
            $mdDialog.hide(result.data.risk);
        });

    };



  }]);

'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ModelModalChangeriskCtrl
 * @description
 * # ModelModalChangeriskCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ModelModalChangeRiskCtrl', ['$mdDialog', '$state', 'modelTransfer', 'modelOld', function ($mdDialog, $state, modelTransfer,modelOld) {
    var vm = this;

    vm.modelTransfer = modelTransfer;
    vm.modelOld = modelOld;


    vm.goToModelTransfer = function(){
   		$state.go('model',{'id':vm.modelTransfer.id});
		$mdDialog.hide();
    }

    vm.goToModels = function(){
   		$state.go('models',{});
		$mdDialog.hide();
    }

  }]);

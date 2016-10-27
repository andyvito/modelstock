'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ModelModalCloneCtrl
 * @description
 * # ModelModalCloneCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ModelModalCloneCtrl', ['$mdDialog', '$state', 'model', 'modelService', function ($mdDialog, $state, model, modelService) {
    var self = this;
    self.model = angular.copy(model);
    self.currentStep = 1; 

    self.cloneModel = function(){
  		modelService.cloneModel(self.model).then(function(result){
  			self.currentStep = 2;
  			self.modelCloned = result.data.model;
        console.log(result.data);
      });  
    };

    self.closeDialog = function(){
		  $mdDialog.hide();
    };

    self.goToCloneModel = function(){
    	$state.go('model',{'id':self.modelCloned.id});
		  $mdDialog.hide();
    };
  }]);

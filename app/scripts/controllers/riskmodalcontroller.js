'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:RiskmodelcontrollerCtrl
 * @description
 * # RiskmodelcontrollerCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('RiskModalControllerCtrl', function ($scope, $uibModalInstance, nameRisk, numberAreas) {

	  $scope.nameRisk = nameRisk;
	  $scope.numberAreas = numberAreas;

	  $scope.delete = function () {
	    $uibModalInstance.close();
	  };

	  $scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	  };
  });

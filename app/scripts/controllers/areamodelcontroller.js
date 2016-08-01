'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:AreamodelcontrollerCtrl
 * @description
 * # AreamodelcontrollerCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('AreaModelMontrollerCtrl', function ($scope, $uibModalInstance, nameArea, numberModels) {
	  $scope.nameArea = nameArea;
	  $scope.numberModels = numberModels;

	  $scope.delete = function () {
	    $uibModalInstance.close();
	  };

	  $scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	  };
  });


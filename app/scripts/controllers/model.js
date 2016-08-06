'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ModelCtrl
 * @description
 * # ModelCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ModelCtrl',['$scope','$stateParams','$state', 
  		function($scope, $stateParams, $state){
  			var self = this;

	var modelId = $stateParams.id;
	console.log(' modelo id: '+ modelId);

  }]);

'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ModelCtrl
 * @description
 * # ModelCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ModelCtrl', ['$scope', 'modelsData', function ($scope,modelsData) {
  	var self = this;

  	$scope.$watch(function () { 
  		 self.models = modelsData.getModels(); 
       console.log(self.models);
  	});


  }]);

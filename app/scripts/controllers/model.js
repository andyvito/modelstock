'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ModelCtrl
 * @description
 * # ModelCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ModelCtrl', ['$scope', 'modelsData','modelService', function ($scope,modelsData, modelService) {
  	var self = this;

    this.sortType     = 'name'; // set the default sort type
    this.sortReverse  = false;  // set the default sort order
    this.filterModels   = '';     // set the default search/filter term


    $scope.$watch(function () { 
       self.models = modelsData.getFilterModelsByRiskAndArea(); 

    });


    modelService.getAllModels().then(function(result){
      modelsData.setModels(result.data.models);
    });





  }]);

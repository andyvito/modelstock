'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ModelCtrl
 * @description
 * # ModelCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ModelCtrl', ['$scope', '$state', 'modelsData','modelService', 'risksData', 'areasData', 
      function ($scope, $state, modelsData, modelService,risksData, areasData) {
    
      	var self = this;

        this.sortType     = 'name'; // set the default sort type
        this.sortReverse  = false;  // set the default sort order
        this.filterModels   = '';     // set the default search/filter term
        //this.currentRisk = risksData.getCurrentRisk();
        //this.currentArea = areasData.getCurrentArea();
        this.titleTable = "Modelos";

        this.selectModel = function(model){
          //$state.go('models')
          console.log(model);
        };

        if (modelsData.getFilterModelsByRiskAndArea() == null){
          modelService.getAllModels().then(function(result){
              modelsData.setModels(result.data.models);         
          });  
        }
        else{
          this.models = modelsData.getFilterModelsByRiskAndArea();
        }


        $scope.$watch(function(){
          return modelsData.filterModelsByRiskAndArea;
          },function(newValue,oldValue){
              self.models = newValue;
              self.titleTable = "Modelos";
              if (risksData.getCurrentRisk()){
                 self.titleTable += " para " + risksData.getCurrentRisk().name;  
              }
              self.currentRisk = risksData.getCurrentRisk();

              if (areasData.getCurrentArea()){
                self.titleTable += " - Area: " + areasData.getCurrentArea().name;  

              }
              self.currentArea = areasData.getCurrentArea();
              if (self.models){
                self.titleTable += ' (' + self.models.length + ')'; 
              }
          });



  }]);

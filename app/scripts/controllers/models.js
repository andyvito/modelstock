'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ModelsCtrl
 * @description
 * # ModelsCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ModelsCtrl', ['$scope', '$mdToast', '$state', '$uibModal', '$mdDialog', 'modelsData','modelService', 'risksData', 'areasData', 
      function ($scope, $mdToast, $state, $uibModal, $mdDialog, modelsData, modelService, risksData, areasData) {
    
      	var self = this;

        this.sortType     = 'name'; // set the default sort type
        this.sortReverse  = false;  // set the default sort order
        this.filterModels = '';     // set the default search/filter term
        this.showInactive = modelsData.showInactive; 
        this.showCurBacktesting = modelsData.showCurBacktesting;
        this.titleTable = "Modelos";


        $scope.$on('newModelCreatedEvent', function (event,newModel) {
          modelsData.setNewModel(newModel);
          $mdToast.show(
                        $mdToast.simple()
                                .textContent('El modelo '+ newModel.name + ' ha sido creado satisfactoriamente y se encuentra en implementación.')                       
                                .hideDelay(3000)
                                .position('top left')
                      );
        });


        this.selectModel = function(model, evt){
          	//$state.go('model',{'id':model.id});

            if (model.active==false) {
                $mdToast.show(
                          $mdToast.simple()
                                  .textContent('El modelo se encuentra inactivo. Por favor, activelo e intente nuevamente.!')                       
                                  .hideDelay(3000)
                                  .position('top left')
                        );
              return;
            }

            if (model.current_backtest.val_backtest_cur_month == false) {
                $mdToast.show(
                          $mdToast.simple()
                                  .textContent('Este modelo no tiene backtesting en el mes actual o se encuentra en implementación.!')                       
                                  .hideDelay(3000)
                                  .position('top left')
                        );
              return;
            }

            if (model.active == true && model.current_backtest.val_backtest_cur_month == true){
                   $mdDialog.show({
                      controller: 'ModelsCardsBacktestCtrl',
                      templateUrl: 'views/models/cards/backtest.html',
                      bindToController: true,
                      //parent: angular.element(document.body),
                      targetEvent: evt,
                      clickOutsideToClose:false,
                      focusOnOpen: true,
                      locals: {
                          model: model
                      }
                    })
                    .then(function(newBacktest) {
                      if (newBacktest){
                        self.models = modelsData.updateBacktesting(newBacktest);
                      }
                    });
              }
        };

        if (modelsData.getFilterModelsByRiskAndArea() == null){
          modelService.getAllModels().then(function(result){
              modelsData.setModels(result.data.models); 
          });  
        }
        else{
          self.models = modelsData.getFilterModelsByRiskAndArea();
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


        $scope.$watch(function(){
          return self.showInactive;
          },function(newValue,oldValue){
            modelsData.setShowInactive(newValue);

          });



        $scope.$watch(function(){
          return self.showCurBacktesting;
          },function(newValue,oldValue){
            modelsData.setShowCurBacktesting(newValue);
          });


  }]);

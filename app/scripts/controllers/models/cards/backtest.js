'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ModelsCardsBacktestCtrl
 * @description
 * # ModelsCardsBacktestCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ModelsCardsBacktestCtrl', ['$scope', '$mdToast', '$mdDialog', 'backtestService', 'model',
    function ($scope, $mdToast, $mdDialog, backtestService, model) {
     
    self = this;
    $scope.model = model;
    $scope.currentStep = 1;
    $scope.backtesting = {modelid:$scope.model.id};
       
    $scope.setNextStep = function(index){

      $scope.currentStep = index;
    }

    $scope.setPreviousStep = function(index){
      $scope.currentStep = index;
    }

    $scope.saveBacktesting = function(){
      backtestService.saveBacktesting($scope.backtesting).then(function(result){
            $mdDialog.hide(result.data.backtest);
          }, function(){
            $mdDialog.hide();
            $mdToast.show(
                      $mdToast.simple()
                              .textContent('Hubo problemas realizando el backtesting en el servidor. Por favor, verifique el modelo e intente nuevamente.')                       
                              .hideDelay(3000)
                              .position('top left')
                      );
      });
    }

  }]);

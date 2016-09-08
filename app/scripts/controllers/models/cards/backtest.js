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
    $scope.stepNumber = 3;
       
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth();
    var monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    $scope.currentMonth = { v: currentMonth, n: monthNames[currentMonth]};
    $scope.lastMonth = (currentMonth - 1 < 0) ? { v: 11, n: monthNames[11]} : { v: currentMonth - 1, n: monthNames[currentMonth - 1]};
    $scope.backtesting.yearRelease = (currentMonth - 1 < 0) ? currentYear - 1 : currentYear; 

    $scope.setNextStep = function(index){
     if (index == 2 && $scope.model.current_backtest.is_delayed == null) {
        $scope.stepNumber = 2;
        $scope.currentStep = index+1;  
        $scope.backtesting.curMonth = $scope.currentMonth;
      }else{
        $scope.currentStep = index;
      }
    }

    $scope.setPreviousStep = function(index){
     if (index == 2 && $scope.model.current_backtest.is_delayed == null) {
        $scope.currentStep = index-1;  
      }else{
        $scope.currentStep = index;
      }
    }

    $scope.saveBacktesting = function(){      
      $scope.backtesting.monthRelease = $scope.backtesting.curMonth.v + 1;
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
    
    $scope.$watch(function(){
      return $scope.selectedMonth;
      },function(newValue,oldValue){
          if (newValue){
            $scope.backtesting.curMonth = JSON.parse(newValue);
          }
      });    



     
  }]);

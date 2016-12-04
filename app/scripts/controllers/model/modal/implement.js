'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ModelModalModelmodalimplementctrlCtrl
 * @description
 * # ModelModalModelmodalimplementctrlCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ModelModalImplementCtrl', ['$scope', '$mdDialog', 'model', 'modelService', 'utilsData', 
    function ($scope, $mdDialog, model, modelService,utilsData) {
    var self = this;
    self.frecuency = [{n:'Mensual', v:1}, {n:'Bimensual', v:2}, {n:'Trimestral', v:3},
					{n:'Cuatrimestral', v:4}, {n:'Semestral', v:6}, {n:'Anual', v:12}, {n:'Bianual', v:24}];

    self.model = angular.copy(model);
    self.model.firstBacktesting = {};
    self.model.calibrated = {};

    this.recalculateCapacity = function(){
      if (!self.model.met_hours_man || !self.model.qua_hours_man) return;
      
      self.model.cap_area = (12/self.model.frecuency) * self.model.met_hours_man;
      self.model.cap_qua = (12/self.model.frecuency) * self.model.qua_hours_man;
      self.model.cap_total = self.model.cap_area + self.model.cap_qua;
    }

    this.updateFrecuency = function(){
      //self.model.firstBacktesting.month += 1;

      modelService.updateFrecuency(self.model).then(function(result){
          self.model.backtest_historial.unshift(result.data.newBacktesting);
          model = self.model;
          $mdDialog.hide(model);
      }); 
    };

    
    $scope.$watch(function(){
      return utilsData.currentDate;
      },function(newValue,oldValue){
        if (newValue){
          var year = utilsData.getCurrentYear();
          var month = utilsData.getCurrentMonth()-1;
          self.model.firstBacktesting.date = new Date(year, month,1); 
          self.model.firstBacktesting.maxDate = new Date().setFullYear(new Date(self.model.firstBacktesting.date).getFullYear() + 1); 
          self.model.calibrated.date = new Date(year, month,1); 
          self.model.calibrated.minDate = new Date().setMonth(self.model.calibrated.date.getMonth() - 3); 
        }
    });


}]);

'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ModelModalModelmodalimplementctrlCtrl
 * @description
 * # ModelModalModelmodalimplementctrlCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ModelModalImplementCtrl', ['$scope', '$mdDialog', 'model', 'modelService', function ($scope, $mdDialog, model, modelService) {
    var self = this;
    self.frecuency = [{n:'Mensual', v:1}, {n:'Bimensual', v:2}, {n:'Trimestral', v:3},
					{n:'Cuatrimestral', v:4}, {n:'Semestral', v:6}, {n:'Anual', v:12}, {n:'Bianual', v:24}];
    self.model = angular.copy(model);

    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth();
    var monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    //Default year and month to updown
    var finalYear = currentYear + 1;
    var finalMonth = currentMonth;
    self.years = [];
    self.items = [];

  	// Build a list of months up to initial year
  	for (var y = finalYear; y >= currentYear; y--) {
  			self.years.push(y);
  			self.items.push({year: y, text: y, header: true});

  			for (var m = 11; m >= 0; m--) {
  				//if (y === currentYear && m >= currentMonth) continue;
          self.items.push({year: y, month: m, text: monthNames[m]});
  				if (y === currentYear && m === currentMonth) break;	    	
  			}
  	}


    this.recalculateCapacity = function(){
      if (!self.model.met_hours_man || !self.model.qua_hours_man) return;
      
      self.model.cap_area = (12/self.model.frecuency) * self.model.met_hours_man;
      self.model.cap_qua = (12/self.model.frecuency) * self.model.qua_hours_man;
      self.model.cap_total = self.model.cap_area + self.model.cap_qua;
    }

    this.selectFirstDateBacktesting = function(item){
      self.model.firstBacktesting = item;
      console.log(item);
    }

    this.updateFrecuency = function(){
      modelService.updateFrecuency(self.model).then(function(result){
          self.model.backtest_historial.unshift(result.data.newBacktesting);
          model = self.model;
          $mdDialog.hide(model);
      });  
      


    };
}]);

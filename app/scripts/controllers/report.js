'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ReportCtrl
 * @description
 * # ReportCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ReportCtrl', ['$scope', 'reportService', 'utilsData', 'indicators',
      function ($scope, reportService, utilsData, indicators) {

  	var self = this;
  	self.indicators = indicators;
    self.report = {};
    self.reportModels = {};
    self.datepicker = {};
    self.dateBacktest = {};
    var monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


    this.changeDate = function(newValue){
      self.updateDateQuery(newValue);
    };

    self.updateDateQuery = function(dateQuery){
      self.report = null;
      self.reportModels = null;
      var dateSelected = dateQuery.split("-");
      var dateBacktest = self.dateBacktest.split("-");
      self.datepicker.dateDisplay = monthNames[dateSelected[1]-1] + ' de ' + dateSelected[0];
      if(!$scope.$$phase) $scope.$apply();
      if (dateSelected <= dateBacktest) self.loadReport(dateSelected[0],dateSelected[1]);
    };

    self.loadReport = function(year,month){
      reportService.getReportByMonthAndYear(year,month).then(function(result){
        self.report = result.data.report;
      });

      reportService.getReportModelsByMonthAndYear(year,month).then(function(result){
        self.reportModels = result.data.report_models;
      });      
    };
    



    $scope.$watch(function(){
      return utilsData.currentDate;
      },function(newValue,oldValue){
        if (newValue){
          self.datepicker.date = utilsData.getCurrentDateBacktest();
          self.dateBacktest = angular.copy(self.datepicker.date);
          self.updateDateQuery(self.datepicker.date);
        }
    });

  }]);

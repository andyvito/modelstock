'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.reportService
 * @description
 * # reportService
 * Service in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .service('reportService', function (ApiService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getAllIndicators = function(){
		return ApiService.getAllIndicators();
	};

	this.getReportByMonthAndYear = function(year,month){
		return ApiService.getReportByMonthAndYear(year,month);
	};

	this.getReportModelsByMonthAndYear = function(year,month){
		return ApiService.getReportModelsByMonthAndYear(year,month);
	};


  });

'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.data/utilsdata
 * @description
 * # data/utilsdata
 * Factory in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .factory('utilsData', function () {
    // Service logic
    var self = this;
    self.monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    // ...
    var factory = {
      currentYear: null,
      currentMonth: null,
      getCurrentYear: function () {
          return factory.currentYear;
      },
      setCurrentYear: function (year){
        factory.currentYear = year;
      },
      getCurrentMonth: function () {
          return factory.currentMonth;
      },
      setCurrentMonth: function (month){
        factory.currentMonth = month;
      },
      getCurrentMonthName: function(){
      	if (factory.currentMonth)
      		return self.monthNames[factory.currentMonth - 1];
      	else
      		return false;
      },
    };

    // Public API here
    return factory;



  });

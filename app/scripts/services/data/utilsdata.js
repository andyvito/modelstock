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
      getCurrentMonth: function () {
          return factory.currentMonth;
      },
      setCurrentDate: function(dateServer){
        factory.currentYear = dateServer.year;
        factory.currentMonth = dateServer.month;
        factory.currentDate = dateServer.date;
      },
      getCurrentDateBacktest:function(){
        return factory.currentYear+'-'+factory.currentMonth;
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

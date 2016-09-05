'use strict';

/**
 * @ngdoc directive
 * @name modelsstockApp.directive:components/YearMonthPicker
 * @description
 * # components/YearMonthPicker
 */
angular.module('modelsstockApp')
  .directive('yearMonthPicker', function () {
    return {
      template: 'views/models/cards/yearmonthpicker.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
            var currentYear = new Date().getFullYear();
		    var currentMonth = new Date().getMonth();
		    var monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
		      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

		    //Default year and month to countdown
		    var finalYear = 2005;
		    var finalMonth = 0;

		    //TODO: how pass the model to this element? I have to fix this component because is non functional.
			if (model.last_backtest.real_year != null) finalYear = model.last_backtest.real_year;
			if (model.last_backtest.real_month != null) finalMonth = model.last_backtest.real_month - 1;
			if (model.last_backtest.validate_year != null) finalYear = model.last_backtest.validate_year;
			if (model.last_backtest.validate_month != null) finalMonth = model.last_backtest.validate_month - 1;


			// Build a list of months up to initial year
			for (var y = currentYear; y >= finalYear; y--) {
				if (y === finalYear && finalMonth === 11) break; 

					$scope.years.push(y);
					$scope.items.push({year: y, text: y, header: true});

					for (var m = 11; m >= 0; m--) {
						if (y === currentYear && m >= currentMonth) continue;
						if (y === finalYear && m === finalMonth) break;	    	
						$scope.items.push({year: y, month: m, text: monthNames[m]});
					}
			}

			// Whenever a different year is selected, scroll to that year
		    $scope.$watch('selectedYear', angular.bind($scope, function(yearIndex) {
		      var scrollYear = Math.floor($scope.topIndex / 13);
		      if(scrollYear !== yearIndex) {
		        $scope.topIndex = yearIndex * 13;
		      }
		    }));
		    // The selected year should follow the year that is at the top of the scroll container
		    $scope.$watch('topIndex', angular.bind($scope, function(topIndex) {
		          var scrollYear = Math.floor(topIndex / 13);
		          $scope.selectedYear = scrollYear;
		        }));
		    

      }
    };
  });

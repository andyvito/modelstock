'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ModelsClosemonthCtrl
 * @description
 * # ModelsClosemonthCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ModelsCloseMonthCtrl', ['$rootScope','$mdDialog', '$mdToast', 'closeMonthService', 'utilsData',
  		function ($rootScope,$mdDialog,$mdToast,closeMonthService,utilsData) {
  	var self = this;
  	self.result = null;
  	self.current_year = utilsData.getCurrentYear();
  	self.current_month = utilsData.getCurrentMonthName();

  	this.closeMonth = function(){
  		console.log(self.result);
  		if (self.result == 1){
			closeMonthService.closeMonth().then(function(result){
				utilsData.setCurrentDate(result.data.date);
        //utilsData.setCurrentYear(result.data.current_date[0].value);
      	///utilsData.setCurrentMonth(result.data.current_date[1].value);


  			$mdDialog.hide();
        $rootScope.$broadcast('updateCurrentDateEvent');  

				$mdToast.show(
                  $mdToast.simple()
                          .textContent('El mes ha sido cerrado satisfactoriamente.')                       
                          .hideDelay(3000)
                          .position('top left')
                  );		
			});
		}
  		else{
  			$mdDialog.hide();
  		}
  	};


  }]);
  		

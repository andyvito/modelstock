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
  		if (self.result == 1){
     
      closeMonthService.closeMonth().then(function(result){
				  utilsData.setCurrentDate(result.data.date);
          $mdDialog.hide();
          $rootScope.$broadcast('updateCurrentDateEvent');  

  				$mdToast.show(
                    $mdToast.simple()
                          .textContent('El mes ha sido cerrado satisfactoriamente.')                       
                          .hideDelay(3000)
                          .position('top left')
                  );		
			},function(error){
            $mdToast.show(
                    $mdToast.simple()
                          .textContent('Hubo un problema cerrando el mes. Por favor, intente verifique e intente más tarde.')                       
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
  		

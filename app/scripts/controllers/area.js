'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:AreaCtrl
 * @description
 * # AreaCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('AreaCtrl', ['$scope','$location', '$anchorScroll','$controller', 'areaService', function ($scope,$location, $anchorScroll,$controller,areaService) {
	//var riskController = $scope.$new();
	//$controller('RiskCtrl',{$scope:riskController });
	//var riskController = $controller('RiskCtrl');

	var self = this;
  	this.toggleForm = function(isSelectedRisk) {
  		if (isSelectedRisk != null){
  			self.showform = !self.showform;	
  		}
     };



	this.saveArea = function(riskid) {
		if(!self.form) return;

		self.form.riskid = riskid;
		areaService.saveNewArea(self.form).then(function(result){
		        console.log(result.data.newArea);
		        //riskController.listOfAreas.push(result.data.newArea); //TODO: how update the parent 
		        $location.hash(result.data.newArea.id);
		        $anchorScroll();
		      });   

		self.form.name = '';
		self.form.lead = '';
		self.showform = false;
	};

	this.cancelForm = function() {
		if(self.form) {
		   self.form.name = '';
		   self.form.lead = '';
		}
		self.showform = false;
	};


  }]);
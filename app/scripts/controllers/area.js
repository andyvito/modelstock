'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:AreaCtrl
 * @description
 * # AreaCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('AreaCtrl', ['$scope','$location', '$anchorScroll','$controller','$uibModal','areaService',
  		'modelsData', 'areasData','risksData',
  		function ($scope,$location, $anchorScroll,$controller,$uibModal,areaService,modelsData,areasData,risksData) {
	
	var self = this;
	self.parentRisk = risksData.getCurrentRisk();
  	
  	this.toggleForm = function(isSelectedRisk) {
  		if (isSelectedRisk != null){
  			self.showform = !self.showform;	
  		}
     };

	this.saveArea = function(riskid) {
		if(!self.form) return;

		self.form.riskid = riskid;
		areaService.saveNewArea(self.form).then(function(result){
		        self.areas.push(result.data.new_area);
		        areasData.setAreas(self.areas)
		        $location.hash(result.data.new_area.id);
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

	this.updateArea = function(riskid, areaUpdate){
		areaUpdate.riskid = riskid;
        areaService.updateArea(areaUpdate).then(function(result){
            //riskUpdate.editing = false;
          });
	};

	this.selectArea = function(area){
        self.parentRisk = risksData.getCurrentRisk();
        if (self.currentArea == null || self.currentArea.id != area.id){
              self.currentArea = area;
              modelsData.setFilterModelsByRiskAndArea(self.parentRisk.id, self.currentArea.id);
          }else{
            self.currentArea = null;
            modelsData.setFilterModelsByRiskAndArea(self.parentRisk.id, null);
          }   
	};

	this.removeArea = function(index,$event) {
		if ($event.stopPropagation) $event.stopPropagation();
        if ($event.preventDefault) $event.preventDefault();
		var modalInstance = $uibModal.open({
		  animation: true,
		  controller: 'AreaModelMontrollerCtrl',
		  templateUrl: 'views/components/types/modalremovearea.html',
		  resolve: {
		    numberModels: function() {
		      return 'XXXXXXX';
		    },
		    nameArea: function(){
		      return areasData.getAreas()[index].name;
		    }
		  }
		});

		modalInstance.result.then(function () {
		    self.selectedAreaId = areasData.getAreas()[index].id;
		    areaService.deleteAreaByRisk(self.parentRisk.id, self.selectedAreaId).then(function(result){
		      self.areas.splice(index, 1);
		      areasData.setAreas(self.areas)
		    });   
		}, function () {
		  //TODO: what makes when a user cancel modal?
		});
	};

    $scope.$watch(function () { 
       self.areas = areasData.getAreas(); 
    }, function(){
    	self.currentArea = areasData.getCurrentArea();
    });


}]);

'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:RiskCtrl
 * @description
 * # RiskCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('RiskCtrl', ['$scope', '$location', '$anchorScroll', 'riskService', 
    function ($scope, $location, $anchorScroll, riskService) {
      var self = this;

      riskService.getAllRisks().then(function(result){
    		self.listOfRisks = result.data.risks;
    	});


      this.toggleForm = function() {
            self.showform = !self.showform;
         };

      this.saveRisk = function() {
            if(!self.form) return;
            
            riskService.saveNewRisk(self.form).then(function(result){
                    self.listOfRisks.push(result.data.risk);
                    $location.hash(result.data.risk.id);
                    $anchorScroll();
                  });   
      
            self.form.name = '';
            self.showform = false;
        };

      this.selectRisk = function(risk){
          self.selectedRiskId = risk.id;
          riskService.getAllAreasByRisks(self.selectedRiskId).then(function(result){
              self.listOfAreas = result.data.areas;
            });     
        };


      this.removeRisk = function(index){
          self.selectedRiskId = self.listOfRisks[index].id;
          riskService.deleteRisk(self.selectedRiskId).then(function(result){
              self.listOfRisks.splice(index, 1);
            });   
        };

      this.updateRisk = function (riskUpdate) {
        riskService.updateRisk(riskUpdate).then(function(result){
            //riskUpdate.editing = true; //TODO: what makes when the result is fine
          });
      };

      this.removeArea = function(index){
          self.selectedAreaId = self.listOfAreas[index].id;
          riskService.deleteAreaByRisk(self.selectedRiskId, self.selectedAreaId).then(function(result){
              console.log(result);
              self.listOfAreas.splice(index, 1);
            });   
      };


      this.cancelForm = function() {
            if(self.form) {
               self.form.name = '';
            }
            self.showform = false;
         };



    }]);

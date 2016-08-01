'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:RiskCtrl
 * @description
 * # RiskCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('RiskCtrl', ['$scope', '$location', '$anchorScroll', '$uibModal','riskService', 
    function ($scope, $location, $anchorScroll, $uibModal, riskService) {
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
          if (self.selectedRiskId != risk.id){
            self.selectedRiskId = risk.id;
            riskService.getAllAreasByRisks(self.selectedRiskId).then(function(result){
                self.listOfAreas = result.data.areas;
                self.numberAreas = self.listOfAreas.length;
              });       
          }else{
            self.selectedRiskId = null;
          }

          
        };

      this.removeRisk = function(index) {
        var modalInstance = $uibModal.open({
          animation: true,
          controller: 'RiskModalControllerCtrl',
          templateUrl: 'views/components/risks/modalremoverisk.html',
          resolve: {
            numberAreas: function() {
              return self.numberAreas;
            },
            nameRisk: function(){
              return self.listOfRisks[index].name;
            }
          }
        });

        modalInstance.result.then(function () {
            self.selectedRiskId = self.listOfRisks[index].id;
            riskService.deleteRisk(self.selectedRiskId).then(function(result){
              self.listOfRisks.splice(index, 1);
              //TODO: Show a message fade confirm this action resolves correct?
            });
        }, function () {
          //TODO: what makes when a user cancel modal?
        });
      };


      this.updateRisk = function (riskUpdate) {
        riskService.updateRisk(riskUpdate).then(function(result){
            //riskUpdate.editing = true; //TODO: what makes when the result is fine
          });
      };


      this.removeArea = function(index) {
        var modalInstance = $uibModal.open({
          animation: true,
          controller: 'AreaModelMontrollerCtrl',
          templateUrl: 'views/components/types/modalremovearea.html',
          resolve: {
            numberModels: function() {
              return 'XXXXXXX';
            },
            nameArea: function(){
              return self.listOfAreas[index].name;
            }
          }
        });

        modalInstance.result.then(function () {
            self.selectedAreaId = self.listOfAreas[index].id;
            riskService.deleteAreaByRisk(self.selectedRiskId, self.selectedAreaId).then(function(result){
              self.listOfAreas.splice(index, 1);
            });   
        }, function () {
          //TODO: what makes when a user cancel modal?
        });
      };



      this.cancelForm = function() {
            if(self.form) {
               self.form.name = '';
            }
            self.showform = false;
         };



    }]);

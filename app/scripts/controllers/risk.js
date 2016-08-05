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
    'modelsData', 'areasData', 'risksData',
    function ($scope, $location, $anchorScroll, $uibModal, riskService, modelsData, areasData,risksData) {
      var self = this;

      riskService.getAllRisks().then(function(result){
        risksData.setRisks(result.data.risks);
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
          if (self.currentRisk == null || self.currentRisk.id != risk.id){
              self.currentRisk = risk;
              risksData.setCurrentRisk(risk);
              riskService.getAllAreasByRisks(self.currentRisk.id).then(function(result){
                areasData.setAreas(result.data.areas);
                self.numberAreas = result.data.areas.length;
              }); 
              modelsData.setFilterModelsByRiskAndArea(self.currentRisk.id, null);
          }else{
            self.currentRisk = null;
            risksData.setCurrentRisk(null);
            modelsData.setFilterModelsByRiskAndArea(null, null);
          }       
          areasData.setCurrentArea(null);   
        };

      this.removeRisk = function(index,$event) {
        if ($event.stopPropagation) $event.stopPropagation();
        if ($event.preventDefault) $event.preventDefault();
        var modalInstance = $uibModal.open({
          animation: true,
          controller: 'RiskModalControllerCtrl',
          templateUrl: 'views/components/risks/modalremoverisk.html',
          resolve: {
            numberAreas: function() {
              return self.numberAreas;
            },
            nameRisk: function(){
              return self.currentRisk.name;
            }
          }
        });

        modalInstance.result.then(function () {
            riskService.deleteRisk(self.currentRisk.id).then(function(result){
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


      this.cancelForm = function() {
            if(self.form) {
               self.form.name = '';
            }
            self.showform = false;
         };

      $scope.$watch(function(){
        return risksData.risks;
        },function(newValue,oldValue){
            self.listOfRisks = newValue;
      });

      $scope.$watch(function(){
        return risksData.currentRisk;
        },function(newValue,oldValue){
            self.currentRisk = newValue;
      });





}]);

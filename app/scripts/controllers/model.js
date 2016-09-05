'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ModelCtrl
 * @description
 * # ModelCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ModelCtrl',['$scope','$stateParams','$state', '$q', '$timeout', '$uibModal', 'modelService', 'typeService', 'kindService', 
      'risksData', 'riskService', 'areasData', 'areaService', 
  		function($scope, $stateParams, $state, $q, $timeout, $uibModal, modelService, typeService, kindService, risksData, 
              riskService, areasData, areaService){
  	
    var self = this;
    
 
    $scope.$on('btnEditModelClickEvent', function () {
      self.disabled = false;
    });

    $scope.$on('btnCancelModelClickEvent', function(){
      //reload model without changes
      self.currentModel = angular.copy(self.currentModelInitial);
      self.disabled = true;
    });

    $scope.$on('btnSaveModelClickEvent', function(){
      modelService.saveModel(self.currentModel).then(function(result){
        self.disabled = true;  
      });
    });

    $scope.$on('btnCloneModelClickEvent', function(){
      modelService.saveModel(self.currentModel).then(function(result){
        self.disabled = true;  


        var modalInstance = $uibModal.open({
              animation: true,
              controller: 'ModelModalCloneCtrl',
              templateUrl: 'views/model/modal/clone.html',
              resolve: {
                
              }
          });
      });
    });


    var modelId = $stateParams.id;
    self.disabled = true;
    self.allRisks = risksData.getRisks();
    self.selectedTypeItem  = null;
    self.searchTypeText    = null;
    self.queryTypeSearch   = queryTypeSearch;

    self.selectedKindItem  = null;
    self.searchKindText    = null;
    self.queryKindSearch   = queryKindSearch;
    


    if (self.allRisks == null){
      riskService.getAllRisks().then(function(result){
        risksData.setRisks(result.data.risks);
        self.allRisks = result.data.risks;
      });
    };

    self.yesNovalues = [{ n: 'No', v: false }, { n: 'Sí', v: true }];
    self.frecuency = [{n:'Mensual', v:1}, {n:'Bimensual', v:2}, {n:'Trimestral', v:3},
                      {n:'Cuatrimestral', v:4}, {n:'Semestral', v:6}, {n:'Anual', v:12}, {n:'Bianual', v:24}];
    

   	modelService.getModelById(modelId).then(function(result){
   			  self.currentModel = result.data.model;
          console.log(self.currentModel);
          //Copy the model because the user could cancel edit action, so restore to initial model state
          self.currentModelInitial = angular.copy(self.currentModel);
          riskService.getAllAreasByRisks(self.currentModel.risk.id).then(function(result){
            self.allAreasByRisk = result.data.areas;
          }); 
          typeService.getAllTypes().then(function(result){
            self.types = result.data.types.map( function (type) {
              return {
                value: type.toLowerCase(),
                display: type
              }
            });
             self.selectedTypeItem = self.currentModel.cat;
          });
          kindService.getAllKinds().then(function(result){
            self.kinds = result.data.kinds.map( function (kind) {
              return {
                value: kind.toLowerCase(),
                display: kind
              }
            });
            self.selectedKindItem = self.currentModel.kind;
          });
    });  


    this.recalculateCapacity = function(){
      self.currentModel.cap_area = (12/self.currentModel.frecuency) * self.currentModel.met_hours_man;
      self.currentModel.cap_qua = (12/self.currentModel.frecuency) * self.currentModel.qua_hours_man;
      self.currentModel.cap_total = self.currentModel.cap_area + self.currentModel.cap_qua;
    };

    this.changeRisk = function(){
      riskService.getAllAreasByRisks(self.currentModel.risk.id).then(function(result){
        self.allAreasByRisk = result.data.areas;
      }); 


    };


    $scope.$watch(function(){
      return self.searchTypeText;
      },function(newValue,oldValue){
          if (self.currentModel != null){
            self.currentModel.cat = newValue;  
          }
      });    


    $scope.$watch(function(){
      return self.searchKindText;
      },function(newValue,oldValue){
          if (self.currentModel != null){
            self.currentModel.kind = newValue;  
          }
      });    

    // ******************************
    // Internal methods
    // ******************************
    function queryTypeSearch (query) {
      var results = query ? self.types.filter( createFilterForType(query) ) : self.types;
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    };

    /**
     * Create filter function for a query string
     */
    function createFilterForType(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(types) {
        return (types.value.indexOf(lowercaseQuery) === 0);
      };
    };

   function queryKindSearch (query) {
      //var results = query ? self.kinds.filter( createFilterForKind(query) ) : self.kinds;
      var results = self.kinds;
      results = self.kinds.filter( createFilterForKind(query) );
      if (results.length <= 0) {
       results = self.kinds; 
      }
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    };

    /**
     * Create filter function for a query string
     */
    function createFilterForKind(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(kinds) {
        return (kinds.value.indexOf(lowercaseQuery) === 0);
      };
    };


  }]);

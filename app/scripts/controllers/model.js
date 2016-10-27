'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ModelCtrl
 * @description
 * # ModelCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ModelCtrl',['$rootScope','$scope','$mdToast','$mdDialog', '$stateParams','$state', '$q', '$timeout', '$uibModal', 'modelService', 'typeService', 'typesData', 
      'kindService', 'risksData', 'riskService', 'areasData', 'areaService', 'lensData', 'kindsData',
  		function($rootScope, $scope, $mdToast, $mdDialog, $stateParams, $state, $q, $timeout, $uibModal, modelService, typeService, typesData, kindService, risksData, 
              riskService, areasData, areaService, lensData, kindsData){
  	
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
      if($scope.modelForm.$invalid){
            $mdToast.show(
                          $mdToast.simple()
                                  .textContent('Hay campos que son necesarios y tienen errors. Por favor, verifique e intente nuevamente!')                       
                                  .hideDelay(3000)
                                  .position('top left')
                        );
              return;
      }else{
        modelService.updateModel(self.currentModel).then(function(result){
          self.disabled = true;  
          $rootScope.$broadcast('modelUpdateEvent'); 

          $mdToast.show(
                        $mdToast.simple()
                                .textContent('El modelo '+ self.currentModel.name + ' ha sido actualizado con satisfaccion.')                       
                                .hideDelay(3000)
                                .position('top left')
                      );
        });
      }
    });

    $scope.$on('btnCloneModelClickEvent', function(){
      $mdDialog.show({
                      controller: 'ModelModalCloneCtrl',
                      controllerAs: 'vm',
                      templateUrl: 'views/model/modal/clone.html',
                      bindToController: true,
                      //parent: angular.element(document.body),
                      //targetEvent: evt,
                      //clickOutsideToClose:false,
                      focusOnOpen: true,
                      locals: {
                        model: self.currentModel
                      }
                    })
                    .then(function() {
                      /*self.currentModel = modelUpdate;
                      self.currentModelInitial = angular.copy(self.currentModel);*/
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

    self.selectedLenItem  = null;
    self.searchLenText    = null;
    self.queryLenSearch   = queryLenSearch;
    


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
          //Copy the model because the user could cancel edit action, so restore to initial model state
          self.currentModelInitial = angular.copy(self.currentModel);

          console.log(self.currentModel);

          riskService.getAllAreasByRisks(self.currentModel.risk.id).then(function(result){
            self.allAreasByRisk = result.data.areas;
          }); 

          self.selectedTypeItem = self.currentModel.cat;
          self.selectedKindItem = self.currentModel.kind;
          self.selectedLenItem = self.currentModel.len;
    });  


    this.changeRisk = function(){
      riskService.getAllAreasByRisks(self.currentModel.risk.id).then(function(result){
        self.allAreasByRisk = result.data.areas;
      }); 
    };

    this.implementModel = function(){
      $mdDialog.show({
                      controller: 'ModelModalImplementCtrl',
                      controllerAs: 'modelCtrl',
                      templateUrl: 'views/model/modal/implement.html',
                      bindToController: true,
                      //parent: angular.element(document.body),
                      //targetEvent: evt,
                      //clickOutsideToClose:false,
                      focusOnOpen: true,
                      locals: {
                        model: self.currentModel
                      }
                    })
                    .then(function(modelUpdate) {
                      self.currentModel = modelUpdate;
                      self.currentModelInitial = angular.copy(self.currentModel);
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

    $scope.$watch(function(){
      return self.searchLenText;
      },function(newValue,oldValue){
          if (self.currentModel != null){
            self.currentModel.len = newValue;  
          }
      });   



    $scope.$watch(function(){
      return lensData.lens;
      },function(newValue,oldValue){
        self.lens = newValue;            
    });    

    $scope.$watch(function(){
      return typesData.types;
      },function(newValue,oldValue){
        self.types = newValue;            
    });  

    $scope.$watch(function(){
      return kindsData.kinds;
      },function(newValue,oldValue){
        self.kinds = newValue;            
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



   function queryLenSearch (query) {     
      //var results = query ? self.lens.filter( createFilterForLen(query) ) : self.lens;
      var results = self.lens;
      results = self.lens.filter( createFilterForLen(query) );
      if (results.length <= 0) {
       results = self.lens; 
      }
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    };

    /**
     * Create filter function for a query string
     */
    function createFilterForLen(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(lens) {
        return (lens.value.indexOf(lowercaseQuery) === 0);
      };
    };



  }]);

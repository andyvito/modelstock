'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:ModelsNewmodelCtrl
 * @description
 * # ModelsNewmodelCtrl
 * Controller of the modelsstockApp
 */
angular.module('modelsstockApp')
  .controller('ModelsNewmodelCtrl', ['$rootScope', '$scope', '$q', '$timeout', '$mdDialog', 'modelService', 'typeService', 'kindService', 'risksData', 
              'riskService', 'areasData', 'areaService', 'lensData', 'typesData', 'kindsData', 
              function ($rootScope, $scope, $q, $timeout, $mdDialog, modelService, typeService, kindService, risksData, riskService, areasData, 
              	areaService, lensData, typesData, kindsData) {
    self = this;
	  self.model = {};

  	$scope.currentStep = 1;
    self.allRisks = risksData.getRisks();
    self.yesNovalues = [{ n: 'No', v: false }, { n: 'Sí', v: true }];

    this.changeRisk = function(){
        riskService.getAllAreasByRisks(self.model.risk.id).then(function(result){
          self.allAreasByRisk = result.data.areas;
        }); 
      }

    this.setNextStep = function(step){
    	$scope.currentStep = step;
    }

    this.setPreviousStep = function(step){
		  $scope.currentStep = step;
    }

    this.createModel = function(){
      modelService.createModel(self.model).then(function(result){
        $rootScope.$broadcast('newModelCreatedEvent',result.data.model[0]);
        $mdDialog.hide();
      });
    }
      






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
    self.queryTypeSearch = function(query) {
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

   self.queryKindSearch  = function(query) {
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

   self.queryLenSearch  = function(query) {    
      //var results = query ? self.lens.filter( createFilterForLen(query) ) : self.lens;
      var results = self.lens.filter(createFilterForLen(query));
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

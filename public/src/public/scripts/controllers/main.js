'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modelsstockApp
 */

angular.module('modelsstockApp')
    .controller('MasterCtrl', ['$rootScope','$scope', '$cookieStore', '$mdSidenav',  '$state', '$uibModal', 'utilsData', MasterCtrl]);
function MasterCtrl($rootScope, $scope, $cookieStore, $mdSidenav,  $state, $uibModal, utilsData) {
    var self = this;
    self.currentYear = null;
    self.curerntMonthName = null;
    $scope.$state = $state;

    $scope.toggleLeft = buildToggler('left');
    

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }

    this.optionSelect = function(opt){
    	$mdSidenav('left').close();
      	$state.go(opt);
    };

    this.currentYear = utilsData.getCurrentYear();
    this.currentMonthName = utilsData.getCurrentMonthName();


    $scope.$watch(function(){
      return utilsData.currentYear;
      },function(newValue,oldValue){
        self.currentYear = newValue;
      });

    $scope.$watch(function(){
      return utilsData.currentMonth;
      },function(newValue,oldValue){
        self.currentMonthName = utilsData.getCurrentMonthName();
      });



    
}

'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modelsstockApp
 */

angular.module('modelsstockApp')
    .controller('MasterCtrl', ['$rootScope','$scope', '$cookieStore', '$mdSidenav',  '$state', '$uibModal', MasterCtrl]);
function MasterCtrl($rootScope, $scope, $cookieStore, $mdSidenav,  $state, $uibModal) {
    
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




    
}

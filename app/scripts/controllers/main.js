'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modelsstockApp
 */

angular.module('modelsstockApp')
    .controller('MasterCtrl', ['$scope', '$cookieStore', '$mdSidenav', MasterCtrl]);
function MasterCtrl($scope, $cookieStore, $mdSidenav) {
    
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }
    
}

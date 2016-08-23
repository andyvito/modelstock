'use strict';

/**
 * @ngdoc function
 * @name modelsstockApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the modelsstockApp
 */
angular
    .module('modelsstockApp')
    .controller('AlertsCtrl', ['$scope', 'typeService', AlertsCtrl]);

function AlertsCtrl($scope, typeService) {

    typeService.getAllTypes();


    $scope.alerts = [{
        type: 'success',
        msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
    }, {
        type: 'danger',
        msg: 'Found a bug? Create an issue with as many details as you can.'
    }];

    $scope.addAlert = function() {
        $scope.alerts.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}
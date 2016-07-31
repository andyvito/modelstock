'use strict';

 /**
 * @ngdoc overview
 * @name modelsstockApp
 * @description
 * # modelsstockApp
 *
 * Route configuration of the application.
 */
angular.module('modelsstockApp').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'views/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'views/tables.html'
            })
            .state('types', {
                url: '/types',
                templateUrl: 'views/types.html'
            })
            .state('risks', {
                url: '/risks',
                templateUrl: 'views/risks.html'
            })
            ;
    }
]);

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
            .state('models', {
                url: '/models',
                templateUrl: 'views/models.html',
                controller: 'ModelsCtrl',
                controllerAs: 'modelsCtrl'
            })
            .state('model', {
                url: '/model/:id',
                templateUrl: 'views/model.html',
                controller: 'ModelCtrl',
                controllerAs: "model"
            })
            .state('reports', {
                url: '/reports',
                templateUrl: 'views/reports.html',
                controller: 'ReportCtrl',
                controllerAs: 'report'
            });
    }
]);

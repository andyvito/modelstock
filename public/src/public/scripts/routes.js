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
                templateUrl: 'public/views/models.html',
                controller: 'ModelsCtrl',
                controllerAs: 'modelsCtrl'
            })
            .state('models', {
                url: '/models',
                templateUrl: 'public/views/models.html',
                controller: 'ModelsCtrl',
                controllerAs: 'modelsCtrl'
            })
            .state('model', {
                url: '/model/:id',
                templateUrl: 'public/views/model.html',
                controller: 'ModelCtrl',
                controllerAs: "model"
            })
            .state('reports', {
                url: '/reports',
                templateUrl: 'public/views/reports.html',
                controller: 'ReportCtrl',
                controllerAs: 'reportCtrl'
            });
    }
]);

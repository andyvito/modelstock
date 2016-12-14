(function(){
	"use strict";

	angular.module('public')
	.config(routeConfig);

	/**
	* Configures the router and views
	**/
	routeConfig.$inject = ['$stateProvider'];
	function routeConfig($stateProvider){

        // Application routes
        //TODO: Put abstract true for one state and the other
        // make public. i.e. public.models, public.model, public.reports
        $stateProvider
            /*.state('index', {
                url: '/',
                templateUrl: 'views/models.html',
                controller: 'ModelsCtrl',
                controllerAs: 'modelsCtrl'
            })*/
            .state('public',{
                absract: true,
                templateUrl: 'scripts/public/public.html'
            })
            .state('public.models', {
                url: '/models',
                templateUrl: 'scripts/public/models/models.html',
                controller: 'ModelsController',
                controllerAs: 'modelsCtrl',
                resolve: {
                    indicators: ['ReportService',function(ReportService){
                        return ReportService.getIndicators();
                    }],
                    models: ['ModelsService', function(ModelsService){
                        return ModelsService.getAllModels();

                    }],
                    risks: ['RisksService', function(RisksService){
                        
                        return RisksService.getAllRisks();
                    }]
                }
            })
            /*
            .state('model', {
                url: '/model/:id',
                templateUrl: 'views/model.html',
                controller: 'ModelCtrl',
                controllerAs: "model"
            })*/

            
            .state('public.model',{
                url: '/model/{id}',
                templateUrl: 'views/model.html', //TODO: fix with the new template
                controller: 'ModelCtrl',
                controllerAs: 'model' /*,
                resolve: {
                    model: ['$stateParams', 'ModelsService', function($stateParams, ModelsService){
                            return ModelsService.getModelById($stateParams.id);
                    }]
                }
                */
            })
            
            .state('reports', {
                url: '/reports',
                templateUrl: 'views/reports.html',
                controller: 'ReportCtrl',
                controllerAs: 'reportCtrl',
                resolve: {
                    indicators: ['ReportService',function(ReportService){
                        return ReportService.getIndicators();
                    }]
                }
            });
	};


})();

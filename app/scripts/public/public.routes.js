(function(){
	"use restrict";

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
            .state('index', {
                url: '/',
                templateUrl: 'views/models.html',
                controller: 'ModelsCtrl',
                controllerAs: 'modelsCtrl'
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
                controllerAs: 'reportCtrl'
            });


	};


})();

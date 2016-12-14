/**
 * @ngdoc overview
 * @name modelsstockApp
 * @description
 * # modelsstockApp
 *
 * Main module of the application.
 */
(function(){
  'use strict';

  angular
    .module('modelsstockApp', ['public',
      'ngRoute','ui.bootstrap', 'ui.router', 'ngCookies', 'ngMaterial', 'ngMessages', 'ngMdIcons', 'moment-picker'
    ])
    .config(config);

    config.$inject = ['$urlRouterProvider'];
    function config($urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    };


    

})();




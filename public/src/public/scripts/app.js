'use strict';

/**
 * @ngdoc overview
 * @name modelsstockApp
 * @description
 * # modelsstockApp
 *
 * Main module of the application.
 */
angular
  .module('modelsstockApp', [
    'ngRoute','ui.bootstrap', 'ui.router', 'ngCookies', 'ngMaterial', 'ngMessages', 'ngMdIcons', 'moment-picker'
  ])
  .run(['riskService', 'risksData', 'lenService', 'lensData', 'typeService', 'typesData', 
    'kindService', 'kindsData', 'configService', 'utilsData',
    function(riskService,risksData,lenService,lensData,typeService,typesData,kindService,kindsData,configService,utilsData){
  

    configService.loadCurrentDateBacktesting().then(function(result){
      utilsData.setCurrentDate(result.data.date);
    });

    riskService.getAllRisks().then(function(result){
        risksData.setRisks(result.data.risks);
    });

    lenService.getAllLens().then(function(result){
        lensData.setLens(result.data.lens);
    });

    typeService.getAllTypes().then(function(result){
      typesData.setTypes(result.data.types);
    });

    kindService.getAllKinds().then(function(result){
      kindsData.setKinds(result.data.kinds);
    });

}]);

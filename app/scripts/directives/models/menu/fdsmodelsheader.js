'use strict';

/**
 * @ngdoc directive
 * @name modelsstockApp.directive:models/menu/fdsmodelsheader
 * @description
 * # models/menu/fdsmodelsheader
 */
angular.module('modelsstockApp')
  .directive('fdsModelsHeader', function () {
    return {
      templateUrl: 'views/models/menu/fdsmodelsheader.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      },
      controller: function($scope,$rootScope, $mdDialog){
      	    $scope.clickNewModel = function(){
      	    	$mdDialog.show({
                      controller: 'ModelsCardsBackgroundCtrl',
                      templateUrl: 'views/models/cards/backtest.html',
                      bindToController: true,
                      //parent: angular.element(document.body),
                      //targetEvent: evt,
                      clickOutsideToClose:false,
                      focusOnOpen: true,
                      locals: {
                          model: {id:1}
                      }
                    })
                    .then(function(newBacktest) {
                      if (newBacktest){
                        self.models = modelsData.updateBacktesting(newBacktest);
                      }
                    });
		    };
      }
    };
  });

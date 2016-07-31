'use strict';

/**
 * @ngdoc directive
 * @name modelsstockApp.directive:showFocus
 * @description
 * # showFocus
 */
angular.module('modelsstockApp')
  .directive('showFocus', function($timeout) {
  return function(scope, element, attrs) {
    scope.$watch(attrs.showFocus, 
      function (newValue) { 
        $timeout(function() {
            newValue && element.focus();
        });
      },true);
  };    
});
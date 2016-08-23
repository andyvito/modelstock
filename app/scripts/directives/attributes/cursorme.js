'use strict';

/**
 * @ngdoc directive
 * @name modelsstockApp.directive:attributes/cursorMe
 * @description
 * # attributes/cursorMe
 */
angular.module('modelsstockApp')
  .directive('cursorMe', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

			element.bind('mouseenter', function() {
                element.css('cursor', 'pointer');
            });
      }
    };
  });

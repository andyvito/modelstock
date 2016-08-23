'use strict';

/**
 * @ngdoc directive
 * @name modelsstockApp.directive:myEnter
 * @description
 * # myEnter
 */
angular.module('modelsstockApp')
  .directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });
                event.preventDefault();
            }
        });
    };
});
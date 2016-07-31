'use strict';

/**
 * @ngdoc directive
 * @name modelsstockApp.directive:textInputUpdate
 * @description
 * # components/textInputUpdate
 */
angular.module('modelsstockApp')
  .directive('textInputUpdate', function () {
    return {
      restrict: 'E',
      scope: {
      	value:'=valueEdit',
      	myBlur: '&'
      },
      template: '<span data-ng-hide="editing" class="col-lg-12">{{value}}</span>' +
          '<input data-ng-show="editing" data-ng-model="value" show-focus="editing" ' +
          		'data-ng-blur="doneEditing()" my-enter="doneEditing()" class="form-control col-lg-12">',
      link: function postLink(scope, element, attrs) {
      	scope.editing = false;

		element.bind('dblclick', function () {
                scope.editing = true;
                scope.$apply();
        	});

        element.bind('mouseover', function() {
        	element.css('cursor', 'pointer');
      	});        	

      	scope.doneEditing = function(){
        	scope.editing = false;
			scope.myBlur();
        };

        /*element.bind('mouseenter', function () {
            element.css('background-color', 'yellow');
        });
        element.bind('mouseleave', function () {
            element.css('background-color', 'white');
        });*/

      }



    };
  });


       